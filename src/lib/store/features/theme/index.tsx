import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: string;
}

const initialState: ThemeState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
