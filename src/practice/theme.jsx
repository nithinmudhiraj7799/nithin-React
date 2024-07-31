import { useRef, useState } from "react"

const Theme=()=>{
  const[bg,setBg]=useState("red")
  const InputRef=useRef(null)

  const ColorHandler=(event)=>{
    event.preventDefault()
   const color=InputRef.current.value
    setBg(color)
    InputRef.current.value=""
  }
  return(
    <>
    <form>
      <input type="text" ref={InputRef}/>
      <div style={{backgroundColor:bg,height:"500px"}}>
      <button onClick={ColorHandler}>Change Color</button>
      </div>
    </form>
    </>
  )
}
 export default Theme;

