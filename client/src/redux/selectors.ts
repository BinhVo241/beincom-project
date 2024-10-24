import { RootState } from "./store";

export const isAuthenticatedSelector = (rootState: RootState) =>
  rootState.auth.isAuthenticated;
