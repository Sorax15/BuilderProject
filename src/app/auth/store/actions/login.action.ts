import {createAction, props} from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { ILoginRequestInterface } from '../../types/loginRequest.interface';
import { IAuthResponseInterface } from '../../types/authResponse.interface';
import { IAuthErrorInterface } from '../../types/authError.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ loginRequest: ILoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ loginResponse: IAuthResponseInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ backendError: IAuthErrorInterface }>()
);
