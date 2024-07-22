


import { useRef } from "react"


const UnControlledForm=()=>{

  const inputData=useRef("")

  const DataHandler=(e)=>{
         e.preventDefault()
    console.log(inputData.current.value)
  }
  return(
    <>
      <form onSubmit={DataHandler}>
        
        <input type="text" ref={inputData} id="nn" />
           <label htmlFor="nn">Input</label>

         <button type="submit">Submit</button>
      </form>
       <h1>{inputData.current.value}</h1> 

          </>
    
  )
} 
 export default UnControlledForm;
