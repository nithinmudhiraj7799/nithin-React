// import { useState } from "react"

//  export const Weather=()=>{
//     const [city,setCity]=useState("")
//     const [result,setResult]=useState("")

   

//    const inputHandler=(each)=>{
//         setCity(each.target.value)
        
//     }
//    const submitHandler=(e)=>{
//         e.preventDefault()
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80910612dcf7b8881a64531ad282247c`).then(
//             response => response.json()
//         ).then(data=>
          
//             {
//                const kelvin = data.main.temp;
//                const celsius = kelvin-273.15;
              
//                 setResult(Math.round(celsius)+"C")
//                 setCity("")
//             }
            
//         )

//     }

//     return(
//         <div>
//             <div>
//                 <form onSubmit={submitHandler}>
//                 <input type="text" className="form-control" value={city} onChange={inputHandler}/><br/>
//                 <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
//                 </form>
//                 {/* <h1 onClick={submitHandler}>{city}</h1> */}
//                 <h2>{result}</h2>
                
//             </div>
//         </div>
//     )
// }



  