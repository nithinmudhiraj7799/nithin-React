import axios from "axios";
import { useEffect, useState } from "react";



const[Countries,setCountries]=useState([])


export const Country=()=>{
    useEffect(()=>{
        fetching()
    },[])
    async function fetching(){
       const res=await axios.get("https://restcountries.com/v3.1/all")
       console.log(res)
       const result=setCountries(Countries)
       console.log(result)
        // getData(data)
    }
  
  const getData=(Data)=>{
    return(Data.map((e)=>e.name.official))
  };
 
    
    return(
        <>
      <h1>good afternoon</h1>

        </>
    )
}