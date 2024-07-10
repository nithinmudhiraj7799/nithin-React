
import React, { useContext } from "react";
import { ProfileWrapper } from "./stack";
// import ButtonComponent from "../button/button";
function Home(){
   const sharedData= useContext(ProfileWrapper);
   console.log(sharedData,"sheredData")
    return(
        <>
        <h1>welcome to Home component {sharedData.profileInfo.name} {sharedData.profileInfo.salary}</h1>
      <h4>{sharedData.counter}</h4>
        </>
      
    )
}
export default Home;