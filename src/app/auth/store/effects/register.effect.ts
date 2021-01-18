import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { RegisterService } from '../../services/register.service';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { IAuthResponseInterface } from '../../types/authResponse.interface';
import { PersistenceService } from '../../../services/persistence.service';


@Injectable()

export class RegisterEffect {

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ registerRequest }) => {
      return this.registerService.register(registerRequest).pipe(
        map((authResponse: IAuthResponseInterface) => {
          this.persistenceService.setToken('token', authResponse.token);
          return registerSuccessAction({ authResponse });
        }),
        catchError((authResponseError: HttpErrorResponse) => {
          return of(registerFailureAction({ authError: authResponseError.error }));
        })
      );
    })
  ));


  registerSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  ), { dispatch : false });

  constructor(
    private actions$: Actions,
    private registerService: RegisterService,
    private persistenceService: PersistenceService,
    private router: Router)
  {}
}
