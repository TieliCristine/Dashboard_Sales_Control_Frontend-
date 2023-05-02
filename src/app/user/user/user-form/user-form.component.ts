import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../../../service/user-service/user.service";
import {DoBValidator} from "../../../shared/validators/dob-validator";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy{

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      cpf: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Zà-úÁ-Ú ]*")]],
      birthdate: ['', [Validators.required, Validators.minLength(8), DoBValidator.maxAge, DoBValidator.minAge]],
      jobPosition: ['', [Validators.required]],
      accessLvl: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: FormGroup) {
    this.userService.createUser(userForm);
  }

  ngOnDestroy(): void {
  }



}
