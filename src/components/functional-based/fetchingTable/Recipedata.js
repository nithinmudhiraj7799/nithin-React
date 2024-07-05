
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "../fetchtable";


function RecipeList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    if (response.status === 200) {
      const recipeList = response.data.recipes;
      setData(recipeList);

      console.log(recipeList);
    }
  };
  return (
    <div>
      {data.length > 0 ? <DataTable data={data} /> : <h1>hello</h1>}
    </div>
  );
}

export default RecipeList;


