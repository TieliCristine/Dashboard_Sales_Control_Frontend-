import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { User } from "../../../shared/model/User";
import { UserService } from "../../../service/user-service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit, OnDestroy {

  users?: User[];

  subscriptionGetUser$?: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.listAllUsers();
  }

  ngOnInit(): void {
    this.userListSubscription();
  }

  userListSubscription() {
    this.subscriptionGetUser$ = this.userService.userEmitter.subscribe(userList => {
      this.users = userList;
    })
  }

  editUser(user: User){
    this.router.navigate(['user/user-edit', user.id], {state: {user}});
  }

  ngOnDestroy(): void {
    this.subscriptionGetUser$?.unsubscribe();
    // console.log(this.subscriptionGetUser$?.closed)
  }
}
