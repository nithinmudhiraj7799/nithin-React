
import React from "react";
import { useNavigate } from "react-router-dom";

function Auto(){
const navigate=useNavigate();
const HandleRedirection=()=>{
    const isRedirect=true;
    if(isRedirect){
    navigate("/");
    }
    else{

    }
}
    return(
        <>
        <h1>this is a default component</h1>
        <button onClick={HandleRedirection} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">back to Home</button>
        </>
    )
}
export default Auto;