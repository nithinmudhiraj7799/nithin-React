

import {  useState } from "react"


const api={
    key:"6a6adf96f7dc4efd5229441f145ec3f0 ",
    base:"https://api.openweathermap.org/data/2.5/"
   }

function Searching(){
    const[search,setSearch]=useState("")
    const [weather,setWeather]=useState({})
    
   const SearchHandler=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>setWeather(result));
    
    setSearch("")
    }
    const main={
      border:"2px solid",
      width:"550px",
      display:"grid",
      justifyContent:"center",
      alignItems:"center"



    }
    return(
      <div style={main} >
      <div className="content" >
      <h1>weather app</h1>
    <div>
        <input type="text" placeholder="enter your city" onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <button  onClick={SearchHandler}>click</button>
    </div>
        <h2>india</h2>
        <p>{weather.name}</p>
        {weather.main&& <h3>{weather.main.temp}°C</h3>}  
   </div>
     </div>
    )
}
 export default Searching;