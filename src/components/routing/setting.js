import React, { useContext } from "react";
import { ProfileWrapper } from "./stack";
// import ButtonComponent from "../button/button";
function Setting(){
   const dataShared= useContext(ProfileWrapper);
   const changeCount=()=>{
     dataShared.setCount();
   }
   const decrementHandler=()=>{
      dataShared.decrementHandler();
   }
   const resetCount=()=>{
      dataShared.resetCounter()
   }
    return(
        <>
        <h1>welcome to setting screen Current count    {dataShared.counter}</h1>
        <button text={"increment"} onClick={changeCount} style={{backgroundColor:"green", color:"whitesmoke", padding:5, margin:5}}>click me</button>
        <button text={"decrement"} onClick={decrementHandler} style={{backgroundColor:"red", color:"whitesmoke", padding:5, margin:5}}>click me</button>
        <button text={"reset"} onClick={resetCount} style={{backgroundColor:"purple", color:"whitesmoke", padding:5, margin:5}}>click me</button>


        </>
    )
}
export default Setting;