import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  subscriptionOnSubmit$?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
  ) {
  }

  loginAuthentication(loginForm: FormGroup) {
    this.subscriptionOnSubmit$ = this.api.authentication(loginForm).subscribe(user => {
      user ? this.router.navigate(['user']) : false;
    });
  }
}
