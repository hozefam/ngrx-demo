import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';

import { AuthResponseData } from './../../models/AuthResponseData.model';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data: AuthResponseData) => {
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}
