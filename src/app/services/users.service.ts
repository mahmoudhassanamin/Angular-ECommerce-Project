import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Shared Classes and types/UserData';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url:string;
  constructor(private http:HttpClient) { }
 
  getUsers():Observable<User[]>{
    this._url="https://jsonplaceholder.typicode.com/users";
    return this.http.get<User[]>(this._url).pipe(catchError((err)=>{return throwError(()=>err.message||"Internal Server Error")}))

  }
}
