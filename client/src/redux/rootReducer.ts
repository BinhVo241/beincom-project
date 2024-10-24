import { combineReducers } from "redux";
import { authSlice } from "./auth/slice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
export default rootReducer;
