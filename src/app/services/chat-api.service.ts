import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../core/model/user';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {
  usersList:User[]=[];

  getAllUsersByChatroom(chatroomId:number){
    this.usersList=[]
    this.getAllusersByChatroomService(chatroomId).subscribe({
    next:(res:any)=>{
    for (let index = 0; index < res.length; index++) {
    this.usersList.push({
    id:res[index].id,
    firstName:res[index].firstName,
    lastName:res[index].lastName,
    username:res[index].username,
    profileImage:{id:res[index].profileImage.id}
    })}}
    })
  return this.usersList
    }
  constructor(private http:HttpClient) {}

  getChatrooms(){
    return this.http.get<any>('http://localhost:8090/chatroom/getAllChatroom')
    }

  addChatroom(chatroom:any,imageFile :any){
      const url='http://localhost:8090/chatroom/addChatroom'
      const formData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      const json = JSON.stringify(chatroom);
      const blob = new Blob([json], { type:'application/json' });
      formData.append('chatroom', blob);
      formData.append('file', imageFile);
      return this.http.post(url, formData,{headers});
    }

  deleteChatroom(chatroomId:number){
      return this.http.delete('http://localhost:8090/chatroom/deleteChatroom/'+chatroomId)
    }

  sendMessage(chatroomId:number,message:any){
    const url='http://localhost:8090/message/addMessage'
      const headers= new HttpHeaders(
        {
        'Content-Type': 'application/json'
      });
    const params = new HttpParams()
    .set('chatroomId', chatroomId)
    return this.http.post(url, message,{params:params,headers:headers});
  }

  getMesaagesByChatroom(idChatroom: number){
      return this.http.get<any>('http://localhost:8090/message/getAllByChatroom/'+idChatroom)
   }


  getAllusersByChatroomService(chatroomId:number){
    const url='http://localhost:8090/chatroom/getAllUsersByChatroom'
    const params = new HttpParams().set('chatroomId', chatroomId);
    return this.http.get(url,{params});
  }

  //to be implemented
  addUserToChatroom(username:string,chatroomId:number){
    const url='http://localhost:8090/chatroom/addUserToChatroom'
    const params = new HttpParams()
    .set('username',username)
    .set('chatroomId',chatroomId);

    return this.http.post(url,params);
  }


  //to be implemented
  removeUserFromChatroom(username:string,chatroomId:number){
    const url='http://localhost:8090/chatroom/removeUserFromChatroom'
    const params = new HttpParams()
    .set('username', username)
    .set('chatroomId',chatroomId);
    return this.http.delete(url,{params});
  }


getUserById(id:number){
  const url='http://localhost:8090/users/get-user-by-id/'+id
  return  this.http.get(url);
}

}
