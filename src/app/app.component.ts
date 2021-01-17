import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { currentAction } from './auth/store/actions/current.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.store.dispatch(currentAction());
  }
}
