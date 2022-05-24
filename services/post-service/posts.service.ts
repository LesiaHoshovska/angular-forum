import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {PostsResponse, Post, AddPost, EditPost} from '../../models/posts.models';
import { HttpErrorHandler, HandleError } from '../error-handler/http-error-handler.service';

import { environment } from '../../../environments/environment'


@Injectable()
export class PostsService {
  handleError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
    // @ts-ignore
    return this.http.get<PostsResponse>(environment.API_URL_POST)
      .pipe(
        map((response) => {
          const postsList = response.docs
          return postsList
        }),
        catchError(this.handleError('getPosts', []))
      );
  }

  /** GET post from the server */
  getPost(id: string): Observable<Post> {
    const url = `${environment.API_URL_POST}/${id}`;
    return this.http.get<Post>(url).pipe(
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  /* GET posts whose name contains search term */
  // searchPost(term: string): Observable<Post[]> {
  //   term = term.trim();
  //
  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //     { params: new HttpParams().set('name', term) } : {};
  //
  //   return this.http.get<Post[]>(environment.API_URL_POST, options)
  //     .pipe(
  //       catchError(this.handleError<Post[]>('searchPost', []))
  //     );
  // }

  /** POST: add a new post to the database */
  addPost(post: AddPost): Observable<AddPost> {
    return this.http.post<AddPost>(environment.API_URL_POST, post)
      .pipe(
        catchError(this.handleError('addPost', post))
      );
  }

  /** PUT: update the post on the server. Returns the updated post upon success. */
  updatePost(id: string, post: EditPost): Observable<EditPost> {
    const url = `${environment.API_URL_POST}/${id}`;
    // httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<EditPost>(url, post)
      .pipe(
        catchError(this.handleError('updatePost', post))
      );
  }

  /** DELETE: delete the post from the server */
  deletePost(id: string): Observable<unknown> {
    const url = `${environment.API_URL_POST}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError('deletePost'))
      );
  }
}
