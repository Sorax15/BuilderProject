import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { PersistenceService } from '../../services/persistence.service';

@Injectable()

export class AuthInterceptors implements HttpInterceptor {

  constructor(private persistenceService: PersistenceService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.getToken('token');

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError(
        (error: HttpErrorResponse) => this.handleAuthError(error)
      )
    );
  }

  private handleAuthError(error: HttpErrorResponse): Observable<HttpEvent<any>> {

    if (error.status === 404 || error.status === 401) {
      this.persistenceService.removeToken('token');
      this.router.navigateByUrl('/login');
    }

    return throwError(error);
  }
}
