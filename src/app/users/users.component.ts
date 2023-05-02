import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../Shared Classes and types/UserData';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users:User[];
  errorMessage:any=false;
  constructor(private userService:UsersService){}
  ngOnInit(){
    this.userService.getUsers().subscribe({
      next:data=>{this.users=data},
      error:error=>this.errorMessage=error
    })
  }
}
