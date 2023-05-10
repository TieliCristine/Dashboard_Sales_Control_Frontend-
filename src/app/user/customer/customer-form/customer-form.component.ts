import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CustomerService } from "../../../service/customer-service/customer.service";
import { DoBValidator } from "../../../shared/validators/dob-validator";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Zà-úÁ-Ú ]*")]],
      birthdate: ['', [Validators.required, DoBValidator.maxAge, DoBValidator.minAge]],
      type: [''],
      address: this.formBuilder.group({
        zipCode: ['', [Validators.required]],
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        supplemental: ['', [Validators.required]],
        district: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
      }),
      personalData: this.formBuilder.group({
        cpf: ['', [Validators.required]],
        cnpj: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      })
    });
  }

  ngOnInit(){
    this.customerForm.get('type')!.valueChanges.subscribe(value => {
      if (value === 'cpf') {
        this.customerForm.get('personalData.cnpj')!.setValue(null);
      } else if (value === 'cnpj') {
        this.customerForm.get('personalData.cpf')!.setValue(null);
      }
    });
  }

  onSubmit(customerForm: FormGroup) {
    this.customerService.createCustomer(customerForm);
  }
}
