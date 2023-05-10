import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RechercheGpService {

  constructor(private http:HttpClient  ) { }


  liste:any[]=[]




  
 
  
  

  retrievByDestinationGpCamping(destination:any) : Observable <any> {  
    return this.http.get(`http://localhost:8090/SpringMVC/servlet/GroupCamping/retrievByDestination/${destination}`)
  }
}


