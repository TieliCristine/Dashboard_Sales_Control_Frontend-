import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { catchError, EMPTY, first, Observable, tap } from "rxjs";

import { environment } from "../../../environments/environment";
import { UserComponent } from "../../user/user/user.component";
import { User } from "../../shared/model/User";
import { Customer } from "../../shared/model/Customer";
import {CustomerListComponent} from "../../user/customer/customer-list/customer-list.component";
import {CustomerFormComponent} from "../../user/customer/customer-form/customer-form.component";

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

  postUser(userForm: FormGroup) {
    return this.http.post<UserComponent>(environment.url + 'user', userForm.value)
        .pipe(
          first(),
          catchError(() => {
            console.log("erro ao criar user")
            return EMPTY;
          })
        )
  }

  putUser(userFormEdit: FormGroup) {
    return this.http.put<User>(environment.url + 'user/e/' + userFormEdit.value.id, userFormEdit.value)
      .pipe(
        first(),
        tap(userFormEdit => console.log(userFormEdit)),
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
}
