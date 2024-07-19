import axios from "axios"
import { useEffect, useState } from "react"




 export const UseData=()=>{

    const[data,setData]=useState([]);

   useEffect(()=>{
   DataFetching()
    },[])

    const DataFetching=async()=>{
  try{  const response=await axios.get("https://fakestoreapi.com/products?limit=5")
    if(response.status==200){
        setData(response.data)
    }
  }
  catch(error){
    console.log(error)
  }
    }


    return [data];
}
