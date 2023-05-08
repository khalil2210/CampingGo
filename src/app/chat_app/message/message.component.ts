import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatApiService } from 'src/app/services/chat-api.service';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/model/user';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  messageList:any[]= [];
  idChatroom?:number;
  senderId:number=Number(localStorage.getItem("id"));
  inputSendMessage:String='';
  selectedFile?: any;
  private stompClient:any ;
  chatroomName:any;
  userImageId!:number;


  constructor(
    private apiService:ChatApiService,
    private route: ActivatedRoute,
 ){}

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
this.apiService.getUserById(this.senderId).subscribe((data:any)=>{
  this.userImageId=data.profileImage.id;

})
this.route.queryParams.subscribe(params=>{
this.chatroomName=params["name"];
    });
  let chatroomId =params["chatroomId"];
  this.getMessagesBychatroom(chatroomId);

  })

}

onFileSelected(event:any) {
  this.selectedFile = event.target.files[0];
  console.log(this.selectedFile);

}



getMessagesBychatroom(idChatroom: number){
  this.idChatroom=idChatroom;
  this.apiService.getMesaagesByChatroom(idChatroom).subscribe(data=>{
  this.messageList=data;

})
}

sendMessageWebSocket(message:any,chatroomId:number){
this.stompClient.send("/app/sendMessageToChatroom/" +chatroomId, {},
JSON.stringify(message));
this.inputSendMessage=''
}

sendImageWebSocket(
  ){
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const buffer = reader.result;
      const blob = new Blob([buffer!], { type: this.selectedFile.type });
      // Send the blob over the WebSocket
        const headers = {
        //   'content-type': this.selectedFile.type,
           'content-length': blob.size
         };
      this.stompClient.send(
        "/app/sendImageToChatroom",headers,blob);
    });
  reader.readAsArrayBuffer(this.selectedFile)
}



}
