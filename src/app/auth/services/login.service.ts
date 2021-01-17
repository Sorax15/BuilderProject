import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IAuthResponseInterface } from '../types/authResponse.interface';
import { ICurrentUserInterface } from '../../types/currentUser.interface';
import { ILoginRequestInterface } from '../types/loginRequest.interface';
import { environment } from '../../../environments/environment';

@Injectable()

export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(loginRequest: ILoginRequestInterface): Observable<IAuthResponseInterface> {
    return this.http.post<ICurrentUserInterface>(environment.apiURL + 'login', loginRequest).pipe(
      map((currentUser: ICurrentUserInterface) => currentUser.user)
    );
  }
}
