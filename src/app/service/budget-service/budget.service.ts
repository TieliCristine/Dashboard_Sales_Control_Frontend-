import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budgetEmitter = new EventEmitter();
  subscriptionListBudget$?: Subscription;

  constructor(
    private apiService: ApiService
  ) { }

  listAllBudgets() {
    this.subscriptionListBudget$ = this.apiService.getBudgets().subscribe(budgetList => {
      this.budgetEmitter.emit(budgetList);
      this.subscriptionListBudget$?.unsubscribe();
    })
  }
}
