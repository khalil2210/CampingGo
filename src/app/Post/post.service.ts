import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8090/post';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get<any>("http://localhost:8090/post/allPosts");
  }

  getPostById(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}/postById/${id}');
  }

  addPost(post: any): Observable<any> {
    return this.http.post("http://localhost:8090/post/addPost", post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put("http://localhost:8090/post/updatePost", post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete("http://localhost:8090/deletePost/${id}");
  }

  
  addPostAndImage(post:any,fileInput:any,userId:any){
    const url='http://localhost:8090/post/addPostAndImage'
   const formData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const json = JSON.stringify(post);
    const postJson = new Blob([json],{ type:'application/json' });
    formData.append('post', postJson);
    formData.append('file', fileInput);
    formData.append('userId',userId);
    return this.http.post(url, formData,{headers});
  }

}
