import React from 'react'
import { RecipeList } from '../components/RecipeList'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export const Dinner = () => {
  const recipes = useSelector((state) => state.recipes);
  const dinnerRecipes = recipes.filter((recipe) => recipe.category === 'Dinner')
  return (
    <div>
       <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", mt: 10, mb:7 }}
      >
        Dinner Recipes
      </Typography>
      <RecipeList recipes={dinnerRecipes}/>
    </div>
  )
}
