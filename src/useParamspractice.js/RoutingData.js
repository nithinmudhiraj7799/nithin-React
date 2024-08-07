import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoutingData = () => {
 const Navigate=useNavigate()
  return (
    <>
   {
    [1,2,3,4].map(e=>{
        return(
            <>
            <button onClick={()=>{Navigate(`/num/${e}`)}}>{e}</button>
            </>
        )
    })
   }
   </>
  )
}

export default RoutingData;