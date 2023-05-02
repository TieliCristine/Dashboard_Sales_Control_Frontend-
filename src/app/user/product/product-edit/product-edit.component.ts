import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Product } from "../../../shared/model/Product";
import { ProductService } from "../../../service/product-service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{

  product?: Product;
  productFormEdit: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private productService: ProductService
  ) {
    this.route.params.subscribe(params => {
      this.product = history.state.product;
    });
    this.productFormEdit = this.formBuilder.group({
      id: [ this.product?.id ],
      name: [ this.product?.name ],
      description: [ this.product?.description ],
      price: [ this.product?.price ]
    });
  }

  ngOnInit() {
  }

  onSubmit(productFormEdit: FormGroup){
    this.productService.updateProduct(productFormEdit);
  }
}
