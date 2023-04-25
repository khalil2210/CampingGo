import { ProfileImage } from './../../../core/model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { ChatApiService } from 'src/app/services/chat-api.service';

@Component({
  selector: 'app-edit-chatroom',
  templateUrl: './edit-chatroom.component.html',
  styleUrls: ['./edit-chatroom.component.css']
})
export class EditChatroomComponent implements OnInit {

  constructor(private apiService:ChatApiService, private route: ActivatedRoute,) { }
  chatroomName?:string;
  chatroomId?:number;
  imageFile?:any;
  usernametToAdd?:string;
  usersList:User[]=[];

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
    this.chatroomName=params["name"];
    this.chatroomId=params["chatroomId"];
          });


  this.getAllUsersByChatroom(this.chatroomId!);
  }
  closeDialog(){this}

  onFileSelected(event:any) {
    this.imageFile = event.target.files[0];
  }


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


     /////////////////////get user whhen added to chatroom to be modified
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

