import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { CustomerListComponent } from "./customer/customer-list/customer-list.component";
import { CustomerFormComponent } from "./customer/customer-form/customer-form.component";
import { SupplierListComponent } from "./supplier/supplier-list/supplier-list.component";
import { CustomerEditComponent } from "./customer/customer-edit/customer-edit.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'user-form', component: UserFormComponent },
      { path: 'user-edit/:id', component: UserEditComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'customer-form', component: CustomerFormComponent },
      { path: 'customer-edit/:id', component: CustomerEditComponent },
      { path: 'supplier-list', component: SupplierListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

