
import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import RecipeList from './UseRecipe'
// import RecipeDetail from './recipeDeatails'
import Recipe from './recipe'
import Detail from './detail'

const Navigation = () => {
  return (
    <div>
        {/* <BrowserRouter> */}
        <Routes>
         <Route path="/" element={<Recipe/>}/>
         <Route path='/recipe/:id' element={<Detail/>}/>
        </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}
export default Navigation;