import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupcampingService {


  constructor(private http:HttpClient) { }


  

  listGroupCamping(): Observable<any> {
    return this.http.get('http://localhost:8090/GroupCamping/GroupCampingS');
  }
  


  retrievByDestinationGpCamping(destination:any) : Observable <any> {
    return this.http.get(`http://localhost:8090/GroupCamping/retrievByDestination/${destination}`)
  }
  
  
  /*addGroupCamping ( groupcamping:any) : Observable<any> {
   console.log(groupcamping);
   
    return this.http.post('http://localhost:8090/GroupCamping/addGroupCamping',groupcamping);
  }
  */




  addGroupCamping (groupcamping:any ,fileInput:any)
  {
      const url='http://localhost:8090/GroupCamping/addGroupCamping' 
       const formData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      const json = JSON.stringify(groupcamping);
      const groupcampingJson = new Blob([json],{ type:'application/json' });
      formData.append('groupCamping',groupcampingJson);
      formData.append('file', fileInput);
      return this.http.post(url, formData,{headers});
    }

  

  




  deleteGroupCamping (id:any) : Observable<any>{
    return this.http.delete(`http://localhost:8090/GroupCamping/deleteGroupCamping/${id}`);

  }






  /*updateGroupCamping1 (fileInput:File, updategroupCamping:any):Observable<any>{
    const formData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const json = JSON.stringify(updategroupCamping);
    const updategroupCampingJson = new Blob([json],{ type:'application/json' });
    formData.append('updategroupCamping',updategroupCampingJson);
    formData.append('file', fileInput);
    return this.http.put('http://localhost:8090/GroupCamping/updateGroupCamping',formData,{headers});
  }
  */



  updateGroupCamping1(fileInput: File, updateGroupCamping: any): Observable<any> {
    const formData = new FormData();
   
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const json = JSON.stringify(updateGroupCamping);
    const updateGroupCampingJson = new Blob([json],{ type:'application/json' });
    formData.append('file', fileInput);
    formData.append('updategroupCamping',updateGroupCampingJson);

    return this.http.put('http://localhost:8090/GroupCamping/updateGroupCamping', formData, { headers });
  }


  updateGroupCamping ( updategroupCamping:any):Observable<any>{
    
    return this.http.put('http://localhost:8090/GroupCamping/updateGroupCamping1',updategroupCamping);
  }




  addUserToGroup( userId:any ,groupId:any):Observable<any>{
    return this.http.post(`http://localhost:8090/GroupCamping/${groupId}/addUser/${userId}`,{});
  }

  
  removeUserToGroup( userId:any ,groupId:any):Observable<any>{
    return this.http.post(`http://localhost:8090/GroupCamping/${groupId}/removeUser/${userId}`,{});
  }
}
