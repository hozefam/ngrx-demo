import { User } from './../../models/user.model';
export interface AuthSate {
  user: User | null;
}

export const initialState: AuthSate = {
  user: null,
};
