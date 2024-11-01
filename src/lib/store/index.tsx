import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import theme, { setTheme } from "./features/theme";
import heroes, { setHeroes, setCleanHeroes } from "./features/heroes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "heroes"],
};

const reducers = combineReducers({
  heroes,
  theme,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});
export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { setTheme, setCleanHeroes, setHeroes };

export default store;
