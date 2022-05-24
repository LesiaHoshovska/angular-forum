import { createAction, props } from '@ngrx/store';
import {Post} from "../../models/posts.models";
import {Observable} from "rxjs";

export const getPostsList = createAction(
  '[PostsList] Post'
);

export const getPostsListSuccess = createAction(
  '[PostsList] Post Load Success',
  props< {postsList: Post[] }>()
);

export const getPostsListFailure = createAction(
  '[PostsList] Post Load Failure',
  props<{ error: string }>()
);

//
// export const login = createAction(
//   '[Login Page] Login',
//   props<{ username: string; password: string }>()
// );
