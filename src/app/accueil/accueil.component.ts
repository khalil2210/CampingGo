import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { Comment } from '../services/comment';
import { ImageserviceService } from '../services/imageservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  constructor(private commentService:CommentService , private router:Router,private imageService:ImageserviceService,private dialogRef:MatDialog) {}

     openDialog(){
      this.dialogRef.open(PopUpComponent)}


      
  public comments!:Comment[] ;
 public comment:Comment = new Comment();
 imageFile:any;
  formData = new FormData();
  

  ngOnInit(): void {}
onFileSelected(event:any){
  this.imageFile=event.target.files[0];
}

  addComment(comment:any,userId:number){
    this.formData.append('file',this.imageFile);
    this.imageService.addImage(this.formData).subscribe(data=>{
      this.commentService.addComment(comment,data.id).subscribe(data=>{
        //console.log(this.comment);
        this.goToComments();
      },
      error => console.log(error));

    })
   
  }

goToComments(){
  this.router.navigate(['/comments']);
}






}
