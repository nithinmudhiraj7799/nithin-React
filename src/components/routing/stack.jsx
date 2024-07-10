import React, { createContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Setting from './setting'
import Contact from './contact '

import "./stack.css"
import Auto from './default'

export  const ProfileWrapper=createContext( );
const Stack = () => {
  const[profileInfo,setProfileInfo]=useState({
    name:"nithin",
    salary:"20000"
  });
  const[counter,setCounter]=useState(100)

  const ChangeName=(name)=>{
      setProfileInfo({...profileInfo,name:name});
  }
  const setCount=()=>{

    setCounter(counter+100);
  }
  const decrementHandler=()=>{
   if(counter>0){ 
    setCounter(counter-100)
          }
  }
  const resetCounter=()=>{
    setCounter(0)
  }
  return (
    <div>
      <ProfileWrapper.Provider value={{
        profileInfo,
        ChangeName ,
        counter:counter,
        setCount:setCount,
        decrementHandler:decrementHandler,
        resetCounter:resetCounter
        }}>

        <BrowserRouter>
        {/* <Link to="/" >home</Link>
        <Link to="/about" >home</Link>
        <Link to="/setting" >settings</Link>
        <Link to="/contact" >contact</Link> */}
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 1
        </a> */}
        <Link to="/" class="btn btn-warning" style={{margin:5 }} >Home</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 2
        </a> */}
        <Link to="/about" class="btn btn-warning" style={{margin:5}}>About</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 3
        </a> */}
         <Link to="/Setting" class="btn btn-warning" style={{margin:5}}>Setting</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Link 3
        </a> */}
        
        <Link to="/contact" class="btn btn-warning" style={{margin:5}}>Contact</Link>
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
        </ProfileWrapper.Provider>
    </div>
  )
}

export default Stack;