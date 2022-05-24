import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostsService } from '../../services/post-service/posts.service';
import {getPostsList, getPostsListSuccess} from "./post.actions";
import {Post} from "../../models/posts.models";

@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}

  loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType(getPostsList),
      mergeMap(() => this.postsService.getPosts()
        .pipe(
          map((posts) => getPostsListSuccess({ postsList: posts })),
          catchError(() => EMPTY)
        ))
    )
  )
}


