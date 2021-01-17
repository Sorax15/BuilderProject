import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAuthResponseInterface } from '../types/authResponse.interface';
import { IRegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(dataRequest: IRegisterRequestInterface): Observable<IAuthResponseInterface> {
    return this.http.post<IAuthResponseInterface>('', dataRequest);
  }
}
