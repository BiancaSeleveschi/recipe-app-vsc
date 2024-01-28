import React, { useState } from "react";
import { RecipeList } from "../components/RecipeList";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setRecipes, resetRecipes } from "../redux/RecipeReducer";
export const Home = () => {
  let recipes = useSelector((state) => state.recipes);
  const [searchedRecipe, setSearchedRecipe] = useState("");
  const dispatch = useDispatch();
  let rec = recipes;

  const searchRecipe = () => {
    console.log("RECIPES BEFORE ", recipes);
    dispatch(resetRecipes());
    // recipes = resetRecipes();
    console.log("retele sunt:", recipes);
    const searchedRecipes = recipes.filter((r) => {
      return (
        r.name.toLowerCase().includes(searchedRecipe.toLowerCase()) ||
        r.category.toLowerCase().includes(searchedRecipe.toLowerCase())
      );
    });
    //  console.log("RECIPES AFTER ", recipes);
    dispatch(setRecipes(searchedRecipes));

    console.log("RECIPES AFTERrrrr ", searchedRecipes);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchRecipe();
    }
  };
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", my: 5 }}
      >
        My Recipes
      </Typography>

      <TextField
        onKeyDown={handleKeyDown}
        type="text"
        variant="outlined"
        color="success"
        background="white"
        label="Search recipe..."
        value={searchedRecipe}
        onChange={(e) => {
          setSearchedRecipe(e.target.value);
        }}
        sx={{
          display: "flex",
          margin: "auto",
          width: "20%",
          mb: 2,
          mt: 3,
          "&:hover": {
            bgcolor: " rgb(176, 230, 176); ",
          },
        }}
      />
      <Button
        onClick={searchRecipe}
        sx={{ display: "flex", margin: "auto", px: 3 }}
        variant="contained"
      >
        Search
      </Button>

      <RecipeList recipes={recipes} />
    </Box>
  );
};
