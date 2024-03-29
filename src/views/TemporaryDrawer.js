import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    const isMenuIconClick =
    event.target.tagName === "BUTTON" && event.target.textContent === "MenuIcon";

  // Open the drawer only if the MenuIcon button is clicked
  if (isMenuIconClick) {
    setState({ ...state, [anchor]: open });
  }

  };
  const navigateTo = (name) => {
    const path = `/${name.toLowerCase().replace(/\s+/g, "-")}`;
    navigate(path);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Recipe Form"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigateTo(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>{" "}
      <Divider />
      <List>
        {["Breakfast", "Lunch", "Dinner", "Snack"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigateTo(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
