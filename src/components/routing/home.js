
import React from "react";
import ButtonComponent from "../button/button";
function Home(){
    return(
        <>
        <h1>this is a Home component</h1>
       {
        [1,2,3,4].map((each)=>{
            return(
                <ButtonComponent/>
            )
        }
        )
       }
        </>
      
    )
}
export default Home;