import { Action, createReducer, on } from '@ngrx/store';

import { IRegisterStateInterface } from '../../types/registerState.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

export const initialState: IRegisterStateInterface = {
  isSubmitting: false,
  user: null,
  error: null
};

const register = createReducer(
  initialState,
  on(registerAction, (state: IRegisterStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(registerSuccessAction, (state: IRegisterStateInterface, { authResponse }) => ({
    ...state,
    isSubmitting: false,
    user: authResponse,
    error: null
  })),
  on(registerFailureAction, (state: IRegisterStateInterface, { authError }) => ({
    ...state,
    isSubmitting: false,
    error: authError,
    user: null
  }))
);

export function registerReducer(state: IRegisterStateInterface, action: Action): any {
  return register(state, action);
}
