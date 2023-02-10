import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MparkReducer } from "../redux-toolkit/redux-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  mparkLoad: MparkReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeMpark = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(storeMpark);
export type RootState = ReturnType<typeof storeMpark.getState>;
