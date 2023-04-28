import { Component } from '@angular/core';
import {DiscountOffers} from '../Shared Classes and types/DiscountOffers'
import {IProduct} from '../Shared Classes and types/IProduct'
import {ICaregory} from '../Shared Classes and types/ICategory'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  discount:DiscountOffers;
  store_name:string;
  store_Logo:string;
  ProductList:IProduct[];
  CategoryList:ICaregory[];
  ClientName:string;
  IsPurshased:Boolean;
  arr:string[];
  constructor(){
    this.discount=DiscountOffers.highOffer;
    this.store_name="Alex store";
    this.store_Logo="https://i.pinimg.com/originals/a3/2b/19/a32b19c33d4a36e69069493a0353e531.png";
    this.ProductList=[{ID:12,Name:"elmoghamron book",Quantity:10,Price:20,Img:"../../assets/images/images\ (1).jpeg"},
                      {ID:12,Name:"Nile book",Quantity:10,Price:30,Img:"../../assets/images/images\ (1).jpeg"},
                      {ID:12,Name:"elGarima book",Quantity:10,Price:40,Img:"../../assets/images/images\ (1).jpeg"}];
    this.CategoryList=[{ID:1001,Name:"Story-books"},{ID:1001,Name:"Historical-books"},{ID:1001,Name:"Romantic-books"}];
    this.ClientName="";
    this.IsPurshased=false;
    this.arr=["hassan","mahmoud","amin","mahmoud"];
  }
}
