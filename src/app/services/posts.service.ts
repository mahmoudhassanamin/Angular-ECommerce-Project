import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from '../Shared Classes and types/Posts';
import { Comment } from '../Shared Classes and types/Comment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  _url:string;
  constructor(private http:HttpClient) { }
  getposts():Observable<Post[]>{
    this._url="https://jsonplaceholder.typicode.com/posts";
    return this.http.get<Post[]>(this._url).pipe(catchError((err)=>{return throwError(()=>err.message||"Internal Server Error")}))
  }
  getComments(postID:number):Observable<Comment[]>
  {
    this._url=`https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
    return this.http.get<Comment[]>(this._url).pipe(catchError((err)=>{return throwError(()=>err.message||"Internal Server Error")}))
  }
}
