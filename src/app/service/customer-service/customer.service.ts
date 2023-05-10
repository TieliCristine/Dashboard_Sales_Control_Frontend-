import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerEmitter = new EventEmitter();

  subscriptionListCustomer$?: Subscription;
  subscriptionFindByIdCustomer$?: Subscription;
  subscriptionCreateCustomer$?: Subscription;
  subscriptionUpdateCustomer$?: Subscription;

  constructor(
    private apiService: ApiService
  ) { }

  listAllCustomers() {
    this.subscriptionListCustomer$ = this.apiService.getCustomers().subscribe(customerList => {
      this.customerEmitter.emit(customerList);
      this.subscriptionListCustomer$?.unsubscribe();
    })
  }

  findCustomerById(selectedValue: number) {
    this.subscriptionFindByIdCustomer$ = this.apiService.getCustomersById(selectedValue).subscribe(customerFound => {
      this.customerEmitter.emit(customerFound);
      this.subscriptionFindByIdCustomer$?.unsubscribe();
    })
  }

  createCustomer(form: FormGroup) {
    this.subscriptionCreateCustomer$ = this.apiService.postCustomer(form).subscribe( newCustomer => {
      this.customerEmitter.emit(newCustomer);
      this.subscriptionCreateCustomer$?.unsubscribe();
    })
  }

  updateCustomer(customerFormEdit: FormGroup) {
    this.subscriptionUpdateCustomer$ = this.apiService.putCustomer(customerFormEdit).subscribe(customerUpdate => {
      this.customerEmitter.emit(customerUpdate);
      this.subscriptionUpdateCustomer$?.unsubscribe();
    })
  }
}
