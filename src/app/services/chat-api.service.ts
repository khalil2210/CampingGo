import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatApiService {


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


  getAllusersByChatroom(chatroomId:number){
    const url='http://localhost:8090/chatroom/getAllUsersByChatroom'
    const params = new HttpParams().set('chatroomId', chatroomId);
    return this.http.get(url,{params});
  }

  //to be implemented
  addUserToChatroom(userId:number,chatroomId:number){
    const url='http://localhost:8090/chatroom/addUserToChatroom'
    const params = new HttpParams()
    .set('userId',userId)
    .set('chatroomId',chatroomId);
    return this.http.post(url,{params});
  }


  //to be implemented
  removeUserFromChatroom(userId:number,chatroomId:number){
    const url='http://localhost:8090/chatroom/removeUserFromChatroom'
    const params = new HttpParams()
    .set('userId', userId)
    .set('chatroomId',chatroomId);
    return this.http.delete(url,{params});
  }


  //to be implemented
  getUserById(userId:number){

  }

}
