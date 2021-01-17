import { Action, createReducer, on } from '@ngrx/store';

import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
import { ILoginStateInterface } from '../../types/loginState.interface';

export const initialState: ILoginStateInterface = {
  isSubmitting: false,
  user: null,
  error: null
};

const login = createReducer(
  initialState,
  on(loginAction, (state: ILoginStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(loginSuccessAction, (state: ILoginStateInterface, { loginResponse }) => ({
    ...state,
    isSubmitting: false,
    user: loginResponse,
    error: null
  })),
  on(loginFailureAction, (state: ILoginStateInterface, { backendError}) => ({
    ...state,
    error: backendError,
    user: null
  }))
);

export function loginReducer(state: ILoginStateInterface, action: Action): any {
  return login(state, action);
}
