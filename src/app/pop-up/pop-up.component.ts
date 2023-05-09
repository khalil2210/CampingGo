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
  public dislikes=0;
  public likes=0;

  public increment=1;
  public disliked=false;
  public commentList!:Comment[] ;
  public commentInput=new Comment();
 imageFile?:File;
  formData = new FormData();
  

  ngOnInit(): void {
this.getComments();
// this.getNumberOfDislikes();
  }
onFileSelected(event:any){
  this.imageFile=event.target.files[0];
  
}

  addComment(comment:any,userId:number){
    if(this.imageFile)
  {
    this.formData.set('file',this.imageFile);
    this.imageService.addImage(this.formData).subscribe(data=>{
      this.commentService.addComment(comment,userId,data.id).subscribe(data=>{
    this.commentList.push(data)  
    this.commentInput.content='';
      },
      error => console.log(error));

    })
  }
  else{
    this.commentService.addComment(comment,userId).subscribe(
      (data) => {
        console.log("comment without image added");
        this.commentList.push(data)  
        this.commentInput.content='';
      }
    )
  }
   
  }

public getComments(): void{
  this.commentService.getComments().subscribe(
    (response: any) => {
   this.commentList = response; 
   console.log(this.commentList);
    
   this.commentList.forEach((comment) =>this.commentService.getNumberOfDislikes(comment.id).subscribe((resp)=>
   {comment.dislikes=resp;console.log(comment.id+"has dislikes"+comment.dislikes);
   })) 
   this.commentList.forEach((comment) =>this.commentService.getNumberOflikes(comment.id).subscribe((resp)=>
   {comment.likes=resp;console.log(comment.id+"has likes"+comment.likes);
   })) 
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
  public dislikeComment(id:number) {

    this.commentService.disLikeComment(id).subscribe(() => {
      console.log('dislike comment successfully');
       this.ngOnInit();
   });

    
  }
public getNumberOfDislikes(id:number){
  this.commentService.getNumberOfDislikes(id).subscribe((resp)=>{
    this.dislikes=resp;
  })
}

public incrementDislikes(id:number) {
  return id+1;
}
public likeComment(id:number ) {
  this.commentService.LikeComment(id).subscribe(() => {
    console.log('like comment successfully');
  this.ngOnInit(); });
  
}
public getNumberOflikes(id:number){
this.commentService.getNumberOflikes(id).subscribe((resp)=>{
  this.likes=resp;
})
}
}
