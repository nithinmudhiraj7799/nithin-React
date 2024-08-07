
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutingData from './RoutingData'
import RoutingDetails from './RoutingDetails'

const RoutingPractice1 = () => {
  return (

    <div>
        <Routes>
            <Route path='/' element={<RoutingData/>}/>
            <Route path='/num/:id' element={<RoutingDetails/>}/>

        </Routes>
    </div>
  )
}

export default RoutingPractice1