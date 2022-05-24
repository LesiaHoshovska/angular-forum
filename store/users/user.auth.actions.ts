import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.models';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: User }>()
);

