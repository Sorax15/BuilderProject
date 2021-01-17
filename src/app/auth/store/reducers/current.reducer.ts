import { Action, createReducer, on } from '@ngrx/store';

import { currentAction, currentFailureAction, currentSuccessAction } from '../actions/current.action';
import { ICurrentStateInterface } from '../../types/currentState.interface';

export const initialState: ICurrentStateInterface = {
  isSubmitting: false,
  user: null,
  error: null
};

const current = createReducer(
  initialState,
  on(currentAction, (state: ICurrentStateInterface) => ({
    ...state,
    isSubmitting: true
  })),
  on(currentSuccessAction, (state: ICurrentStateInterface, { authResponse }) => ({
    ...state,
    isSubmitting: false,
    user: authResponse,
    error: null
  })),
  on(currentFailureAction, (state: ICurrentStateInterface,  ) => ({
    ...state,
    isSubmitting: false,
  }))
);


export function currentReducer(state: ICurrentStateInterface, action: Action): any {
  return current(state, action);
}
