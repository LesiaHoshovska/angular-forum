import { ActionReducerMap } from '@ngrx/store';

import * as fromPostsList from './posts/post.reducer';
import * as fromAuth from './users/user.auth.reducer';
import {postReducer} from "./posts/post.reducer";


export interface AppState {
  postsList: fromPostsList.State;
  // auth: fromAuth.State;
}


export const appReducer: ActionReducerMap<AppState> = {
  // @ts-ignore
  postsList: fromPostsList.postReducer,
  // auth: fromAuth.authReducer,
};
