import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Comment } from '../services/comment';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public comments!: Comment[];
  constructor(private commentService:CommentService , private dialogRef : MatDialog){}

  
    ngOnInit() {
      this.getComments();
    }

     public getComments(): void{
    this.commentService.getComments().subscribe(
      (response: any[]) => {
        this.comments = response;
        // console.log(this.offers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteComment(id: number){
    this.commentService.deleteComment(id).subscribe( data => {
      console.log(data);
      this.getComments();
    })
  }

  public updateComment(id : number,comment:any){
    this.commentService.updateComment(id,comment).subscribe(
      data => {
        console.log(`Comment updated: ${data}`);
      },
      error => {
        console.log(`Error updating comment: ${error}`);
      }
    );
  }


}
