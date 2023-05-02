import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"posts",component:PostsComponent},
  {path:'posts/:id/comments',component:CommentsComponent},
  {path:"users",component:UsersComponent},
  
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
