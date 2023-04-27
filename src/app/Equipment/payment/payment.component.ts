import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from '../service/equipment.service';
import { Equipment } from '../Model/Equipment';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  chargeRequest = {
    cardNumber: '',
    exp_month: '',
    exp_year: '',
    cvv: '',
    name: '',
    amount: 0,
    currency: 'usd',
    description: 'test all',
    email: '',
    phone: '+21627324085'

  };

  constructor(private http: HttpClient,private prix:ActivatedRoute,private s:EquipmentService) {

  }
  host = "http://localhost:8090"

  charge() {

    console.log(this.num);

    this.http.post('http://localhost:8090/charge', this.chargeRequest).subscribe(

      (response) => {
        console.log(response);
        alert('Payment successful!');
      },
      (error) => {
        console.log(error);
        alert('Payment failed. Please try again.');
      }
    );
  }
  shoppingList: Equipment[]=[];

  ngOnInit(): void {
    this.shoppingList = this.s.shoppingList;
    console.log(this.shoppingList.map(x=>x.quantity));

  }
  valeurmin=0
  min(x:Equipment ,id:number){

    this.shoppingList.map(a=>{
      if (a.id==id ) {
       if (this.chargeRequest.amount!=0) {
      a.quantity++
        this.chargeRequest.amount=this.chargeRequest.amount-a.price
       }
      }
    })
    console.log(this.shoppingList.map(x=>x.quantity));
  }
quantite=0
num=0
max(x:Equipment,id:number){

    this.shoppingList.map(a=>{
      if (a.id==id  ) {
      if (a.quantity!=0) {
         a.quantity--
        this.chargeRequest.amount=this.chargeRequest.amount+a.price

      }
      }
     })
  console.log(this.shoppingList.map(x=>x.quantity));
}
delete(id: number) {
  let index = this.shoppingList.findIndex(e=>e.id==id)
  let prix= 0
  this.shoppingList.map(a=>{
    if (a.id==id) {
      prix=a.price
    }
  })
  if (index !==-1) {
       this.shoppingList.splice(index, 1)
       if (this.chargeRequest.amount!=0) {
        this.chargeRequest.amount= this.chargeRequest.amount-prix
       }else{
        this.chargeRequest.amount=0
       }
      }
  console.log(index);


}

}
