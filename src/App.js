import "./App.css";
import { RecipeList } from "./Components/RecipeList";
import { Route, Routes } from "react-router-dom";
import { Details } from "./Components/Details";
import { Search } from "./Components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchRecipe, setSearchRecipe] = useState("chicken");
  const getSearch = (name) => {
    setSearchRecipe(name);
  };
  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const res = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=milk&app_id=bc822561&app_key=37913a344c6d8dfde802b6435efbad31
          `
          // `https://api.edamam.com/api/recipes/v2?type=public&q=${searchRecipe}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );
        // console.log(res.data.hits)
        setList(res.data.hits);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRecipes();
  }, [searchRecipe]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Search getSearch={getSearch} searchRecipe={searchRecipe} />
              <RecipeList list={list} />
            </div>
          }
        />
        <Route path="/details/:idrecipe" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
