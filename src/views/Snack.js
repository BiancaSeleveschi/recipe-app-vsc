import React from 'react'
import { RecipeList } from '../components/RecipeList'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export const Snack = () => {
  const recipes = useSelector((state) => state.recipes);
  const snackRecipes = recipes.filter((recipe) => recipe.category === 'Snack')
  return (
    <div>
       <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", mt: 10, mb:7 }}
      >
        Snack Recipes
      </Typography>
      <RecipeList recipes={snackRecipes}/>
    </div>
  )
}
