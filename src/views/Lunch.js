import React from 'react'
import { RecipeList } from '../components/RecipeList'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export const Lunch = () => {
  const recipes = useSelector((state) => state.recipes);
  const lunchRecipes = recipes.filter((recipe) => recipe.category === 'Lunch')
  return (
    <div>
       <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", mt: 10, mb:7 }}
      >
        Lunch Recipes
      </Typography>
      <RecipeList recipes={lunchRecipes}/>
    </div>
  )
}
