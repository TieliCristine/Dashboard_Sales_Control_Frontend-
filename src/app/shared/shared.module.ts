import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalModule} from "ngx-bootstrap/modal";
import { AlertModalComponent } from './alert-modal/alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    ModalComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [ModalComponent],
})
export class SharedModule { }
