import { Updater } from "use-immer";

export type AuthContextType = {
  state: AuthState;
  updateState: Updater<AuthState>;
  logout: () => void;
};

export interface AuthState {
  accessToken: Nullable<string>;
  isAuthenticated: boolean;
  isLoadSession: boolean;
  userInfo: Nullable<IUser>;
  // session: Nullable<IUserSession>;
}

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Nullable<string>;
  updatedAt: Nullable<string>;
}

// export interface IUserSession {
//   id: string;
//   email: string;
// }

export interface ActionLogin {
  token: string;
  userInfo: IUser;
  // session: IUserSession;
}
