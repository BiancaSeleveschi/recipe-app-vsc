import React from "react";
import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import { styled } from "@mui/system";

const EventGrid = styled("div")({
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
});
export const RecipeList = ({recipes}) => {
  // const recipes = useSelector((state) => state.recipes);
  return (
    <div>
      <EventGrid sx={{ p: 5 }}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <RecipeItem recipe={recipe} />
          </div>
        ))}
      </EventGrid>
    </div>
  );
};
