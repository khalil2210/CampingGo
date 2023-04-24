import { Component, OnInit } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';

@Component({
  selector: 'app-edit-chatroom',
  templateUrl: './edit-chatroom.component.html',
  styleUrls: ['./edit-chatroom.component.css']
})
export class EditChatroomComponent implements OnInit {

  constructor(private apiService:ChatApiService) { }
  chatroomName?:string;
  imageFile?:any;
  usernametToAdd?:string;
  usersList:any[]=[];

  ngOnInit(): void {
  }
  closeDialog(){this}



  onFileSelected(event:any) {
    this.imageFile = event.target.files[0];
  }





//to be moved to chatroom
addUserToChatroom(username:string,chatroomId:number){

  this.apiService.addUserToChatroom(username,chatroomId).subscribe({
    next:(res:any)=>{
    },
    complete:()=>{}
  })
}

//to be moved to chatroom
removeUserFromChatroom(username:string,chatroomId:number){
  this.apiService.removeUserFromChatroom(username,chatroomId).subscribe({
    next:(res:any)=>{
    },
    complete:()=>{}
  })
}

}

