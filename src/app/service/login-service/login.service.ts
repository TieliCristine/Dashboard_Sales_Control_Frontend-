import {Injectable} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api-service/api.service";
import {Router} from "@angular/router";

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
      // user && this.router.navigate(['user'])
      user ? this.router.navigate(['user']) : alert('User não existe!')
    });
  }

  private onSuccess() {
    console.log('Cliente salvo com sucesso!');
    // this.onCancel();
  }

  private onError() {
    console.log('Erro ao salvar cliente.');
  }

  // onCancel(){
  //   this.location.back();
  // }
}
