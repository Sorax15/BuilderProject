import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IPostInterface } from '../types/post.interface';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAllPost(): Observable<IPostInterface[]> {
    return this.http.get<IPostInterface[]>(environment.apiURL + '/posts');
  }

  getPostById(id: number): Observable<IPostInterface> {
    return this.http.get<IPostInterface>(environment.apiURL + `post/${id}`);
  }

  updatePostById(id: number, changes: IPostInterface): Observable<IPostInterface> {
    return this.http.put<IPostInterface>(environment.apiURL + `post/${id}`, changes);
  }

  createPost(post: IPostInterface): void {
    this.http.post(environment.apiURL + `post/create`, post);
  }

  deletePost(id: number): void {
    this.http.delete(environment.apiURL + `post/${id}`);
  }
}
