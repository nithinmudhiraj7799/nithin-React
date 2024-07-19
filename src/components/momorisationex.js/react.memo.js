// import React from "react";

// import { useEffect, useState } from "react"


//     const Movie=(title,releaseDate)=>{
    
//   return(
//     <div>
//         <div>movie title:{title}</div>
//         <div>release date:{releaseDate}</div>
//     </div>
//   )

      
//     }
//      const MemorizedMOvie=Movie;

//    export  function movieResults({title,views,releaseDate}){
//     return(
//         <div>
//         <MemorizedMOvie title={title} releaseDate={releaseDate}/>
//         movie views:{views}
//         </div>
//     )
//      }
//    export  function App(){
//         const[views,setViews]=useState(0)

//         useEffect(()=>{
//      const hello=setInterval(()=>{
//         setViews(views=>views+Math.floor(Math.random()*10))

//      },1000)
//      return()=> clearInterval (hello)
//         },[views])

//         return(
//             <>
//             <movieResults
//             title="kalki"
//             views={views} 
//             releaseDate="15/02/2024" />

//             </>
//         )
//     }

//     export default Movie;

import React, { useEffect, useMemo, useState } from "react";

const Movie = React.memo(({ title, releaseDate }) => {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
});

export function MovieResults({ title, views, releaseDate }) {
  return (
    <div>
      <Movie title={title} releaseDate={releaseDate} />
      Movie views: {views}
    </div>
  );
}

export function App() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((views) => views + Math.floor(Math.random() * 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const movieCollections=useMemo(()=>{
   
        return views *2;
      
},[views])

  return (
    <>
      <MovieResults title="Kalki" views={views} releaseDate="15/02/2024" />
      <h2>collect for movie:{movieCollections}</h2>
    </>
  );
}

export default App;
