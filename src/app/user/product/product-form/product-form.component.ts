import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ProductService } from "../../../service/product-service/product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{

  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Zà-úÁ-Ú ]*")]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Zà-úÁ-Ú ]*")]],
      price: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(productForm: FormGroup) {
    this.productService.createProduct(productForm);
  }
}
