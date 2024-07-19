import axios from "axios"
import { useEffect, useState } from "react"


const DataData=()=>{

   const [data,setData]=useState([])

   useEffect(()=>{
    Fetch()

   },[])
   const Fetch=async()=>{
  const{data,status}=await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys")
    console.log(data)
if(status===200){
    setData(data)
}
   }

    return(
    <>
   <h1> hello</h1>
   <button onClick={Fetch} style={{height:30}}>click me</button>
   {
     data.map((e,id)=>{
        return(
            <div key={id}>
            <h1 >{e.id}</h1>
            <img src={e.url} />
            </div>
        )
    })
   }
    </>
    )
}
export default DataData;