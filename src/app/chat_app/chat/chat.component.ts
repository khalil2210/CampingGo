import { MatDialog ,MatDialogRef } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';
import { AddChatroomComponent } from '../Pop_up/add-chatroom/add-chatroom.component';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatroomList:any[]= [];
  inputValue:String='' ;
  selectedChatroom?:any;
  constructor(
    private apiService:ChatApiService,
    private dialog:MatDialog){}
    chatroomName?:string;
    imageFile?:any;
    closeDialog(){this}



    onFileSelected(event:any) {
      this.imageFile = event.target.files[0];
    }
openDialog(){
  console.log("click ");

//   const dialogRef= this.dialog.open(AddChatroomComponent);
// dialogRef.afterClosed().subscribe((result)=>{
//  if(result!=null){
//   this.addChatroom(
//     {
//     'name':result.name,
//     'owner':{
//       'id':1
//     }
//   },
//   result.file
//   )
//  }
// })
}


ngOnInit(): void {
this.getChatrooms();}
getChatrooms(){
this.apiService.getChatrooms().subscribe({
  next:(chatrooms:any)=>{
    this.chatroomList=chatrooms


  },
})
}

addChatroom(chatroom:any,image:any){
  this.apiService.addChatroom(chatroom,image).subscribe({
    next:(res:any)=>{
     
      this.chatroomList.push(res)},
    complete:()=>{
      this.inputValue=''
      }
})

}

deleteChatroom(chatroomId:number,index:number){
  this.apiService.deleteChatroom(chatroomId).subscribe({
    complete:()=>this.chatroomList.splice(index,1)})
}
}
