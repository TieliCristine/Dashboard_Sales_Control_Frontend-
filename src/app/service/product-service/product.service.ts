import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productEmitter = new EventEmitter;

  subscriptionListProduct$?: Subscription;
  subscriptionFindByIdProduct$?: Subscription;
  subscriptionCreateProduct$?: Subscription;
  subscriptionUpdateProduct$?: Subscription;

  constructor(
    private apiService: ApiService
  ) { }

  listAllProducts() {
    this.subscriptionListProduct$ = this.apiService.getProducts().subscribe(productList => {
      this.productEmitter.emit(productList);
      this.subscriptionListProduct$?.unsubscribe();
    })
  }

  findProductById(selectedValue: number) {
    this.subscriptionFindByIdProduct$ = this.apiService.getProductById(selectedValue).subscribe(productFound => {
      this.productEmitter.emit(productFound);
      this.subscriptionFindByIdProduct$?.unsubscribe();
    })
  }

  createProduct(form: FormGroup){
    this.subscriptionCreateProduct$ = this.apiService.postProduct(form).subscribe(newProduct => {
      this.productEmitter.emit(newProduct);
      this.subscriptionCreateProduct$?.unsubscribe();
    })
  }

  updateProduct(productFormEdit: FormGroup) {
    this.subscriptionUpdateProduct$ = this.apiService.putProduct(productFormEdit).subscribe(productUpdate => {
      this.productEmitter.emit(productUpdate);
      this.subscriptionUpdateProduct$?.unsubscribe();
    })
  }
}
