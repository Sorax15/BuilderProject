import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

import { IAuthResponseInterface } from '../../types/authResponse.interface';
import { IAuthErrorInterface } from '../../types/authError.interface';

export const currentAction = createAction(
  ActionTypes.CURRENT
);

export const currentSuccessAction = createAction(
  ActionTypes.CURRENT_SUCCESS,
  props<{ authResponse: IAuthResponseInterface }>()
);

export const currentFailureAction = createAction(
  ActionTypes.CURRENT_FAILURE,
);
