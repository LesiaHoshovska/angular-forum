import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './user.auth.actions';

export interface State {
  email: number;
  password: number;
}

export const initialState: State = {
  email: 0,
  password: 0,
};

export const loginReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, email: state.email  })),
);
