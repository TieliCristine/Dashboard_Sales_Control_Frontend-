import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from "./user/user.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

import { CustomerListComponent } from "./customer/customer-list/customer-list.component";
import { CustomerFormComponent } from "./customer/customer-form/customer-form.component";
import { CustomerEditComponent } from "./customer/customer-edit/customer-edit.component";

import { SupplierListComponent } from "./supplier/supplier-list/supplier-list.component";
import { SupplierFormComponent } from "./supplier/supplier-form/supplier-form.component";
import { SupplierEditComponent } from "./supplier/supplier-edit/supplier-edit.component";

import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductFormComponent } from "./product/product-form/product-form.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";

import { BudgetListComponent } from "./budget/budget-list/budget-list.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'list', component: UserListComponent },
      { path: 'user-form', component: UserFormComponent },
      { path: 'user-edit/:id', component: UserEditComponent },

      { path: 'customer-list', component: CustomerListComponent },
      { path: 'customer-form', component: CustomerFormComponent },
      { path: 'customer-edit/:id', component: CustomerEditComponent },

      { path: 'supplier-list', component: SupplierListComponent },
      { path: 'supplier-form', component: SupplierFormComponent },
      { path: 'supplier-edit/:id', component: SupplierEditComponent },

      { path: 'product-list', component: ProductListComponent },
      { path: 'product-form', component: ProductFormComponent },
      { path: 'product-edit/:id', component: ProductEditComponent },

      { path: 'budget-list', component: BudgetListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

