import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICurrentUserInterface } from '../../types/currentUser.interface';
import { IAuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable()

export class CurrentUserService {
  constructor(private http: HttpClient) {
  }

  currentUser(): Observable<IAuthResponseInterface> {
    return this.http.get<ICurrentUserInterface>(environment.apiURL + 'current/user').pipe(
      map((currentUser: ICurrentUserInterface) => currentUser.user)
    );
  }
}
