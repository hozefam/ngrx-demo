import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';

import { AppState } from 'src/app/store/app.state';
import { AuthResponseData } from './../../models/AuthResponseData.model';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from './../../store/Shared/shared.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data: AuthResponseData) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}
