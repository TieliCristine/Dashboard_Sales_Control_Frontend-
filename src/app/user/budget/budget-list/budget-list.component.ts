import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

import { Budget } from "../../../shared/model/Budget";
import { BudgetService } from "../../../service/budget-service/budget.service";
import { BudgetModalFormComponent } from "../budget-modal-form/budget-modal-form.component";
import { BudgetModalEditComponent } from "../budget-modal-edit/budget-modal-edit.component";
import { MODAL_FORM_GLOBAL_CONFIG } from "../../../../constants";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  budgets?: Budget[];
  budgetsToDisplay?: Budget[];
  bsModalRef?: BsModalRef;

  subscriptionGetBudgets?: Subscription;

  constructor(
    private budgetService: BudgetService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.budgetService.listAllBudgets();
    this.budgetListSubscription();
  }

  budgetListSubscription() {
    this.subscriptionGetBudgets = this.budgetService.budgetEmitter.subscribe(budgetList => {
      this.budgets = budgetList;
      this.budgetsToDisplay = budgetList;
    })
  }

  onChangeFilter($event: Event) {
    const selectedValue = ($event.target as HTMLSelectElement).value;
    this.budgetsToDisplay = selectedValue.includes('ALL')
      ? this.budgets
      : this.budgets?.filter(budget => budget.status === selectedValue) || [];
  }

  openModalAddBudget() {
    this.bsModalRef = this.modalService.show(BudgetModalFormComponent, MODAL_FORM_GLOBAL_CONFIG)
  }

  openModalEditBudget() {
    this.bsModalRef = this.modalService.show(BudgetModalEditComponent, MODAL_FORM_GLOBAL_CONFIG)
  }
}
