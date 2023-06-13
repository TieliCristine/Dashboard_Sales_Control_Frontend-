import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsModalService } from "ngx-bootstrap/modal";

import { SharedModule } from "../shared/shared.module";
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user/user.component';
import { UserService } from "../service/user-service/user.service";
import {Pane, UserDashboardComponent} from "./user/user-dashboard/user-dashboard.component";
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { CustomerService } from "../service/customer-service/customer.service";
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

import { SupplierService } from "../service/supplier-service/supplier.service";
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier/supplier-form/supplier-form.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';

import { ProductService } from "../service/product-service/product.service";
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { BudgetService } from "../service/budget-service/budget.service";
import { BudgetListComponent } from './budget/budget-list/budget-list.component';
import { BudgetModalFormComponent } from './budget/budget-modal-form/budget-modal-form.component';
import { BudgetModalEditComponent } from './budget/budget-modal-edit/budget-modal-edit.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    CustomerListComponent,
    SupplierListComponent,
    CustomerFormComponent,
    CustomerEditComponent,
    SupplierEditComponent,
    SupplierFormComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductFormComponent,
    BudgetListComponent,
    BudgetModalFormComponent,
    BudgetModalEditComponent,
    Pane,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    UserService,
    CustomerService,
    SupplierService,
    ProductService,
    BudgetService,
    BsModalService
  ]
})
export class UserModule { }
