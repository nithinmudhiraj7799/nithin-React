// import {  useState } from "react";
// // import WetherAppUi from "./wetherUi";
// // import axios from "axios";
// // import { get } from "prompt";    
// const api={
//      YOUR_API_KEY:"80910612dcf7b8881a64531ad282247c",
//     name:"https://api.openweathermap.org/data/2.5/"





// import { useState } from "react";


   
// }

// function WetherApp(){
//     const [wether,setWether]=useState("")
//     // const[search,setSearch]=useState({})
//    const  handleSearch=()=>{
//         // console.log("handle search!")
//         console.log(wether);
//         fetch(`${api.city}&appid=${api.YOUR_API_KEY}&units=metric${wether}`)
//         .then((e)=>e.json())
//         .then((result)=>{console(result)})
        
//         // console.log(result)
//     }

  


//     // useEffect(()=>{
//     //     const apiData=async()=>{
        
//     //         const response=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=$")
//     //         const Data=await response.json()
//     //         // if()
//     //          setWether(Data)
//     //         console.log(Data)
//     //         // setWether(wether.data.response)      
//     //       }
//     //       apiData();
//     // },[])
     

//     return(
//       <>
//        {/* <WetherAppUi wether={wether}/> */}
//        <div style={{display:"grid", justifyContent:"center", alignItems:"center", padding:200}}>
//         <div style={{border:"2px ridge ", height:"auto", width:250, display:"grid", justifyContent:"center", alignItems:"center" }}>
//         <h1>WetherApp</h1>
//         <div>
//         <input type="text" placeholder="enter a city" name="nn" id="nn" onChange={(e)=>setWether(e.target.value)}/>
//         {/* <label for="nn" />  */}
//         <button onClick={handleSearch}>click</button>
//         </div>
      
//         <p>{wether}</p>
//         <h1>weter report</h1>
        
//         </div>
//         </div>

//       </>
//     )
// }
// export default WetherApp;

// const api={
//     key:"80910612dcf7b8881a64531ad282247c",
//     name:"https://api.openweathermap.org/data/2.5/weather?q="
// }



// function Searching(){
//     const[search,setSearch]=useState("")
//     // const[weather,setWether]=useState({})
// const SearchHandle=()=>{
//     // console.log("search!")
//     // console.log(search)
//     fetch(`${api.name}&appid=${api.key}&units=metric${search}`)
//     // .then((e)=>e.json())
//     // .then((result)=>{ setWether(result)})
// //    .then((result)=>{console.log(result)}) 
// // .then((result)=>{ setWether(result)})
// .then((e)=>e.json())
//  .then((result)=>{console.log(result)}) 
// }

//     return(
//      <>
//      <div>
//         <div>
//             <h1>wether app</h1>
//             <input type="text" placeholder="enter a city"onChange={(e)=>setSearch(e.target.value)}/>
//             <button onClick={SearchHandle}>click</button>
//         </div>
//         <h2>{search}</h2>
//      </div>
//      </>
//     )
// }
// export default Searching;


// const api = {
//     key: "80910612dcf7b8881a64531ad282247c",
//     base: "https://api.openweathermap.org/data/2.5/"
//   };

// function Searching(){
//     const[search,setSearch]=useState("");
//     const [weather,setWether]=useState({})

//     const searchHandler=()=>{
//         fetch(`${api.base}&appid=${api.key}&units=metric${search}`)
//         .then(res=>res.json())
//         .then(result=>{
//             setWether(result)
      
//         }
//         )
//         // console.log("search !")                              
//         // console.log(search)
//     }
//     return(
//         <div>
//             <header>
//                {/* <Header/> */}
//                 <h1>weather app</h1>
//                 {/* <search/> */}
//                 <div>
//                 <input type="text"placeholder="enter your city" onChange={(e)=>setSearch(e.target.value)}/>
//                 <button onClick={searchHandler}>search</button>
//                 </div>
//                 {/* location */}
//                 <p>india</p>
//                 {/* city */}
//                 <p>{weather.name}</p>
//                 {/* temporature */}
//                 {/* <h3>{weather.main.temp}</h3> */}
//                 <p>32 f  </p>

//             </header>
//         </div>
//     )
// }
// export default Searching;
// import React, { useState } from 'react';



import {  useState } from "react"

const api={
    key:"6a6adf96f7dc4efd5229441f145ec3f0 ",
    base:"https://api.openweathermap.org/data/2.5/"
   }

function Searching(){
    const[search,setSearch]=useState("")
    const [weather,setWeather]=useState({})
    
   const SearchHandler=()=>{
    // console.log("search!")
    // console.log(search)
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>setWeather(result));
    
    setSearch("")
    }
    return(
<div style={{display:"grid",justifyContent:"center",alignItems:"center"}}>

    <div style={{border:"2px solid" ,height:350 ,width:500 ,margin:50,display:"grid", justifyContent:"center"}}>

       <h1>weather app</h1>
    <div>
        <input type="text" placeholder="enter your city" onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <button  onClick={SearchHandler}>click</button>
    </div>
    <h2>india</h2>
    <p>{weather.name}</p>
  {weather.main&& <h3>{weather.main.temp}°C</h3>}
  
  {/* {weather.weather && <p>({weather.weather[0].description})</p>} */}

 </div>
   </div>
    )
}
 export default Searching;