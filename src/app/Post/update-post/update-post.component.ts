import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  post :any;
  constructor(private postService : PostService, private router : Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe((params) => {
      let idPost = params.get('id');
      this.postService.getPostById(idPost).subscribe(
        (data:any) =>{
          this.post = data;
          console.log(this.post);
          
        }
      )
  })
}
  onSubmit(f:any){
    console.log(f);
    this.post.title = f.title;
    this.post.content = f.content;
    this.postService.updatePost(this.post).subscribe(()=>{
        this.router.navigate(["/post"]);
    })
  }

}
