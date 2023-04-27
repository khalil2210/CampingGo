import { Component, OnInit } from '@angular/core';
import { Equipment } from '../Model/Equipment';
import { EquipmentService } from '../service/equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private s:EquipmentService,private router:Router) { }
  liste:Equipment[]=[]
  host = "http://localhost:8090"
  ngOnInit(): void {
    this.s.getall().subscribe(data=>{
      this.liste=data;
    })

  }
  vibrate() {
    // Check if the browser supports the Vibration API
    if ("vibrate" in navigator) {
      // Vibrate the device for 1000 milliseconds (1 second)
      navigator.vibrate(1000);
    } else {
      // Display a message if the Vibration API is not supported
      console.log("Vibration not supported");
    }
  }

num=0
tt=0
Listetobuy:Equipment[]=[]
Cart(x: Equipment) {
  const existingItem = this.Listetobuy.find(item => item.id === x.id);
  if (existingItem) {
    console.log("Item already exists in cart.");
  } else {
    console.log("Item added to cart.");
    this.Listetobuy.push({...x});
    this.num++;
  }
}
jm=0
like(x:Equipment){
this.liste.map(a=>{
  if(a.id==x.id){
    a.likeii=a.likeii+1;

  }
})
}
tobuy() {
   this.s.shoppingList=this.Listetobuy
    this.router.navigate(['/payment'])
}

}


