import { Component, OnInit } from '@angular/core';
import { Equipment } from '../Model/Equipment';
import { EquipmentService } from '../service/equipment.service';
import { Router } from '@angular/router';

import { SentimentService } from '../service/sentiment.service';
import { HttpClient } from '@angular/common/http';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {



  currentRate = 0
  constructor(private s:EquipmentService,private http:HttpClient,private router:Router,private sentimentService:SentimentService) { }
  liste:Equipment[]=[]
  equipe=new Equipment()

  host = "http://localhost:8090"
  ngOnInit(): void {
    this.s.getall().subscribe(data=>{
      this.liste=data;
    })

  }

num=0
tt=0
filterType={
  backpack:'',
  sleepingBag:'',
  tent:''

}
public text: string = '';
  public result: string = '';
  public analyze(): void {
    this.sentimentService.getSentiment(this.text)
      .subscribe(result =>{
        this.result = result
        console.log(this.result)
      }
        );
  }
  sentimentScore!:number;
  message: string = '';
  sentiment!:{}
  rate(x:Equipment) {
    console.log(x);
    x.rate++
        this.s.updatelike(x).subscribe(data=>data.id=this.equipe.id)
      }
  calculateReview(text: string,x:Equipment) {
    let positiveWords = ['good', 'great', 'excellent'];
    let negativeWords = ['bad', 'terrible', 'poor'];
    let neutralWords = ['okay', 'average', 'satisfactory'];

    let sentimentScore: number = 0;
    let words = text.toLowerCase().split(' ');
  let sentiment = this.sentimentService.getSentiment(text);
console.log(sentiment);

    words.forEach((word) => {
      if (text.includes(word)) {
        x.rate++;
        this.s.updatelike(x).subscribe(data=>data.id=this.equipe.id)
      } else if (text.includes(word)) {
        x.rate -= 1;
        this.s.updatelike(x).subscribe(data=>data.id=this.equipe.id)
      } else if (text.includes(word)) {
        x.rate += 0.5;
        this.s.updatelike(x).subscribe(data=>data.id=this.equipe.id)
      }
    });
    this.currentRate=sentimentScore
    this.equipe.rate=this.currentRate
    if (sentimentScore > 0) {
      console.log(`The review for '${text}' is positive`);
      // Display positive review in the UI
    } else if (sentimentScore < 0) {
      console.log(`The review for '${text}' is negative`);
      // Display negative review in the UI
    } else {
      console.log(`The review for '${text}' is neutral`);
      // Display neutral review in the UI
    }
  }


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

list!:any[]
reset(){
  this.Active=false
  this.s.getall().subscribe(data=>{
    this.liste=data;
  })
}
msg:any

Active=false
type(type: any) {
  if (type != null) {
    this.s.getbytype(type).subscribe(data => {
      this.liste = data;
      if (this.liste.length === 0) {
        this.msg = 'Liste vide check another Equipment Type';
        this.Active=true
      }
    });
  } else {
    this.msg = 'Liste vide check another Equipment Type';
  }
  this.msg=""
  this.Active=false
}

like(x:Equipment) {
  console.log(x);
x.likeii++
      this.s.updatelike(x).subscribe(data=>data.id=this.equipe.id)
    }


tobuy() {
   this.s.shoppingList=this.Listetobuy
    this.router.navigate(['/payment'])
}

}


