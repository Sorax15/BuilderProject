import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersistenceService} from '../../services/persistence.service';

@Injectable()

export class AuthInterceptors implements HttpInterceptor{
  constructor(private persistenceService: PersistenceService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.getToken('token');

    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    });

    return next.handle(req);
  }
}
