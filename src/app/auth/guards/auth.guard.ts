import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CurrentUserService } from '../services/currentUser.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private currentUser: CurrentUserService) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.currentUser.isAuthUser();
  }

}
