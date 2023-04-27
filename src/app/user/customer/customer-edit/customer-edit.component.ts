import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Customer } from "../../../shared/model/Customer";
import { CustomerService } from "../../../service/customer-service/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit{

  customer?: Customer;
  customerFormEdit: FormGroup;


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) {
    this.route.params.subscribe(params => {
      this.customer = history.state.customer;
    });
    this.customerFormEdit = this.formBuilder.group({
      name: [ this.customer?.name ],
      birthdate: [ this.customer?.birthdate ],
      address: this.formBuilder.group({
        zipCode: [ this.customer?.address.zipCode ],
        street: [ this.customer?.address.street ],
        number: [ this.customer?.address.number ],
        supplemental: [ this.customer?.address.supplemental ],
        district: [ this.customer?.address.district ],
        city: [ this.customer?.address.city ],
        state: [ this.customer?.address.state ],
      }),
      personalData: this.formBuilder.group({
        cpf: [ this.customer?.personalData.cpf ],
        cnpj: [ this.customer?.personalData.cnpj ],
        phone: [ this.customer?.personalData.phone ],
        email: [ this.customer?.personalData.email ],
      })
    });
  }

  ngOnInit(): void {
  }

  hasCpfValue(): boolean {
    const cpfValue = this.customerFormEdit.get('personalData.cpf');
    return cpfValue?.value;
  }

  onSubmit(customerFormEdit: FormGroup) {
    console.log(customerFormEdit)
  }
}
