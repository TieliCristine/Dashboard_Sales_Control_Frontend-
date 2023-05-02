import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

import { Customer } from "../../../shared/model/Customer";
import { CustomerService } from "../../../service/customer-service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit{

  customers?: Customer[];

  subscriptionGetCustomer$?: Subscription;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customerService.listAllCustomers();
  }

  ngOnInit() {
    this.customerListSubscription();
  }

  customerListSubscription(){
    this.subscriptionGetCustomer$ = this.customerService.customerEmitter.subscribe( customerList => {
      this.customers = customerList;
    })
  }

  editCustomer(customer: Customer) {
    this.router.navigate(['user/customer-edit', customer.id], {state: {customer}});
  }
}
