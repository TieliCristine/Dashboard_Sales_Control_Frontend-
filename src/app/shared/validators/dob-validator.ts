import { FormControl } from '@angular/forms';

export class DoBValidator{

  static maxAge(control: FormControl){
    if (control.value.length === 8) {
      const year = control.value.slice(4);
      const now = new Date().getFullYear();
      if (now - year >= 100) {
        return {maxAge: true}
      }
    }
    return null;
  }

  static minAge(control: FormControl){
    if (control.value.length === 8) {
      const year = control.value.slice(4);
      const now = new Date().getFullYear();
      if (now - year < 2) {
        return {minAge: true}
      }
    }
    return null;
  }

  // static maxDay(control: AbstractControl): ValidationErrors | null {
  //
  //   //verificar se o mês é par tem 30 dias. se é impar 31
  //   if (control.value.length === 8) {
  //     const day = control.value.slice(0, 2);
  //     if (day < 31) {
  //       return {minAge: true}
  //     }
  //   }
  //   return null;
  // }
  //
  // static minDay(control: AbstractControl): ValidationErrors | null {
  //   if (control.value.length === 8) {
  //     const year = control.value.slice(4);
  //     const now = new Date().getFullYear();
  //     if (now - year < 2) {
  //       return {minAge: true}
  //     }
  //   }
  //   return null;
  // }
  //
  // static maxMonth(control: AbstractControl): ValidationErrors | null {
  //   if (control.value.length === 8) {
  //     const year = control.value.slice(4);
  //     const now = new Date().getFullYear();
  //     if (now - year < 2) {
  //       return {minAge: true}
  //     }
  //   }
  //   return null;
  // }
  //
  // static minMonth(control: AbstractControl): ValidationErrors | null {
  //   if (control.value.length === 8) {
  //     const year = control.value.slice(4);
  //     const now = new Date().getFullYear();
  //     if (now - year < 2) {
  //       return {minAge: true}
  //     }
  //   }
  //   return null;
  // }

}

