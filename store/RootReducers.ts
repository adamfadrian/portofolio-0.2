import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import storage from "redux-persist/lib/storage";
  import { persistStore, persistReducer } from "redux-persist";
import projectReducer from "./projectDetail/projectDetailSlice";
  
  const persistConfig = {
    key: "root",
    storage,
  };

  const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });

  const rootReducer = combineReducers({
    project: persistReducer(persistConfig, projectReducer)
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
  });


  const persistor = persistStore(store);
  export {store , persistor};
  export default store;
  export type RootState = ReturnType<typeof store.getState>;