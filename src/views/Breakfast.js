import React from 'react'
import { RecipeList } from '../components/RecipeList'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export const Breakfast = () => {
  const recipes = useSelector((state) => state.recipes);
  const breakfastRecipes = recipes.filter((recipe) => recipe.category === 'Breakfast')
  return (
    <div>
       <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", mt: 10, mb:7 }}
      >
        Breakfast Recipes
      </Typography>
      <RecipeList recipes={breakfastRecipes}/>
    </div>
  )
}
