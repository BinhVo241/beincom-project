import { setToken } from "@/apiRequests/axiosClient";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import _ from "lodash";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import rootReducer from "./rootReducer";
import storage from "./storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  type: REHYDRATE,
  effect: async (action, listenerApi) => {
    const token = _.get(action, "payload.auth.accessToken");
    if (token) setToken(token);
  },
});

export const makeStore = () => {
  return configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).prepend(listenerMiddleware.middleware);
    },
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

// export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
