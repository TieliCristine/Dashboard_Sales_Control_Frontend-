import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";
import { statusMap } from "../../shared/model/Status";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budgetEmitter = new EventEmitter();

  subscriptionListBudget$?: Subscription;
  subscriptionCreateBudget$?: Subscription;

  constructor(
    private apiService: ApiService
  ) {
  }

  listAllBudgets() {
    this.subscriptionListBudget$ = this.apiService.getBudgets().subscribe(budgetList => {
      let budgets = budgetList.map(budget => ({
        ...budget,
        status: statusMap[budget.status],
      }));
      this.budgetEmitter.emit(budgets);
      this.subscriptionListBudget$?.unsubscribe();
    })
  }

  createBudget(budgetForm: FormGroup) {
    console.log('chegou no service: ', budgetForm)
    this.subscriptionCreateBudget$ = this.apiService.postBudget(budgetForm).subscribe(budgetCreate => {
      console.log('subscribe no service: ', budgetCreate)
      this.budgetEmitter.emit(budgetCreate);
      this.subscriptionCreateBudget$?.unsubscribe();
    })
  }
}
