import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "./Data";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: recipes,
  reducers: {
    setRecipes: (state, action) => {
      console.log("Action.playload ", action.payload);
      return action.payload;
    },
    resetRecipes: (state) => {
      console.log("State: ", recipes);

      return recipes;
    },
  },
});
export const {resetRecipes,setRecipes, addToFavorite, removeFromFavorite } = recipeSlice.actions;
export default recipeSlice.reducer;
