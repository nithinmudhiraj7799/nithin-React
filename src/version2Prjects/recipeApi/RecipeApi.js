

import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider=({children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    FetchRecipes();
  }, []);
 
  const FetchRecipes =async()=> {
    setLoading(true);
    try {
      const { data, status } = await axios.get('https://dummyjson.com/recipes');
      console.log(data.recipes)
      if (status === 200) {
        setRecipes(data.recipes);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, loading }}>
      {children}
    </RecipeContext.Provider>
  );
};
