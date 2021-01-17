import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAuthResponseInterface } from '../types/authResponse.interface';
import { IRegisterRequestInterface } from '../types/registerRequest.interface';
import {ICurrentUserInterface} from '../../types/currentUser.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(dataRequest: IRegisterRequestInterface): Observable<IAuthResponseInterface> {
    return this.http.post<ICurrentUserInterface>(environment.apiURL + 'register', dataRequest).pipe(
      map((current) => current.user)
    );
  }
}
