import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Image } from './../Model/Image';


@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  url="http://localhost:8090/image/"
  constructor(private http:HttpClient) { }
  // ajouterimage(img:FormData,id:number):Observable<Image>{
  //   return this.http.post<Image>(this.url+"saveImage2/"+id,img)
  // }
  ajouterimage(img:FormData):Observable<Image>{
    return this.http.post<Image>(this.url+"saveImage1",img)
  }
  getAllImages() {}
}
