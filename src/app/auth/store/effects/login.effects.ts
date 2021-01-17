import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IAuthResponseInterface } from '../../types/authResponse.interface';
import { LoginService } from '../../services/login.service';
import { PersistenceService } from '../../../services/persistence.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()

export class LoginEffects {

  login$ = createEffect(() => this.actions.pipe(
    ofType(loginAction),
    switchMap(({ loginRequest }) => {
      return this.loginService.login(loginRequest).pipe(
        map((currentUser: IAuthResponseInterface) => {
          this.persistenceService.setToken('token', currentUser.token);
          return loginSuccessAction({ loginResponse: currentUser });
        }),
        catchError((authResponseError: HttpErrorResponse) => {
          return of(loginFailureAction({ backendError: authResponseError.error }));
        })
      );
    })
  ));

  loginSuccess$ = createEffect(() => this.actions.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private loginService: LoginService,
    private persistenceService: PersistenceService,
    private router: Router) {
  }
}
