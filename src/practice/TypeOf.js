import { useState } from "react"




const Types=()=>{
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)

    const CountHandler=()=>{
        return count%2==0?"even":"odd";
    }
    return(
        <div>
        <h1>{count}-{CountHandler()}</h1>
        <input type="number" value={count}  onChange={CountHandler} />
        <button onClick={()=>{setCount(count+1)}}>increment</button>
      
        <h2>{count1}</h2>
        <button onClick={()=>{setCount1(count1+1)}}>decrement</button>
        </div>
    )
}
 export default Types;  


// const Types=()=>{
//     const[count,setCount]=useState(1)
//     const[counter,setCounter]=useState(0)

//     const isEven=()=>{
        
//    return count%2==0?"even":"odd";
         

//  }


//     return(
//         <>
//         <h1>{count}={isEven()}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Count++</button>
//         <h2>{counter}</h2>
//         <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
//         </>
//     )
// }
//  export default Types;