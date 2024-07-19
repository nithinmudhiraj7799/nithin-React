import { useState } from "react"
import ButtonComponent from "../button/button"


const CallbackFunction=()=>{

    const [age,setAge]=useState(10)
    const[salary,SetSalary]=useState(1000)

    const AgeHandler=()=>{
        setAge(age+1)
    }
    const SalaryHandler=()=>{
        SetSalary(salary+100)
    }

return(
    <>
    <h1>hello</h1>
    <h2>age{age}</h2>
    <h2>salary{salary}</h2>
  <ButtonComponent onClick={AgeHandler} text={"increase"}/>
  <ButtonComponent onClick={SalaryHandler} text={"increase"}/>

    </>
)
}
 export default CallbackFunction;