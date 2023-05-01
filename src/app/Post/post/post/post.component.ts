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

  posts: Post [] = [];
  post : Post = new Post();
 // fileInput: HTMLInputElement = document.getElementById('fileInput') as HTMLInputElement;
  file:any ;


  constructor(private postService: PostService, private router:Router) {}

  onFileSelected(event:any) {
    this.file = event.target.files[0];
  }

 addPostandImage(post:any,file:any,userId:any){
  console.log(post,file,userId);
  this.postService.addPostAndImage(post,file,userId).subscribe(()=>
  this.router.navigateByUrl("http://localhost:8090/post/addPostAndImage"))
 }

 ngOnInit(): void {

  this.upload()
  }

 upload(){
  this.postService.getAllPosts().subscribe(data => {
    this.posts = data;
  });
 }


}
