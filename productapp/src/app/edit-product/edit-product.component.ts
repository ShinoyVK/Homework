import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {
  title:String= "Edit Product";
  constructor(private productServiceObj: ProductService, private router: Router) { }

  productOne = JSON.parse(window.localStorage.getItem("oneProduct"));

  ngOnInit(): void {}

  editProduct(){
    this.productServiceObj.updateProduct(this.productOne, this.productOne._id);
    this.router.navigate(['/products']);
  }

}
