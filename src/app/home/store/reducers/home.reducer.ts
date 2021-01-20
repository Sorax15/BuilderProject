import { Action, createReducer, on } from '@ngrx/store';

import { postAction, postFailureAction, postSuccessAction } from '../actions/post.action';
import { IHomeStateInterface } from '../../types/homeState.interface';

export const initialState: IHomeStateInterface = {
  posts: null,
  isSubmitting: false
};

const home = createReducer(
  initialState,
  on(postAction, (state: IHomeStateInterface) => ({
    ...state,
    isSubmitting: true
  })),
  on(postSuccessAction, (state: IHomeStateInterface, { resultPosts }) => ({
    ...state,
    isSubmitting: false,
    posts: resultPosts
  })),
  on(postFailureAction, (state: IHomeStateInterface) => ({
    ...state,
    isSubmitting: false,
  }))
);

export function homeReducer(state: IHomeStateInterface, action: Action): any {
  return home(state, action);
}
