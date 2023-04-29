import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productlist:IProduct[]=[{ID:12,Name:"elmoghamron book",Quantity:10,Price:20,Img:"../../assets/images/images\ (1).jpeg"},
                          {ID:12,Name:"Nile book",Quantity:10,Price:30,Img:"../../assets/images/images\ (1).jpeg"},
                          {ID:12,Name:"elGarima book",Quantity:10,Price:40,Img:"../../assets/images/images\ (1).jpeg"}];
  constructor() { }
  GetAllProducts():IProduct[]{
    return this.productlist;
  }
  GetProductById(prdId:any){
    if(typeof prdId == "number")
      return null;
    for (let product of this.productlist){
      if (product.ID == prdId)
        return product;
    }
    return null;
  }
}
