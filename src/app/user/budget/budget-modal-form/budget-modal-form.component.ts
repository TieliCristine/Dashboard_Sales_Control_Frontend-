import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { BsModalRef } from "ngx-bootstrap/modal";

import { BudgetService } from "../../../service/budget-service/budget.service";
import { CustomerService } from "../../../service/customer-service/customer.service";
import { SupplierService } from "../../../service/supplier-service/supplier.service";
import { ProductService } from "../../../service/product-service/product.service";
import { Status } from "../../../shared/model/Status";

@Component({
  selector: 'app-budget-modal-form',
  templateUrl: './budget-modal-form.component.html',
  styleUrls: ['./budget-modal-form.component.scss']
})
export class BudgetModalFormComponent implements OnInit {

  budgetForm: FormGroup;

  subscriptionCustomer$?: Subscription;
  subscriptionSupplier$?: Subscription;
  subscriptionProduct$?: Subscription;

  constructor(
    private bsModalRef: BsModalRef<BudgetModalFormComponent>,
    private formBuilder: FormBuilder,
    private budgetService: BudgetService,
    private customerService: CustomerService,
    private supplierService: SupplierService,
    private productService: ProductService
  ) {
    this.budgetForm = this.formBuilder.group({
      quantity: [],
      finalPrice: [],
      customer: this.formBuilder.group({
        id: [''],
        name: [''],
        birthdate: [''],
        address: this.formBuilder.group({
          id: [''],
          zipCode: [''],
          street: [''],
          number: [''],
          supplemental: [''],
          district: [''],
          city: [''],
          state: ['']
        }),
        personalData: this.formBuilder.group({
          id: [''],
          cpf: [''],
          cnpj: [''],
          phone: [''],
          email: ['']
        })
      }),
      supplier: this.formBuilder.group({
        id: [''],
        corporativeName: [''],
        salesRepresentative: [''],
        address: this.formBuilder.group({
          id: [''],
          zipCode: [''],
          street: [''],
          number: [''],
          supplemental: [''],
          district: [''],
          city: [''],
          state: ['']
        }),
        personalData: this.formBuilder.group({
          id: [''],
          cpf: [''],
          cnpj: [''],
          phone: [''],
          email: ['']
        })
      }),
      product: this.formBuilder.group({
        id: [''],
        name: [''],
        price: [''],
        description: ['']
      }),
      status: Status.PENDING
    })
  }

  ngOnInit(): void {
    this.subscriptionCustomer$ = this.customerService.customerEmitter.subscribe(recordFound => {
      this.budgetForm.get('customer')?.patchValue(recordFound);
    })
    this.subscriptionSupplier$ = this.supplierService.supplierEmitter.subscribe(recordFound => {
      this.budgetForm.get('supplier')?.patchValue(recordFound);
    })
    this.subscriptionProduct$ = this.productService.productEmitter.subscribe(recordFound => {
      this.budgetForm.get('product')?.patchValue(recordFound);
    })
  }

  closeModal() {
    this.bsModalRef?.hide();
  }

  onChangeCustomer($event: Event) {
    const selectedValue = parseInt(($event.target as HTMLSelectElement).value);
    this.customerService.findCustomerById(selectedValue);
  }

  onChangeSupplier($event: Event) {
    const selectedValue = parseInt(($event.target as HTMLSelectElement).value);
    this.supplierService.findSupplierById(selectedValue);
  }

  onChangeProduct($event: Event) {
    const selectedValue = parseInt(($event.target as HTMLSelectElement).value);
    this.productService.findProductById(selectedValue);
  }

  get totalPrice() {
    const quantity = this.budgetForm.get('quantity')?.value || 0;
    const price = this.budgetForm.get('product.price')?.value || 0;
    return quantity * price;
  }

  onSubmit(budgetForm: FormGroup) {
    this.budgetService.createBudget(budgetForm);
    console.log('form modal: ', budgetForm)
  }
}
