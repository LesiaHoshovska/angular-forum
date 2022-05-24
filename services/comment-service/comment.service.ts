import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {Comment, EditComment} from '../../models/posts.models';
import { HttpErrorHandler, HandleError } from '../error-handler/http-error-handler.service';

import { environment } from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class CommentService {
  postsUrl = environment.API_URL_POST;  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** POST: add a new comment to the database */
  addComment( postId: string, comment: Comment ): Observable<Comment> {
    const url = `${this.postsUrl}/${postId}/comments`;
    return this.http.post<Comment>(url, comment)
      .pipe(
        catchError(this.handleError('addComment', comment))
      );
  }

  /** PUT: update the comment on the server. Returns the updated post upon success. */
  updateComment(postId: string, commentId: string, comment: EditComment): Observable<EditComment> {
    const url = `${this.postsUrl}/${postId}/comments/${commentId}`;
    // @ts-ignore
    return this.http.put<EditComment>(url, comment, postId)
      .pipe(
        catchError(this.handleError('updateComment', comment))
      );
  }

  /** DELETE: delete the comment from the server */
  deleteComment(postId: string, commentId: string ): Observable<unknown> {
    const url = `${this.postsUrl}/${postId}/comments/${commentId}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deletePost'))
      );
  }
}
