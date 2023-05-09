import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../services/review';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
  rating!:number;
  review:any;
  reviewTitle!:string
  reviewText!:string
  id!:number;
  
  content!:string
  author!:{id:number,username:string}
  createdAt!:Date
  campingSpace!:{id:number}
  constructor(private reviewService:ReviewService,private router:Router,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.id=Number(this.id)
    console.log(this.id);
    
     
      
  

    console.log(this.id);
  }
  setRating(rating: number){
    this.rating=rating;
     console.log(this.rating);
  }


  public updateReview(review:Review,id : number){
    this.reviewService.updateReview(this.review.id,review).subscribe(
      data => {
        console.log(`Review updated: ${data}`);
        this.router.navigate(['/review']);
      },
      error => {
        console.log(`Error updating review: ${error}`);
      }
    );
  }
}
