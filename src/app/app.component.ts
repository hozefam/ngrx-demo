import { Component, OnInit } from '@angular/core';

import { AppState } from './store/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getLoading } from './store/Shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';

  showLoading: Observable<boolean> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
  }
}
