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
  subscriptionCreateCustomer$?: Subscription;

  constructor(
    private apiService: ApiService
  ) { }

  listAllCustomers() {
    this.subscriptionListCustomer$ = this.apiService.getCustomers().subscribe(customerList => {
      this.customerEmitter.emit(customerList);
      this.subscriptionListCustomer$?.unsubscribe();
    })
  }

  createCustomer(form: FormGroup) {
    this.subscriptionCreateCustomer$ = this.apiService.postCustomer(form).subscribe( newCustomer => {
      this.customerEmitter.emit(newCustomer);
      this.subscriptionCreateCustomer$?.unsubscribe();
    })
  }


}
