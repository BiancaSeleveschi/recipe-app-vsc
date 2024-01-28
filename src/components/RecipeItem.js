import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Divider } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeItem({ recipe }) {
  const [expanded, setExpanded] = React.useState(false);
  const ingredientsArray = recipe.ingredients.split(";").filter(Boolean);
  const capitalizedRecipeName =
    recipe.name.charAt(0).toUpperCase() + recipe.name.slice(1);
  const [showAll, setShowAll] = React.useState(false);
  const maxVisibleItems = 7;

  const visibleIngredients = showAll
    ? ingredientsArray
    : ingredientsArray.slice(0, maxVisibleItems);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let avatarBackgroundColor;
  let cardBackgroundColor;
  switch (recipe.category) {
    case "Breakfast":
      avatarBackgroundColor = "red";
      cardBackgroundColor = " rgb(235, 172, 174)";
      break;
    case "Lunch":
      avatarBackgroundColor = "rgb(16, 124, 239)";
      cardBackgroundColor = " rgb(160, 202, 247);      ";
      break;
    case "Dinner":
      avatarBackgroundColor = "green";
      cardBackgroundColor = " rgb(176, 230, 176); ";
      break;
    case "Snack":
      avatarBackgroundColor = " rgb(251, 210, 44)";
      cardBackgroundColor = "rgb(238, 225, 172);  ";
      break;
    default:
      avatarBackgroundColor = "grey";
      cardBackgroundColor = "grey";
  }
  return (
    <Card
      sx={{ maxWidth: 345, minHeight: "100%", background: cardBackgroundColor }}
    >
      <CardHeader
        sx={{ height: 55 }}
        avatar={
          <Avatar sx={{ bgcolor: avatarBackgroundColor }} aria-label="recipe">
            {recipe.category[0]}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={capitalizedRecipeName}
        titleTypographyProps={{ fontSize: 16, fontWeight: "bold" || "inherit" }}
        subheader={
          <Typography variant="body2" color="text.secondary">
            Calories:
            <strong style={{ fontSize: 14 }}> {recipe.calories}</strong>
          </Typography>
        }
      />
      <Divider />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent
        sx={{height: 190, overflow: showAll && "auto"  }}
      >
        <Typography variant="body2" color="text.secondary">
          <ul>
            {visibleIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
          {ingredientsArray.length > maxVisibleItems && (
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          style={{ alignSelf: "flex-end", marginBottom: 8, marginRight: 8 }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method of preparation:</Typography>
          <Typography paragraph>{recipe.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
