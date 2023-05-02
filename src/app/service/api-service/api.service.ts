import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import {catchError, EMPTY, first, Observable, tap, throwError} from "rxjs";

import { environment } from "../../../environments/environment";

import { User } from "../../shared/model/User";
import { UserComponent } from "../../user/user/user.component";

import { Customer } from "../../shared/model/Customer";
import { CustomerFormComponent } from "../../user/customer/customer-form/customer-form.component";

import { Supplier } from "../../shared/model/Supplier";
import { SupplierFormComponent } from "../../user/supplier/supplier-form/supplier-form.component";

import { Product } from "../../shared/model/Product";
import { ProductFormComponent } from "../../user/product/product-form/product-form.component";

import { Budget } from "../../shared/model/Budget";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  authentication(loginForm: FormGroup): Observable<UserComponent> {
    return this.http.post<UserComponent>(environment.url + 'user/authenticate', loginForm.value)
      .pipe(
        first(),
        catchError(() => {
          console.log("erro aquiii")
          return EMPTY;
        })
      )
  }

  /* -------------------------------------------------- ** USER ** -------------------------------------------------- */

  getUsers() {
    return this.http.get<User[]>(environment.url + 'user')
      .pipe(
        first(),
        catchError(() => {
          console.log("erro no getUsers")
          return EMPTY;
        })
      )
  }

  // getUserById(id: number) {
  //   return this.http.get<User>(environment.url + 'user/' + id)
  //     .pipe(
  //       first(),
  //       catchError(() => {
  //         console.log("erro ao pesquisar user by id")
  //         return EMPTY;
  //       })
  //     )
  // }

  postUser(form: FormGroup) {
    console.log('frontend: ', form)
    return this.http.post<UserComponent>(environment.url + 'user', form.value)
        .pipe(
          first(),
          catchError(() => {
            console.log("erro ao criar user")
            return EMPTY;
          })
        )
  }

  putUser(form: FormGroup) {
    return this.http.put<User>(environment.url + 'user/id/' + form.value.id, form.value)
      .pipe(
        first(),
        tap(form => console.log(form)),
        catchError(() => {
          console.log("erro ao editar user")
          return EMPTY;
        }),
      )
  }

  /* ------------------------------------------------ ** CUSTOMER ** ------------------------------------------------ */

  getCustomers() {
    return this.http.get<Customer[]>(environment.url + 'customer')
      .pipe(
        first(),
        // tap(customer => console.log(customer)),
        catchError(() => {
          console.log("erro no getCustomers")
          return EMPTY;
        })
      )
  }

  postCustomer(form: FormGroup) {
    return this.http.post<CustomerFormComponent>(environment.url + 'customer', form.value)
      .pipe(
        first(),
        catchError(() => {
          console.log("erro ao criar customer")
          return EMPTY;
        })
      )
  }

  putCustomer(form: FormGroup) {
    console.log('put apiservice ', form.value)
    console.log('put apiservice ', form.value.id)
    return this.http.put<Customer>(environment.url + 'customer/id/' + form.value.id, form.value)
      .pipe(
        first(),
        tap(customer => console.log(customer)),
        catchError(() => {
          console.log("erro ao editar customer")
          return EMPTY;
        }),
      )
  }

  /* ------------------------------------------------ ** SUPPLIER ** ------------------------------------------------ */

  getSuppliers() {
    return this.http.get<Supplier[]>(environment.url + 'supplier')
      .pipe(
        first(),
        // tap(supplier => console.log(supplier)),
        catchError(() => {
          console.log("erro no getSuppliers")
          return EMPTY;
        })
      )
  }

  postSupplier(form: FormGroup) {
    return this.http.post<SupplierFormComponent>(environment.url + 'supplier', form.value)
      .pipe(
        first(),
        tap(supplier => console.log(supplier)),
        catchError(() => {
          console.log("erro ao criar supplier")
          return EMPTY;
        })
      )
  }

  putSupplier(form: FormGroup) {
    return this.http.put<Supplier>(environment.url + 'supplier/id/' + form.value.id, form.value)
      .pipe(
        first(),
        tap(supplier => console.log(supplier)),
        catchError(() => {
          console.log("erro ao editar supplier")
          return EMPTY;
        }),
      )
  }

  /* ------------------------------------------------ ** PRODUCT ** ------------------------------------------------- */

  getProducts() {
    return this.http.get<Product[]>(environment.url + 'product')
      .pipe(
        first(),
        // tap(product => console.log(product)),
        catchError(() => {
          console.log("erro no getProduct")
          return EMPTY;
        })
      )
  }

  postProduct(form: FormGroup) {
    return this.http.post<ProductFormComponent>(environment.url + 'product', form.value)
      .pipe(
        first(),
        tap(product => console.log(product)),
        catchError(() => {
          console.log("erro ao criar product")
          return EMPTY;
        })
      )
  }

  putProduct(form: FormGroup) {
    return this.http.put<Product>(environment.url + 'product/id/' + form.value.id, form.value)
      .pipe(
        first(),
        tap(product => console.log(product)),
        catchError(() => {
          console.log("erro ao editar product")
          return EMPTY;
        }),
      )
  }

  /* ------------------------------------------------- ** BUDGET ** ------------------------------------------------- */

  getBudgets() {
    return this.http.get<Budget[]>(environment.url + 'budget')
      .pipe(
        first(),
        // tap(budget => console.log(budget)),
        catchError(() => {
          console.log("erro no getBudget")
          return EMPTY;
        })
      )
  }

  // postBudget(form: FormGroup) {
  //   return this.http.post<BudgetFormComponent>(environment.url + 'budget', form.value)
  //     .pipe(
  //       first(),
  //       tap(budget => console.log(budget)),
  //       catchError(() => {
  //         console.log("erro ao criar budget")
  //         return EMPTY;
  //       })
  //     )
  // }

  putBudget(form: FormGroup) {
    return this.http.put<Budget>(environment.url + 'budget/id/' + form.value.id, form.value)
      .pipe(
        first(),
        tap(budget => console.log(budget)),
        catchError(() => {
          console.log("erro ao editar budget")
          return EMPTY;
        }),
      )
  }
}
