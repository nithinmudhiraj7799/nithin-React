// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';

import axios from "axios"
import { useEffect, useState } from "react"

// function CardData() {
//     const [data, setData] = useState([]);
//     const [details, setDetails]= useState([])
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios("https://api.slingacademy.com/v1/sample-data/photos")
//             .then((res) => {
//                 setData(res.data.photos);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//             axios("https://jsonplaceholder.typicode.com/users")
//             .then((res)=>setDetails(res.data))
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     // console.log(data)
//     // console.log(details)

//   return (
//     <>

//     {
//         details && details.map((el, index)=>(
            
//            <Card style={{ backgroundColor:"#ECEFF1",width: '18rem' , display:"inline-flex", justifyContent:"center", gap:"20px", margin:"2%",alignItems:"center",marginLeft:"3%"}} key={index}>     
//       <Card.Img variant="top" src={data[index]?.url} style={{width:"80%"}}/>
//       <Card.Body >
//         <Card.Title>{el.name}</Card.Title>       
//         <Card.Text>
//             {el.email}
//         {el.company.catchPhrase}
//         </Card.Text>
//       </Card.Body>

//     </Card>
            
//         ))
//     }
// </>
//   );
// }

// export default CardData;



export const DataApi=()=>{
    const[data,setData]=useState([])
    // const [data1,setData1]=useState([])
    useEffect(()=>{
     DataFetching()
    },[])
    const DataFetching=async()=>{
        const response=await axios.get("https://api.slingacademy.com/v1/sample-data/photos")
        console.log(response)
        
        setData(data)
}
    return(
        <>
        <h1>hello</h1>
        {
            data.map((e)=>{
                return(
                   <h1>{e.photos} </h1>
            )
})
        }
        </>

    )
}