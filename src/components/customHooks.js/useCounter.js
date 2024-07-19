import { useState } from "react"


const UseCounter=(initialValue,scale)=>{
    const[value,setValue]=useState(initialValue)
    const incrementHandler=()=>{
        setValue(value+scale)
    }
    const decrementHandler=()=>{
       if(value>0){ setValue(value-scale)}
    }
    const resetHandler=()=>{
        setValue(0)
    }
    return[value,incrementHandler,decrementHandler,resetHandler]
}

export default UseCounter;