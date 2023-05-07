import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Equipment } from './../Model/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  shoppingList: Equipment[] = [];
  orders: Equipment[] = [];
  total=0;
  url="http://localhost:8090/Equipment/"
  constructor(private http:HttpClient) { }
  ajouterequipment(e:Equipment,id:number):Observable<any>{
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });
    return this.http.post<any>(this.url+"addEquipment1/"+id,e,{headers})

  }
  ajouterequipment1(e:Equipment,id:number,id1:number):Observable<any>{
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });
    return this.http.post<any>(this.url+"addEquipment2/"+id+"/"+id1,e,{headers})

  }
  getbytype(equipmentType:any):Observable<any>{
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });
    return this.http.get<any>("http://localhost:8090/Equipment/getbytype?equipmentType="+equipmentType,{headers})
  }
  update(eq:Equipment,id:number):Observable<any>{
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });

   return this.http.put<any>(this.url+"updateEquipment1/"+id,eq,{headers})
  }
  updatelike(eq:Equipment):Observable<any>{
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });
    return this.http.put<any>(this.url+"updateEquipment",eq,{headers})
   }
  delete(id:any){
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });
    return this.http.delete(this.url+"delete/"+id,{headers})
  }

  getall():Observable<any>{
    const accessToken=localStorage.getItem("accessToken")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken });
    return this.http.get<any>(this.url+"getall",{headers})
  }

}
