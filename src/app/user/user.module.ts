import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { UserComponent } from './user/user.component';
import { UserService } from "../service/user-service/user.service";
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CustomerService } from "../service/customer-service/customer.service";
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { SupplierService } from "../service/supplier-service/supplier.service";
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    CustomerListComponent,
    SupplierListComponent,
    CustomerFormComponent,
    CustomerEditComponent,
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
  providers: [
    UserService,
    CustomerService,
    SupplierService
  ]
})
export class UserModule { }
