
import { useContext } from "react";
import { ContextUsage } from "./useContextExamle";



  const Usage=()=>{
   const {name,mobileNO} =useContext(ContextUsage)
   

   return(
       <>

       <h2>name:{name}</h2>
       <h2>mobile:{mobileNO}</h2>
       </>
   )
}
export default Usage;