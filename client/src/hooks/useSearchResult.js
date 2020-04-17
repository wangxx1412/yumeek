import { useEffect, useState } from "react";
import axios from "axios";
import recipesDataHelper from "../helper/recipesDataHelper";

const useSearchResult = () => {
  const [searchResult, setSearchResult] = useState(
    localStorage.getItem("searchResult")
  );

  const appInfo = `&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=100`;
  const apiBaseURL = `https://api.edamam.com/search?q=`;

  useEffect(() => {
    if (!localStorage.getItem("searchResult")) {
      const recipeList = [
        "chicken",
        "beef",
        "fish",
        "pepper",
        "carrot",
        "paste",
        "french fries",
        "ice cream",
        "bread",
        "pancakes",
        "burger",
        "pizza",
        "appal pie",
        "bagel",
      ];
      const randomRecipe =
        recipeList[Math.floor(Math.random() * recipeList.length)];
      axios.get(apiBaseURL + randomRecipe + appInfo).then((response) => {
        setSearchResult(JSON.stringify(recipesDataHelper(response)));
        localStorage.setItem(
          "searchResult",
          JSON.stringify(recipesDataHelper(response))
        );
      });
    }
  }, []);

  const handleSearch = (value, tags) => {
    const tagsArr = [];
    for (let tag in tags) {
      tags[tag] && tagsArr.push(`health=${tag}`);
    }
    const healthTags = tagsArr.length !== 0 ? `&${tagsArr.join("&")}` : "";

    axios.get(apiBaseURL + value + appInfo + healthTags).then((response) => {
      setSearchResult(JSON.stringify(recipesDataHelper(response)));
      localStorage.setItem(
        "searchResult",
        JSON.stringify(recipesDataHelper(response))
      );
    });
  };

  return { searchResult: JSON.parse(searchResult), handleSearch };
};

export default useSearchResult;
