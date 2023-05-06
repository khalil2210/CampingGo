import { MatDialog ,MatDialogRef } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';
import { User } from 'src/app/core/model/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatroomList:any[]= [];
  inputValue:String='';
  selectedChatroom?:any;
  constructor(
    private apiService:ChatApiService,
    private route: ActivatedRoute){}
    chatroomName?:string;
    imageFile?:any;

    onFileSelected(event:any) {
      this.imageFile = event.target.files[0];
    }



ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    this.chatroomName=params["name"];
    this.chatroomId=params["chatroomId"];
          });
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
chatroomId?:number;

usernametToAdd?:string;
usersList:User[]=[];

//to be moved to chatroom works
getAllUsersByChatroom(chatroomId:number){
this.apiService.getAllusersByChatroom(chatroomId).subscribe({
next:(res:any)=>{
for (let index = 0; index < res.length; index++) {
this.usersList.push({
id:res[index].id,
firstName:res[index].firstName,
lastName:res[index].lastName,
username:res[index].username,
profileImage:{id:res[index].profileImage.id}
})}},
complete:()=>{}
})

}
//
addUserToChatroom(username:string,chatroomId:number){
  this.apiService.addUserToChatroom(username,chatroomId).subscribe({
    next:(res:any)=>{
for (let index = 0; index < res.users.length; index++) {
let resUsername=res.users[index].username
if(resUsername==username)
this.usersList.push({
  id:res.users[index].id,
  firstName:res.users[index].firstName,
  lastName:res.users[index].lastName,
  username:res.users[index].username,
  profileImage:{id:res.users[index].profileImage.id}
  })
}},
    complete:()=>{
      this.usernametToAdd='';
    }
  })
}

//to be moved to chatroom
removeUserFromChatroom(username:string,chatroomId:number){
  this.apiService.removeUserFromChatroom(username,chatroomId).subscribe({
    next:(res:any)=>{
            for (let index = 0; index < this.usersList.length; index++) {
        let resUsername=this.usersList[index].username
        if(resUsername==username){
          this.usersList.splice(index,1)
        }
        }
    },
    error(err) {
      console.log(err);

    },
    complete:()=>{


    }
  })
}
}
