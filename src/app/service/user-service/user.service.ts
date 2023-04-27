import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userEmitter = new EventEmitter();

  subscriptionListUser$?: Subscription;
  subscriptionNewUser$?: Subscription;
  subscriptionUpdateUser$?: Subscription;

  constructor(
    private apiService: ApiService,
  ) { }

  listAllUsers(){
    this.subscriptionListUser$ = this.apiService.getUsers().subscribe(userList => {
      this.userEmitter.emit(userList);
      this.subscriptionListUser$?.unsubscribe();
    })
  }

  createUser(userForm: FormGroup) {
    this.subscriptionNewUser$ = this.apiService.postUser(userForm).subscribe( newUser => {
      this.userEmitter.emit(newUser);
      this.subscriptionNewUser$?.unsubscribe();
    })
  }

  updateUser(userFormEdit: FormGroup) {
    this.subscriptionUpdateUser$ = this.apiService.putUser(userFormEdit).subscribe(userUpdate => {
      this.userEmitter.emit(userUpdate);
      this.subscriptionUpdateUser$?.unsubscribe();
    })
  }
}
