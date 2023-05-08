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
  userId!:number;
  //selectedChatroom?:any;
  chatroomId?:number;
  usernametToAdd?:string;
  chatroomName?:string;
  imageFile?:any;
  updateImageFile?:any;
  usersList:User[]=[];
  constructor(
    private apiService:ChatApiService,
    private route: ActivatedRoute
    ){}

    onFileSelected(event:any) {
      this.imageFile = event.target.files[0];
    }

    onFileSelectedUpdate(event:any) {
      this.updateImageFile = event.target.files[0];
    }

ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    this.chatroomName=params["name"];
    this.chatroomId=params["chatroomId"];
    this.usersList=this.apiService.getAllUsersByChatroom(this.chatroomId!);
          });
this.getChatrooms();
this.userId=Number(localStorage.getItem("id"))

}
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

getAllUsersByChatroom(){
  this.usersList=this.apiService.getAllUsersByChatroom(this.chatroomId!)
}

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

updatechatroom(){
this.apiService.updateChatroom(this.chatroomId!,this.updateImageFile,this.chatroomName!).subscribe((res)=>{
  let position = this.chatroomList.findIndex(chatroom => chatroom.id === this.chatroomId);
  this.chatroomList.splice(position,1,res);
  this.ngOnInit()
}
);

}
}
