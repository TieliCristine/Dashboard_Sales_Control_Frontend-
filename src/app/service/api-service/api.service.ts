import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {catchError, EMPTY, first, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserComponent} from "../../user/user/user.component";

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


}
