import { Directive } from '@angular/core';

@Directive({
  selector: '[appStatusFilter]'
})
export class StatusFilterDirective {

  constructor() { }

  transform(items: any[], status: string): any[] {
    if (!items) {
      return [];
    }
    if (!status) {
      return items;
    }
    return items.filter(item => item.status === status);
  }
}
