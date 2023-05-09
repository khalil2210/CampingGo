import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChargeRequest } from '../../Model/chargeRequest';
import { EquipmentService } from '../../service/equipment.service';

@Component({
  selector: 'app-listepayment',
  templateUrl: './listepayment.component.html',
  styleUrls: ['./listepayment.component.css']
})
export class ListepaymentComponent implements OnInit {
liste:any
  constructor(private http:HttpClient,private s:EquipmentService) { }
orders1:any
host="http://localhost:8090"

  ngOnInit(): void {
    this.http.get<ChargeRequest>('http://localhost:8090/getall').subscribe((data)=>{

this.orders1=data
console.log(this.orders1);

  })
 this.liste=this.s.orders
  }

}
