import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
 
 
  constructor(private http : HttpClient) { } 

  public getComments(): Observable <Comment[]> {
    return this.http.get<Comment[]> (`http://localhost:8090/comment/all-comments`);
  }
  
  public deleteComment(id:number):Observable <Object> {
    return this.http.delete<Object>(`http://localhost:8090/comment/delete-comment/${id}`);
  }

  // public addComment(comment:Comment,id:number):Observable<any>{
  //   return this.http.post<any> ("http://localhost:8090/comment/add-comment2/"+id,comment);
  // }
  public addComment(comment:Comment,authorid:number,id?:number){
    if(id == null){
      return this.http.post<any>("http://localhost:8090/comment/add-comment2/"+-1+"/"+authorid,comment);
    }else{
    return this.http.post<any>("http://localhost:8090/comment/add-comment2/"+id+"/"+authorid,comment);
    }
  }

  public updateComment (id:number , comment:Comment){
    return this.http.put("http://localhost:8090/comment/update-comment2/"+id,comment);
  } 
}