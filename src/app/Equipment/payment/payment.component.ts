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

  constructor(private http: HttpClient,private prix:ActivatedRoute,private s:EquipmentService,private router:Router) {

  }
  host = "http://localhost:8090"

  charge() {

    console.log();


    this.http.post('http://localhost:8090/charge', this.chargeRequest).subscribe(

      (response) => {
        console.log(response);
        this.shoppingList.map(a=>{

          console.log(a.id)
          console.log(a.quantity)
          a.quantite_payment = 0;
          this.s.update(a,a.id).subscribe(data=>{data.id=a.id
            data.quantity=a.quantity-a.quantite_payment
            data.quantite_payment=a.quantite_payment
            console.log(data.id=a.id)
          }
            )})
        this.s.orders=this.shoppingList
        alert('Payment successful!');
        this.router.navigate(['/shop'])

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

      if (x.id==id ) {
       if (this.chargeRequest.amount!=0) {
        x.quantite_payment
      x.quantity++
        this.chargeRequest.amount=this.chargeRequest.amount-x.price
       }
      }
    console.log(this.quantite);
    console.log(this.shoppingList.map(x=>x.quantity));
  }
quantite=0
num=0
max(x:Equipment,id:number){


      if (x.id==id  ) {
      if (x.quantity!=0) {
        x.quantite_payment++
         x.quantity--
        this.chargeRequest.amount=this.chargeRequest.amount+x.price
      }
      }
     console.log(this.quantite);
  console.log(this.shoppingList.map(x=>x.quantity));
}
delete(id: number) {
  let index = this.shoppingList.findIndex(e=>e.id==id)
  let prix= 0
  this.shoppingList.map(a=>{
    if (a.id==id  ) {
      prix=a.price*a.quantite_payment
      console.log(prix);
    }
  })
  if (index !==-1) {
       let deleted =this.shoppingList.splice(index, 1)
       if (this.chargeRequest.amount != 0) {
        this.chargeRequest.amount -= prix;
        if (this.chargeRequest.amount < 0) {
          this.chargeRequest.amount = 0;
        }
      }
      deleted[0].quantite_payment = 0;
      }
  console.log(index);


}

}
