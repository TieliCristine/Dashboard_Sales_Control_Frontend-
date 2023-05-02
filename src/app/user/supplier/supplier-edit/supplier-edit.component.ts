import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Supplier } from "../../../shared/model/Supplier";
import { SupplierService } from "../../../service/supplier-service/supplier.service";

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit{

  supplier?: Supplier;
  supplierEditForm: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) {
    this.route.params.subscribe(params => {
      this.supplier = history.state.supplier;
    });
    this.supplierEditForm = this.formBuilder.group({
      id: [ this.supplier?.id ],
      corporativeName: [ this.supplier?.corporativeName ],
      salesRepresentative: [ this.supplier?.salesRepresentative ],
      address: this.formBuilder.group({
        zipCode: [ this.supplier?.address.zipCode ],
        street: [ this.supplier?.address.street ],
        number: [ this.supplier?.address.number ],
        supplemental: [ this.supplier?.address.supplemental ],
        district: [ this.supplier?.address.district ],
        city: [ this.supplier?.address.city ],
        state: [ this.supplier?.address.state ],
      }),
      personalData: this.formBuilder.group({
        cpf: [ this.supplier?.personalData.cpf ],
        cnpj: [ this.supplier?.personalData.cnpj ],
        phone: [ this.supplier?.personalData.phone ],
        email: [ this.supplier?.personalData.email ],
      })
    });
  }

  ngOnInit(): void {
  }

  hasCpfValue(): boolean{
    const cpfValue = this.supplierEditForm.get('personalData.cpf');
    return cpfValue?.value;
  }

  onSubmit(supplierFormEdit: FormGroup) {
    this.supplierService.updateSupplier(supplierFormEdit);
  }
}
