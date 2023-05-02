import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { SupplierService } from "../../../service/supplier-service/supplier.service";

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit{

  supplierForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService
  ) {
    this.supplierForm = this.formBuilder.group({
      corporativeName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Zà-úÁ-Ú ]*")]],
      salesRepresentative: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Zà-úÁ-Ú ]*")]],
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
    })
  }

  ngOnInit(): void {
    this.supplierForm.get('type')!.valueChanges.subscribe(value => {
      if (value === 'cpf') {
        this.supplierForm.get('personalData.cnpj')!.setValue(null);
      } else if (value === 'cnpj') {
        this.supplierForm.get('personalData.cpf')!.setValue(null);
      }
    });
  }

  onSubmit(supplierForm: FormGroup) {
    this.supplierService.createSupplier(supplierForm);
  }
}
