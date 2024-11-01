import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme, { setTheme } from "./features/theme";
import heroes, { setHeroes, setCleanHeroes } from "./features/heroes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducers = combineReducers({
  heroes,
  theme,
});

export const store = configureStore({
  reducer: reducers,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { setTheme, setCleanHeroes, setHeroes };

export default store;
