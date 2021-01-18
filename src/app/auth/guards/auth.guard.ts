import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAppStateInterface } from '../../types/appState.interface';
import { isLoggedInSelector } from '../store/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector), map((isLoggedIn: boolean) => !isLoggedIn));

  constructor(private store: Store<IAppStateInterface>) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoggedIn$;
  }

}
