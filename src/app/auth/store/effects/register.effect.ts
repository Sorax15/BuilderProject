import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { RegisterService } from '../../services/register.service';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { IAuthResponseInterface } from '../../types/authResponse.interface';


@Injectable()
export class RegisterEffect {

  register$ = createEffect(() => this.$actions.pipe(
    ofType(registerAction),
    switchMap(({ registerRequest }) => {
      return this.registerService.register(registerRequest).pipe(
        map((authResponse: IAuthResponseInterface) => {
          return registerSuccessAction({ authResponse });
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(registerFailureAction({ authError: errorResponse.error }));
        })
      );
    })
  ));

  constructor(private $actions: Actions, private registerService: RegisterService) {
  }
}
