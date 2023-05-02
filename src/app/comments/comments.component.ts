import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Comment } from '../Shared Classes and types/Comment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  postId:any;
  comments:Comment[];
  errormessage:any;
  constructor(private activatedRoute:ActivatedRoute , private postService:PostsService){}
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.postId=params.get("id");
    })
    this.postService.getComments(this.postId).subscribe({
      next:data=>{this.comments=data;console.log(this.comments)},
      error:error=>this.errormessage=error
    })
  }
}
