import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../service/equipment.service';
import { Equipment } from '../../Model/Equipment';
import { HttpClient } from '@angular/common/http';
import { ChargeRequest } from '../../Model/chargeRequest';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private s:EquipmentService,private http:HttpClient) { }
  host="http://localhost:8090"
liste!:Equipment[]
  ngOnInit(): void {
// this.s.getall().subscribe(data=>{
//   this.liste=data;
//   console.log(this.liste);
// })

 this.liste=this.s.orders
  }
  orders1:any

}
