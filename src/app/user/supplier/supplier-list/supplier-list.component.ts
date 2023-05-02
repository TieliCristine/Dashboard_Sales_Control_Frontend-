import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Supplier } from "../../../shared/model/Supplier";
import { SupplierService } from "../../../service/supplier-service/supplier.service";

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit{

  suppliers?: Supplier[];

  subscriptionGetSupplier$?: Subscription

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {
    this.supplierService.listAllSuppliers();
  }

  ngOnInit(): void {
    this.supplierListSubscription();
  }

  supplierListSubscription(){
    this.subscriptionGetSupplier$ = this.supplierService.supplierEmitter.subscribe(supplierList => {
      this.suppliers = supplierList;
    })
  }

  editSupplier(supplier: Supplier) {
    this.router.navigate(['user/supplier-edit', supplier.id], {state: {supplier}})
  }
}
