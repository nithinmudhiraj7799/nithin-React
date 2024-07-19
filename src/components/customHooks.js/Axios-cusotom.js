import axios from "axios"
import { useEffect, useState } from "react"





const UseAxios=(Url="https://fakestoreapi.com/products")=>{

const[data,setData]=useState([])
const[error,setError]=useState(null)
const[loading,setLoading]=useState(true)
    useEffect(()=>{
   FetchData()
    },[]);

const FetchData=async()=>{
    try{
  const  {data,status}=await axios.get(Url)
  if(status===200){
  setData(data);
   }
}
catch(Error){
    setError(Error)
 console.log(Error);   

}finally{
    setLoading(false)
} 
}
return[data,error,loading]
}
export default UseAxios;


