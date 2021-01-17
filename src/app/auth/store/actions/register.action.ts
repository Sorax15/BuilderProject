import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { IRegisterRequestInterface } from '../../types/registerRequest.interface';
import { IAuthResponseInterface } from '../../types/authResponse.interface';
import { IAuthErrorInterface } from '../../types/authError.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ registerRequest: IRegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ authResponse: IAuthResponseInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ authError: IAuthErrorInterface }>()
);
