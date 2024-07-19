import React, { createContext,  useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Setting from './setting'
import Contact from './contact '

import "./stack.css"
import Auto from './default'
// import ReducerFunction from '../useReducer/useReducer'



const profileWrapper=createContext()

const Stack = () => {
  const[profile,setProfile]=useState({
    name:"naveen",
    salary:2000
  })
  return (
    <div>
      <profileWrapper.Provider value={
        profile
      }/>
      
      
        <BrowserRouter>
        <Link to="/" >home</Link>
        <Link to="/about" >home</Link>
        <Link to="/setting" >settings</Link>
        <Link to="/contact" >contact</Link>
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 1
        </a> */}
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 2
        </a> */}
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 3
        </a> */}
         <Link to="/Setting">Setting</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 3
        </a> */}
        
        <Link to="/contact">Contact</Link>
      </li>

    </ul>
  </div>
</nav>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/:location/:restaurantId/info' element={<Default/>}/> */}
            <Route path="*" element={<Auto/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Stack;