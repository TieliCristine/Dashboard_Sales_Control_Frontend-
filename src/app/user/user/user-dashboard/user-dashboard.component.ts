import {Component, Directive, Input, ViewChild} from '@angular/core';
import { ChartType } from "chart.js";

@Directive({selector: 'pane'})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'app-user-dashboard',
  template: `
    <pane id="1" *ngIf="shouldShow"></pane>
    <pane id="2" *ngIf="!shouldShow"></pane>

    <button (click)="toggle()">Toggle</button>

    <div>Selected: {{selectedPane}}</div>
  `,
  // templateUrl: './user-dashboard.component.html',
  // styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
