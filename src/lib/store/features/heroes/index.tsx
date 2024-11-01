import { HeroesProps } from "@/models/types/heroes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HeroesProps = {
  heroes: [],
};

const userRegisterSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (
      state,
      action: PayloadAction<Partial<HeroesProps | undefined>>
    ) => {
      return { ...state, ...action.payload };
    },
    setCleanHeroes: () => initialState,
  },
});

export const { setHeroes, setCleanHeroes } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
