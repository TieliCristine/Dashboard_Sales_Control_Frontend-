import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Product } from "../../../shared/model/Product";
import { ProductService } from "../../../service/product-service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products?: Product[];

  subscriptionGetProduct$?: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productService.listAllProducts();
  }

  ngOnInit() {
    this.productListSubscription();
  }

  productListSubscription() {
    this.subscriptionGetProduct$ = this.productService.productEmitter.subscribe(productList => {
      this.products = productList;
    })
  }

  editProduct(product: Product) {
    this.router.navigate(['user/product-edit', product.id], {state: {product}});
  }
}
