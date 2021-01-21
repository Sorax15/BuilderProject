import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { IPostInterface } from '../../types/post.interface';
import { PostService } from '../../services/post.service';
import {
  fetchPostAction,
  fetchPostFailureAction,
  fetchPostsAction,
  fetchPostsFailureAction,
  fetchPostsSuccessAction,
  fetchPostSuccessAction,
} from '../actions/post.action';


@Injectable()
export class PostsEffect {

  getPosts$ = createEffect(() => this.action.pipe(
    ofType(fetchPostsAction),
    switchMap(() => {
      return this.postService.getAllPost().pipe(
        map((resultPosts: IPostInterface[]) => {
          return fetchPostsSuccessAction({ resultPosts });
        }),
        catchError((errorFetchPosts: HttpErrorResponse) => {
          return of(fetchPostsFailureAction({ errorFetchPosts: errorFetchPosts.error }));
        })
      );
    })
  ));

  getPost$ = createEffect(() => this.action.pipe(
    ofType(fetchPostAction),
    switchMap(({ id }) => {
      return this.postService.getPostById(id).pipe(
        map((resultPost: IPostInterface) => {
          return fetchPostSuccessAction({ resultPost });
        }),
        catchError((errorPostFetch: HttpErrorResponse) => {
          return of(fetchPostFailureAction({ errorPostFetch: errorPostFetch.error }));
        })
      );
    })
  ));

  constructor(private postService: PostService, private action: Actions) {
  }
}
