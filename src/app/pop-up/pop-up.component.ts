import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { Comment } from '../services/comment';
import { ImageserviceService } from '../services/imageservice.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{
  title = 'angular-material'

  constructor(private commentService:CommentService , private router:Router,private imageService:ImageserviceService) {}
  show=false;
  public commentList!:Comment[] ;
 public commentInput=new Comment();
 imageFile!:File;
  formData = new FormData();
  

  ngOnInit(): void {
this.getComments();
  }
onFileSelected(event:any){
  this.imageFile=event.target.files[0];
  
}

  addComment(comment:any,userId:number){
    this.formData.set('file',this.imageFile);
    
    this.imageService.addImage(this.formData).subscribe(data=>{
      this.commentService.addComment(comment,data.id).subscribe(data=>{
    this.commentList.push(data)  
    this.commentInput.content='';
      },
      error => console.log(error));

    })
   
  }

public getComments(): void{
  this.commentService.getComments().subscribe(
    (response: any) => {
   this.commentList = response;   
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public deleteComment(id: number){
  this.commentService.deleteComment(id).subscribe( data => {
    this.getComments();
  })
}

}
