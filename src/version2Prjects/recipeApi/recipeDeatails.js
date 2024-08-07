// import React from 'react'
// import { useParams } from 'react-router-dom'

// const recipeDetails = () => {

//     const{id}=useParams()
//     const {recipe}=
//   return (
//     <div>recipeDetails</div>
//   )
// }

// export default recipeDetails

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from './RecipeApi';
import CustomSpinner from '../../components/Customspinner/CustomSpinner';
// import MyVerticallyCenteredModal from "./modal"

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((rec) => rec.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id, recipes]);

  if (!recipe) {
    return <CustomSpinner />;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      {/* <MyVerticallyCenteredModal/> */}
      <img src={recipe.image} alt={recipe.name} />
      

    </div>
  );
};

export default RecipeDetail;
