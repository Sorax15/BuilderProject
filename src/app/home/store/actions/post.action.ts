import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IPostInterface } from '../../types/post.interface';

export const postAction = createAction(ActionTypes.POST);

export const postSuccessAction = createAction(
  ActionTypes.POST_SUCCESS,
  props<{ resultPosts: IPostInterface }>()
);

export const postFailureAction = createAction(ActionTypes.POST_FAILURE);
