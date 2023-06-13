import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from "ngx-bootstrap/modal";
import { NgChartsModule } from 'ng2-charts';

import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    NgChartsModule
    // NgChartsModule.forRoot({ defaults: { ... } })    CONFIG GLOBAL
  ],
  exports: [ModalComponent]
})
export class SharedModule { }



// import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
//
// imports: [
//   NgChartsModule
// ],
//   providers: [
//   { provide: NgChartsConfiguration, useValue: { generateColors: false }}
// ]
