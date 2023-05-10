import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";

import { BudgetModalFormComponent } from "../budget-modal-form/budget-modal-form.component";
import { BudgetService } from "../../../service/budget-service/budget.service";
import { Budget } from "../../../shared/model/Budget";

@Component({
  selector: 'app-budget-modal-edit',
  templateUrl: './budget-modal-edit.component.html',
  styleUrls: ['./budget-modal-edit.component.scss']
})
export class BudgetModalEditComponent implements OnInit {

  budgetFormEdit: FormGroup;
  budget?: Budget;
  totalPrice: any;

  constructor(
    private bsModalRef: BsModalRef<BudgetModalFormComponent>,
    private formBuilder: FormBuilder,
    private budgetService: BudgetService,
  ) {
    this.budgetFormEdit = this.formBuilder.group({
      quantity: [ this.budget?.quantity ],
      finalPrice: [ this.budget?.finalPrice ],
      customer: this.formBuilder.group({
        id: [ this.budget?.customer.id ],
        name: [ this.budget?.customer.name ],
        birthdate: [ this.budget?.customer.birthdate ],
        address: this.formBuilder.group({
          id: [ this.budget?.customer.address.id ],
          zipCode: [ this.budget?.customer.address.zipCode ],
          street: [ this.budget?.customer.address.street ],
          number: [ this.budget?.customer.address.number ],
          supplemental: [ this.budget?.customer.address.supplemental ],
          district: [ this.budget?.customer.address.district ],
          city: [ this.budget?.customer.address.city ],
          state: [ this.budget?.customer.address.state ],
        }),
        personalData: this.formBuilder.group({
          id: [ this.budget?.customer.personalData.id ],
          cpf: [ this.budget?.customer.personalData.cpf ],
          cnpj: [ this.budget?.customer.personalData.cnpj ],
          phone: [ this.budget?.customer.personalData.phone ],
          email: [ this.budget?.customer.personalData.email ]
        })
      }),
      supplier: this.formBuilder.group({
        id: [ this.budget?.supplier.id ],
        corporativeName: [ this.budget?.supplier.corporativeName ],
        salesRepresentative: [ this.budget?.supplier.salesRepresentative ],
        address: this.formBuilder.group({
          id: [ this.budget?.supplier.address.id ],
          zipCode: [ this.budget?.supplier.address.zipCode ],
          street: [ this.budget?.supplier.address.street ],
          number: [ this.budget?.supplier.address.number ],
          supplemental: [ this.budget?.supplier.address.supplemental ],
          district: [ this.budget?.supplier.address.district ],
          city: [ this.budget?.supplier.address.city ],
          state: [ this.budget?.supplier.address.state ]
        }),
        personalData: this.formBuilder.group({
          id: [ this.budget?.supplier.personalData.id ],
          cpf: [ this.budget?.supplier.personalData.cpf ],
          cnpj: [ this.budget?.supplier.personalData.cnpj ],
          phone: [ this.budget?.supplier.personalData.phone ],
          email: [ this.budget?.supplier.personalData.email ]
        })
      }),
      product: this.formBuilder.group({
        id: [ this.budget?.product.id ],
        name: [ this.budget?.product.name ],
        price: [ this.budget?.product.price ],
        description: [ this.budget?.product.description ]
      }),
      status: [this.budget?.status]
    })
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.bsModalRef?.hide();
  }

  onChangeCustomer($event: Event) {

  }

  onChangeSupplier($event: Event) {

  }

  onChangeProduct($event: Event) {

  }

  onSubmit(budgetFormEdit: FormGroup) {

  }
}
