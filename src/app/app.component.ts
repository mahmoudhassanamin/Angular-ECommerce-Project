import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LabOneProject';
  productButtonIsavailable:boolean=true;
  @ViewChild(ProductsComponent) productschild:ProductsComponent;
 
  intializeProductsList(){
    this.productschild.renderValues()
    // this.productschild.productsIsInitialized=true;
    this.productButtonIsavailable=false
  }
}
