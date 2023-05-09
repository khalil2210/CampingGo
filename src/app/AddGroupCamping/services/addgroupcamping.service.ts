import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddgroupcampingService {

  constructor(private http:HttpClient) { }

  addGroupCamping ( groupcamping:any) : Observable<any> {
    console.log(groupcamping)
    return this.http.post('http://localhost:8090/SpringMVC/servlet/GroupCamping/addGroupCamping',groupcamping);
  }


}



