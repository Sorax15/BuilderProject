import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IPostInterface } from '../../types/post.interface';
import {IPostErrorInterface} from '../../types/postError.interface';

/**
 * Methods for fetch all posts
 */
export const fetchPostsAction = createAction(ActionTypes.FETCH_POSTS);

export const fetchPostsSuccessAction = createAction(
  ActionTypes.FETCH_POSTS_SUCCESS,
  props<{ resultPosts: IPostInterface[] }>()
);

export const fetchPostsFailureAction = createAction(
  ActionTypes.FETCH_POSTS_FAILURE,
  props<{ errorFetchPosts: IPostErrorInterface }>()
);

/**
 * Methods for fetch one post
 */
export const fetchPostAction = createAction(
  ActionTypes.FETCH_POST,
  props<{ id: number }>()
);

export const fetchPostSuccessAction = createAction(
  ActionTypes.FETCH_POST_SUCCESS,
  props<{ resultPost: IPostInterface }>()
);

export const fetchPostFailureAction = createAction(
  ActionTypes.FETCH_POST_FAILURE,
  props<{ errorPostFetch: IPostErrorInterface }>()
);

/**
 * Methods for update posts
 */
export const updatePostAction = createAction(
  ActionTypes.UPDATE_POST,
  props<{ id: number, dataUpdate: IPostInterface }>()
);

export const updatePostSuccessAction = createAction(
  ActionTypes.UPDATE_POST_SUCCESS,
  props<{ resultPost: IPostInterface[] }>()
);

export const updatePostFailureAction = createAction(
  ActionTypes.UPDATE_POST_FAILURE,
  props<{ errorUpdate: IPostErrorInterface }>()
);

/**
 * Methods for create posts
 */
export const createPostAction = createAction(
  ActionTypes.CREATE_POST,
  props<{ dataPost: IPostInterface }>()
);

export const createPostSuccessAction = createAction(
  ActionTypes.CREATE_POST_SUCCESS,
  props<{ resultPost: IPostInterface[] }>()
);

export const createPostFailureAction = createAction(
  ActionTypes.CREATE_POST_FAILURE,
  props<{ errorCreate: IPostErrorInterface }>()
);

/**
 * Methods for delete post
 */
export const deletePostAction = createAction(
  ActionTypes.DELETE_POST,
  props<{ id: number }>()
);

export const deletePostSuccessAction = createAction(
  ActionTypes.DELETE_POST_SUCCESS,
  props<{ resultPost: IPostInterface }>()
);

export const deletePostFailureAction = createAction(
  ActionTypes.DELETE_POST_FAILURE,
  props<{ errorDelete: IPostErrorInterface }>()
);
