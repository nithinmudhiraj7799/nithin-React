import {  useState } from "react";

const Form=()=>{

    const[form,setForm]=useState()

  const[newForm,setNewForm]=useState()

    const DataF=(e)=>{
        // e.preventDefault()
   setForm(e.target.value)   
// console.log(form)
    }
    const DataHandler=(e)=>{
        e.preventDefault()
        setNewForm(form)
    }
    return(
        <>
       
<form onSubmit={DataHandler}>
  <label htmlFor="username">Username:{newForm}</label>
  <br />
  <input type="text" id="username" name="username"   onChange={DataF}/>
  <br />
  <label htmlFor="pwd">Password:</label>
  <br />
  <input type="password" id="pwd" name="pwd"  onChange={DataF} />
  <br/>
 <button type="submit" >submit</button>
</form>
    <h1 >{newForm}</h1>
  
        </>
    )
}
export default Form;