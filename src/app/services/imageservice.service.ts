import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  constructor(private http:HttpClient) { }
  public addImage(image:FormData):Observable<Image>{
    return this.http.post<Image> ("http://localhost:8090/image/saveImage",image);
  }
}
