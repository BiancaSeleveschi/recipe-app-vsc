import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { RecipeForm } from "./views/RecipeForm";
import { Home } from "./views/Home";
import TemporaryDrawer from "./views/TemporaryDrawer";
import { Breakfast } from "./views/Breakfast";
import { Lunch } from "./views/Lunch";
import { Dinner } from "./views/Dinner";
import { Snack } from "./views/Snack";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/breakfast" element={<Breakfast />}></Route>
        <Route path="/lunch" element={<Lunch />}></Route>
        <Route path="/dinner" element={<Dinner />}></Route>
        <Route path="/snack" element={<Snack />}></Route>
        <Route path="/recipe-form" element={<RecipeForm />}></Route>
        <Route path="/temporary-drawer" element={<TemporaryDrawer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
