import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title:String= "Product List";
  productArray: ProductModel[];
  imageWidth: number = 50;
  imageMargin:number = 2;

  constructor(private productServiceObj: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productServiceObj.getProducts()
    .subscribe((data)=>{
      this.productArray=JSON.parse(JSON.stringify(data));
    })
  }

  deleteProduct(Dbid){
    this.productServiceObj.deleteProduct(Dbid);
    this.router.navigate(['/products']);
  }

  editProduct(product): void {
    //window.localStorage.removeItem("editUserId");
    //window.localStorage.setItem("editUserId", Dbid2.toString());
    window.localStorage.setItem("oneProduct", JSON.stringify(product));
    this.router.navigate(['/edit']);
  };

}
