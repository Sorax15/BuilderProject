import { Action, createReducer, on } from '@ngrx/store';

import { IAuthStateInterface } from '../../types/authState.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
import { currentAction, currentFailureAction, currentSuccessAction } from '../actions/current.action';

export const initialState: IAuthStateInterface = {
  isSubmitting: false,
  user: null,
  error: null,
  isLoggedIn: false
};

const auth = createReducer(
  initialState,
  /**
   * Register reducers
   */
  on(registerAction, (state: IAuthStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(registerSuccessAction, (state: IAuthStateInterface, { authResponse }) => ({
    ...state,
    isSubmitting: false,
    user: authResponse,
    error: null,
    isLoggedIn: true
  })),
  on(registerFailureAction, (state: IAuthStateInterface, { authError }) => ({
    ...state,
    isSubmitting: false,
    error: authError,
    user: null,
    isLoggedIn: false
  })),
  /**
   * Login reducers
   */
  on(loginAction, (state: IAuthStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(loginSuccessAction, (state: IAuthStateInterface, { loginResponse }) => ({
    ...state,
    isSubmitting: false,
    user: loginResponse,
    error: null,
    isLoggedIn: true
  })),
  on(loginFailureAction, (state: IAuthStateInterface, { backendError}) => ({
    ...state,
    error: backendError,
    user: null,
    isLoggedIn: false
  })),
  /**
   * Current user reducers
   */
  on(currentAction, (state: IAuthStateInterface) => ({
    ...state,
    isSubmitting: true
  })),
  on(currentSuccessAction, (state: IAuthStateInterface, { authResponse }) => ({
    ...state,
    isSubmitting: false,
    user: authResponse,
    error: null,
    isLoggedIn: true
  })),
  on(currentFailureAction, (state: IAuthStateInterface) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: false
  }))
);

export function authReducer(state: IAuthStateInterface, action: Action): any {
  return auth(state, action);
}
