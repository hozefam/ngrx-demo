import { Component, OnInit } from '@angular/core';
import { getErrorMessage, getLoading } from './store/Shared/shared.selector';

import { AppState } from './store/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';

  showLoading: Observable<boolean> | undefined;
  errorMessage: Observable<string> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
