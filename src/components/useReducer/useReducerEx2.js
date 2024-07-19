import { useReducer } from "react";
const ChocolateBox=(state,action)=>{
    switch(action.type){
        case("BuyChocolate"):
        return{...state,buyChocolate:state.buyChocolate+action.noOfChocolates,totalAvailableChocolate:state.totalAvailableChocolate-action.noOfChocolates}
        case("ReturnChocolate"):
        return{...state,returnChocolate:state.returnChocolate+action.noOfChocolates}
        default : return state;
    }
    };
    const state={
        totalAvailableChocolate:20,
        buyChocolate:1,
        returnChocolate:5
    };
    
    const ChocolateShop=()=>{
    const [currentState,dispatch]=useReducer(ChocolateBox,state)
    
    const BuyChocolateFunction=()=>{
        if( currentState.buyChocolate<21){dispatch({
            type:"BuyChocolate",
            noOfChocolates:1
        })}
        else{
            alert("chocolates over")
        }
    }
    const ReturnChocolateFunction=()=>{
      if(currentState.returnChocolate<5){ dispatch({
        type:"ReturnChocolate",
        noOfChocolates:1
       })}
       else{
        alert("return limit over")
       }
    } 
    
    return<>
    <h1> AVAILABLE CHOCOLATES{currentState.totalAvailableChocolate}</h1>
    <h1> BUY CHOCOLATES{currentState.buyChocolate}</h1>
    <h1>RETURN CHOCOLATES{currentState.returnChocolate}</h1>
    <button   onClick={BuyChocolateFunction} >buyChocolates</button>
    <button onClick={ReturnChocolateFunction}>ReturnChocolates</button>
    </>
    
    
    }
    export default ChocolateShop;