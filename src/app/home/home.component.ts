import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private users:UsersService){}
  imageBannerSrc:string="../assets/images/AngularJS_Banner.jpg"

  
}
