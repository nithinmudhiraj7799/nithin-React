import React from "react";
function Heading1(prop){
    console.log("hii")
   
    return(
        <h1>heading1</h1>
    )
}
export default React.memo (Heading1);