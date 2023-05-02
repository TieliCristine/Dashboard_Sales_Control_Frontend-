import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Budget } from "../../../shared/model/Budget";
import { BudgetService } from "../../../service/budget-service/budget.service";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  budgets?: Budget[];
  subscriptionGetBudgets?: Subscription;

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) {
    this.budgetService.listAllBudgets();
  }

  ngOnInit() {
    this.budgetListSubscription();
  }

  budgetListSubscription() {
    this.subscriptionGetBudgets = this.budgetService.budgetEmitter.subscribe(budgetList => {
      this.budgets = budgetList;
    })
  }





  // budgets?: Budget[] = [
  //   {
  //     id: 1,
  //     quantity: 2,
  //     finalPrice: 50,
  //     customer: {
  //       id: 1,
  //       name: 'John',
  //       birthdate: new Date(),
  //       address: {
  //         id: 1,
  //         zipCode: '12345678',
  //         street: 'Main St',
  //         number: '123',
  //         supplemental: 'Apt 456',
  //         district: 'Downtown',
  //         city: 'Anytown',
  //         state: 'ST'
  //       },
  //       personalData: {
  //         id: 1,
  //         cpf: '12345678900',
  //         cnpj: '',
  //         phone: '4234567890',
  //         email: 'john@example.com'
  //       }
  //     },
  //     supplier: {
  //       id: 1,
  //       corporativeName: 'ABC Inc.',
  //       salesRepresentative: 'Jane Doe',
  //       address: {
  //         id: 2,
  //         zipCode: '98765432',
  //         street: 'Oak St',
  //         number: '789',
  //         supplemental: '',
  //         district: 'Uptown',
  //         city: 'Anytown',
  //         state: 'ST'
  //       },
  //       personalData: {
  //         id: 2,
  //         cpf: '',
  //         cnpj: '12345678000190',
  //         phone: '9876543210',
  //         email: 'jane@example.com'
  //       }
  //     },
  //     product: {
  //       id: 1,
  //       name: 'Product A',
  //       description: 'Lorem ipsum dolor sit amet',
  //       price: 25
  //     },
  //     status: Status.PENDING
  //   }
  // ];
}
