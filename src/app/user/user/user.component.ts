import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../shared/model/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
