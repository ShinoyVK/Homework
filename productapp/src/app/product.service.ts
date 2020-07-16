import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3030/products");
  }

  newProduct(item){
    return this.http.post("http://localhost:3030/insert",{"newProduct":item})
    .subscribe(data=>{console.log(data)})
  }

  updateProduct(item,DBid){
    return this.http.post("http://localhost:3030/updateProduct",{"newProduct":item,"DBid":DBid})
    .subscribe(data=>{console.log(data)})
  }


  deleteProduct(DBid){
    console.log("Service " + DBid);
    return this.http.post("http://localhost:3030/delete",{"productId":DBid})
    .subscribe(data=>{console.log(data)})
  }
}
