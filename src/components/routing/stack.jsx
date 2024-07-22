import React, { createContext,  useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
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
        <button> <NavLink to="/" >home</NavLink></button>
        <button>  <NavLink to="/about" >home</NavLink></button>
        <button>   <NavLink to="/setting" >settings</NavLink></button>
        <button>  <NavLink to="/contact" >contact</NavLink></button>
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          NavLink 1
        </a> */}
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          NavLink 2
        </a> */}
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          NavLink 3
        </a> */}
         <NavLink to="/Setting">Setting</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          NavLink 3
        </a> */}
        
        <NavLink to="/contact">Contact</NavLink>
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