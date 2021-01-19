import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICurrentUserInterface } from '../../types/currentUser.interface';
import { IAuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';
import { PersistenceService } from '../../services/persistence.service';

@Injectable()
export class CurrentUserService {
  constructor(private http: HttpClient, private persistenceService: PersistenceService) {
  }

  currentUser(): Observable<IAuthResponseInterface> {
    return this.http.get<ICurrentUserInterface>(environment.apiURL + 'current-user').pipe(
      map((currentUser: ICurrentUserInterface) => currentUser.user)
    );
  }

  isAuthUser(): Observable<boolean> {
    if (this.persistenceService.getToken('token')) {
      return of(false);
    }

    return of(true);
  }
}
