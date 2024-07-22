import axios from "axios"
import { useEffect, useState } from "react"


export const ApiData=()=>{

const [data,setData]=useState([])

useEffect(()=>{
DataFetch()
},[])
const DataFetch=async()=>{
  const {data,status}=await axios.get("https://jsonplaceholder.typicode.com/users")
  console.log(data)
  if(status===200){
    setData(data)
  }
}

  return(
    <>
    <h1>hello</h1>
    </>
  )
}