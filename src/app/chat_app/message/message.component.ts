
import { Component, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ChatApiService } from 'src/app/services/chat-api.service';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { read } from '@popperjs/core';
import { MatDialog } from '@angular/material/dialog';
import { EditChatroomComponent } from '../Pop_up/edit-chatroom/edit-chatroom.component';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  messageList:any[]= [];
  idChatroom?:number;
  sender:number=1;
  inputSendMessage:String='';
  selectedFile?: any;
  private stompClient:any ;
  chatroomName:any;


  constructor(
    private apiService:ChatApiService,
    private route: ActivatedRoute,
    private dialog:MatDialog){}


openDialog(){
const dialogRef= this.dialog.open(EditChatroomComponent,{
  height:'90vh',
  width:'90vw'
});
dialogRef.afterClosed().subscribe((result)=>{});
}
  ngOnInit(): void {
  this.route.params.subscribe(params=>{
    var socket = new SockJS('http://localhost:8090/ws-websocket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame:any) => {
    this.stompClient.subscribe('/chatroom/'+this.idChatroom, (greeting:any)=>
    {
     this.messageList.push(JSON.parse(greeting.body))
    });
      });

  this.route.queryParams.subscribe(params=>{

this.chatroomName=params["name"];

    });

  let chatroomId =params["chatroomId"];
  this.getMessagesBychatroom(chatroomId);
  this.getAllUsersByChatroom(chatroomId);
  })
}



onFileSelected(event:any) {
  this.selectedFile = event.target.files[0];
}


getMessagesBychatroom(idChatroom: number){
  this.idChatroom=idChatroom;
  this.apiService.getMesaagesByChatroom(idChatroom).subscribe(data=>{
  this.messageList=data;

})
}


//to be moved to chatroom works
getAllUsersByChatroom(chatroomId:number){
  this.apiService.getAllusersByChatroom(chatroomId).subscribe({
    next:(res:any)=>{
    },
    complete:()=>{}
  })
}


//to be moved to chatroom
addUserToChatroom(senderId:number,chatroomId:number){
  this.apiService.addUserToChatroom(senderId,chatroomId).subscribe({
    next:(res:any)=>{
    },
    complete:()=>{}
  })
}


sendMessageWebSocket(message:any,chatroomId:number){
this.stompClient.send("/app/sendMessageToChatroom/" +chatroomId, {},
JSON.stringify(message));
this.inputSendMessage=''
}

sendImageWebSocket(image:File,chatroomId:number){
  // const formData = new FormData();
  // formData.append('file',this.selectedFile!);
  // this.stompClient.send(
  //   "/app/sendImageToChatroom",{

  //   },formData);
  const reader = new FileReader();
  reader.onload = () => {
    const buffer = reader.result as ArrayBuffer;
    const bytes = new Uint8Array(buffer);
    let message = {
      imageData: bytes,
   };
  console.log(message);
  this.stompClient.send(
  "/app/sendImageToChatroom",{}, JSON.stringify(message));
}
reader.readAsArrayBuffer(this.selectedFile)

}



}
