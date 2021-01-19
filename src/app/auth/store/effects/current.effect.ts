import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IAuthResponseInterface } from '../../types/authResponse.interface';
import { CurrentUserService } from '../../services/currentUser.service';
import { PersistenceService } from '../../../services/persistence.service';
import { currentAction, currentFailureAction, currentSuccessAction } from '../actions/current.action';

@Injectable()

export class CurrentEffect {

  currentUser$ = createEffect(() => this.actions.pipe(
    ofType(currentAction),
    switchMap(() => {
      return this.currentService.currentUser().pipe(
        map((currentUser: IAuthResponseInterface) => {
          return currentSuccessAction({ authResponse: currentUser });
        }),
        catchError(() => {
          return of(currentFailureAction());
        })
      );
    })
  ));

  constructor(private actions: Actions, private currentService: CurrentUserService) {

  }
}
