import { Action, createReducer, on } from '@ngrx/store';

import { IHomeStateInterface } from '../../types/homeState.interface';
import { fetchPostsAction, fetchPostsFailureAction, fetchPostsSuccessAction } from '../actions/post.action';

export const initialState: IHomeStateInterface = {
  posts: null,
  isSubmitting: false
};

const home = createReducer(
  initialState,
  on(fetchPostsAction, (state: IHomeStateInterface) => ({
    ...state,
    isSubmitting: true
  })),
  on(fetchPostsSuccessAction, (state: IHomeStateInterface, { resultPosts }) => ({
    ...state,
    isSubmitting: false,
    posts: resultPosts
  })),
  on(fetchPostsFailureAction, (state: IHomeStateInterface) => ({
    ...state,
    isSubmitting: false,
  }))
);

export function homeReducer(state: IHomeStateInterface, action: Action): any {
  return home(state, action);
}
