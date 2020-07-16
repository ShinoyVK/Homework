import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-list/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title:String = " Add Product";
  constructor(private productServiceObj: ProductService, private router: Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);

  ngOnInit(): void {
  }

  addProduct(){
    this.productServiceObj.newProduct(this.productItem);
    this.router.navigate(['/products']);
  }

}
