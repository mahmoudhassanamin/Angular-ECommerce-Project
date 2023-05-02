import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../Shared Classes and types/Posts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts:Post[];
  errorMessage:any;
  constructor(private postService:PostsService,private route:Router){}

  ngOnInit(){
    this.postService.getposts().subscribe({
      next:data=>this.posts=data,
      error:error=>this.errorMessage=error
    })
  }

  getComments(postId:Number){
    this.route.navigate(['posts',postId, 'comments']);
    
  }



}
