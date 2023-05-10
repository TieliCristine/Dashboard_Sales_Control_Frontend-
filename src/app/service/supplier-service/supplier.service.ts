import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { ApiService } from "../api-service/api.service";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  supplierEmitter = new EventEmitter();

  subscriptionListSupplier$?: Subscription;
  subscriptionFindByIdSupplier$?: Subscription;
  subscriptionCreateSupplier$?: Subscription;
  subscriptionUpdateSupplier$?: Subscription;

  constructor(
    private apiService: ApiService
  ) { }

  listAllSuppliers() {
    this.subscriptionListSupplier$ = this.apiService.getSuppliers().subscribe(supplierList => {
      this.supplierEmitter.emit(supplierList);
      this.subscriptionListSupplier$?.unsubscribe();
    })
  }

  findSupplierById(selectedValue: number) {
    this.subscriptionFindByIdSupplier$ = this.apiService.getSupplierById(selectedValue).subscribe(supplierFound => {
      this.supplierEmitter.emit(supplierFound);
      this.subscriptionFindByIdSupplier$?.unsubscribe();
    })
  }

  createSupplier(form: FormGroup) {
    this.subscriptionCreateSupplier$ = this.apiService.postSupplier(form).subscribe(newSupplier => {
      this.supplierEmitter.emit(newSupplier);
      this.subscriptionCreateSupplier$?.unsubscribe();
    })
  }

  updateSupplier(supplierFormEdit: FormGroup) {
    this.subscriptionUpdateSupplier$ = this.apiService.putSupplier(supplierFormEdit).subscribe(supplierUpdate => {
      this.supplierEmitter.emit(supplierUpdate);
      this.subscriptionUpdateSupplier$?.unsubscribe();
    })
  }
}
