import { Component, OnInit } from '@angular/core';
import { Post } from '../../Post';
import { PostService } from '../../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postAdded: boolean = false;
  postDeleted: boolean = false;
  postUpdated: boolean = false;



  posts: Post [] = [];
  post =  new Post();
 // fileInput: HTMLInputElement = document.getElementById('fileInput') as HTMLInputElement;
  file:any ;
  word:string = '';

num=0
  constructor(private postService: PostService, private router:Router) {}

  onFileSelected(event:any) {
    this.file = event.target.files[0];
  }

 addPostandImage(post:any,file:any,userId:any){
  console.log(post,file,userId);
  

  this.postService.addPostAndImage(post,file,userId).subscribe(()=>{
  //this.router.navigateByUrl("http://localhost:8090/post/addPostAndImage")
  
  this.postAdded = true;
  setTimeout(() => {
    this.postAdded = false;
  }, 1500);
  this.ngOnInit();

 })
 }

 ngOnInit(): void {

  this.upload()
  }

 upload(){
  this.postService.getAllPosts().subscribe(data => {
    this.posts = data;
  });
 }

 updatePost(id :any){
    this.router.navigate(['/updatePost',id]);
    this.postUpdated = true;
    setTimeout(() => {
      this.postUpdated = false;
    }, 1500);
    this.ngOnInit();
 }
 deletePost(id :any){
  console.log(id);
  
    this.postService.deletePost(id).subscribe(()=>{
      this.ngOnInit();
      this.postDeleted = true;
      setTimeout(() => {
        this.postDeleted = false;
      }, 1500);
      this.ngOnInit();

    })
 }
 search() {
  if (this.word.trim().length > 0) {
    this.postService.recherchePosts(this.word.trim()).subscribe(posts => {
      this.posts = posts;
    });
  } else {
    // Si le champ de saisie est vide, affiche tous les posts
    this.ngOnInit();
  }
}

addlike(post:Post){
  this.num++
this.posts.map(x=>{
  if(post.id=x.id){
   // post.likesNumber=+this.num
  }
})
post.LikesNumber++
  this.postService.updatePost(post).subscribe(data=>{
    data.id=post.id
    console.log(post.LikesNumber);
    
    console.log(data.id,post.id);
    
   
    
  })
 }

 


}
