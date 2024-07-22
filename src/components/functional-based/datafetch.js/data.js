import axios from "axios"
import { useEffect, useState } from "react"

const DataData=()=>{
   const [data,setData]=useState([])
   useEffect(()=>{
    Fetch()

   },[])
   const Fetch=async()=>{ 
const{data,status}=await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys")

if(status===200){
 
    // setData((prevData)=>[...prevData,...data])
    setData(data)
}
   }

    return(
    <>
   <h1> hello</h1>
   <button onClick={
    Fetch} style={{height:30}}>click me</button>
  
   <table className="table table-bordered">
    
  <thead>
    <tr>
      <th>id</th>
      <th>images</th>
     </tr>
    </thead>
    <tbody>
    {
        data.map((e)=>{
            return(
                <>
    <tr>
      <td>{e.id}</td>
      <td >{<img src={e.url } style={{height:300,width:350}}/>}</td>
    </tr>
    </>
  )
        }
        )
    }
  </tbody>
</table>

    </>
    ) 
}
export default DataData;



