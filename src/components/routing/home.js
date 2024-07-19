
import React from "react";
import ButtonComponent from "../button/button";
import addProfileHoc from "../Hoc/logging";
import EmployeeScreen from "../memorization/reactmomoemployee";
// import ChocolateShop from "../useReducer/useReducerEx2";
// import ReducerFunctionEx2 from "../useReducer/useReducerEx2";


function Home(props){
    console.log(props,"from HomeScreen")
    return(
        <>
        <h1>this is a Home component</h1>
        <EmployeeScreen/>
        {/* <ReducerFunctionEx2/>
    <h1>good morning {props.data.name}</h1>
       <ChocolateShop/>
       {
        [1,2,3,4].map((each)=>{
            return(
                <ButtonComponent/>
            )
        }
        )
       } */}
        </>
      
    )
}
export default addProfileHoc( Home);