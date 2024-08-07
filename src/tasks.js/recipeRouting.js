import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipeApi from './RecipeApi.js';
import RecipeDetail from './RecipeDetail.js'; 

const NavigateRecipe = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeApi />} />
      <Route path="/recipe/:category" element={<RecipeDetail />} />
    </Routes>
  );
};

export default NavigateRecipe;