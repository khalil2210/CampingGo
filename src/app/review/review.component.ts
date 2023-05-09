import { Component, OnInit } from '@angular/core';
import { Review } from '../services/review';
import { DatePipe } from '@angular/common';
import { ReviewService } from '../services/review.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateReviewComponent } from '../update-review/update-review.component';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviewList:Review[]=[] ;
  public reviews: Review[] = [];
 review!:Review;
  reviewTitle!:string
  reviewText!:string
  rating!:number;
  
  constructor(private reviewService:ReviewService , private router:Router,private dialogRef:MatDialog,private route:ActivatedRoute) { }

  openDialog(id?:number){
    this.dialogRef.open(UpdateReviewComponent,{ height:'90vh' ,width:'90vw'})
    this.router.navigate(['pop-up',id])
    
    
  }

  ngOnInit(): void {
    this.getAllReviews();
  }

  public getAllReviews(){
    this.reviewService.getAllReviews().subscribe((resp) => {
      this.reviews = resp;
     
      
      console.log("successfully");
      
      });
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  
  }

   public reviewCampingSpace(review:any,userId:number,campingSpaceId:number){
console.log(review);
     this.reviewService.reviewCampingSpace(review,userId,campingSpaceId).subscribe((review: any) => {
           console.log('review added successfully',review);
           this.reviews.push(review); 
           });
           (error: HttpErrorResponse) => {
            alert(error.message);
         
        }
        this.goToReviews();  
   }

   public deleteReview(id: number){
    this.reviewService.deleteReview(id).subscribe( data => {
      console.log(data);
      this.getAllReviews();
    })
  }

  


 setRating(rating: number){
   this.rating=rating;
    console.log(this.rating);
 }
 goToReviews(){
  this.router.navigate(['review']);
 }


}
