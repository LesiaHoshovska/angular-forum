import { Action, createReducer, on } from '@ngrx/store';
import * as postActions from './post.actions';
import {Post} from '../../models/posts.models'
import {Observable} from "rxjs";


export interface State {
  postsList: Post[];
}


export const initialState: State = {
  postsList: []
};

// @ts-ignore
export const postReducer = createReducer(
  initialState,
  // on(postActions.getPostsList, state => ({ ...state, status: 'loading' })),
  on(postActions.getPostsListSuccess, (state, { postsList }) => ({
      ...state, postsList: postsList,})
  ),
);

export const selectPostsList = (state: State) => state.postsList;
