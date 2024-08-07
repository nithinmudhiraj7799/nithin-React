
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import RecipeList from './UseRecipe'
import RecipeDetail from './recipeDeatails'

const RoutingRecipes = () => {
  return (
    <div>
        {/* <h1>hello</h1> */}
        {/* <BrowserRouter> */}
        <Routes>
         <Route path="/Recipe" Element={<RecipeList/>}/>
         <Route path='/recipe/:id' Element={<RecipeDetail/>}/>
        </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}
export default RoutingRecipes