import { Action, createReducer, on } from '@ngrx/store';

import { IAuthStateInterface } from '../../types/authState.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

export const initialState: IAuthStateInterface = {
  isSubmitting: false,
  user: null,
  error: null
};

const register = createReducer(
  initialState,
  on(registerAction, (state: IAuthStateInterface) => ({
    ...state,
    isSubmitting: true
  })),
  on(registerSuccessAction, (state: IAuthStateInterface, { authResponse }) => ({
    ...state,
    isSubmitting: false,
    user: authResponse
  })),
  on(registerFailureAction, (state: IAuthStateInterface, { authError }) => ({
    ...state,
    isSubmitting: false,
    error: authError
  }))
);

export function registerReducer(state: IAuthStateInterface, action: Action): any {
  return register(state, action);
}
