import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Equipment } from './../Model/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  shoppingList: any[] = [];
  total=0;
  url="http://localhost:8090/Equipment/"
  constructor(private http:HttpClient) { }
  ajouterequipment(e:Equipment,id:number):Observable<any>{

    return this.http.post<any>(this.url+"addEquipment1/"+id,e)

  }
  ajouterequipment1(e:Equipment,id:number,id1:number):Observable<any>{

    return this.http.post<any>(this.url+"addEquipment2/"+id+"/"+id1,e)

  }
  update(eq:Equipment,id:number):Observable<any>{
   return this.http.put<any>(this.url+"updateEquipment1/"+id,eq)
  }
  delete(id:any){
    return this.http.delete(this.url+"delete/"+id)
  }

  getall():Observable<any>{
    return this.http.get<any>(this.url+"getall")
  }

}
