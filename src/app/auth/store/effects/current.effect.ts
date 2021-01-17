import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CurrentUserService} from '../../services/currentUser.service';
import {PersistenceService} from '../../../services/persistence.service';
import {currentAction, currentFailureAction, currentSuccessAction} from '../actions/current.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IAuthStateInterface} from '../../types/authState.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {IAuthResponseInterface} from '../../types/authResponse.interface';

@Injectable()

export class CurrentEffect {

  currentUser$ = createEffect(() => this.actions.pipe(
    ofType(currentAction),
    switchMap(() => {

      const token = this.persistenceService.getToken('token');
      if (token) {
        return of(currentFailureAction());
      }

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

  constructor(
    private actions: Actions,
    private currentService: CurrentUserService,
    private persistenceService: PersistenceService)
  {}
}
