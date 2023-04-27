import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { User } from "../../../shared/model/User";
import { UserService } from "../../../service/user-service/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user?: User;

  userFormEdit: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.params.subscribe(params => {
      this.user = history.state.user;
    });
    this.userFormEdit = this.formBuilder.group({
      id: [ this.user?.id ],
      email: [ this.user?.email, Validators.email ],
      password: [ this.user?.password, Validators.required ],
      cpf: [ this.user?.cpf, Validators.required ],
      name: [ this.user?.name, Validators.required ],
      birthdate: [ this.user?.birthdate, Validators.required ],
      jobPosition: [ this.user?.jobPosition, Validators.required ],
      accessLvl: [ this.user?.accessLvl, Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userFormEdit: FormGroup) {
    this.userService.updateUser(userFormEdit);
  }
}
