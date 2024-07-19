import { useReducer } from "react"

function Youtube(){

const reducer=(state,action)=>{
    switch(action.type){
        case("increase"):
        return{
            count:state.count+1
        }
        case("decrease"):
        if(state.count>0){
        return{
            count:state.count-1
        }}
        else{
            alert("nagative values does not accept")
        }
       default: return state;
    }
    
}
 const initialState={count:0}

 const[state,dispatch]=useReducer(reducer,initialState)

 return(
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"increase"})}>+1</button>
    <button onClick={()=>dispatch({type:"decrease"})}>-1</button>

    </>
 )
}
export default Youtube;