import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


const Fetch=()=>{
 
    const [data,setData]=useState([])
    // const [loading,setLoading]=useState(true)~
    
    useEffect(()=>{
    DataHandler()
    },[])

    const DataHandler=async()=>{
      try{ 
        const Response=await axios.get("https://jsonplaceholder.typicode.com/users")
       const data1=Response.data
       console.log(data1)
      setData(data1)
      }
      catch(error){
        console.log(error)
      }
    }
return(
<>



    {/* <>
      {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          
          {
   data.map((each)=>{
    const{id,name,email,username,address:{street,city}}=each
        return(
          <>
          <ListGroup.Item>{`${id} name: ${name} -- userName:${username} --- email:${email}  ${street}`}</ListGroup.Item>
       
          <ListGroup.Item>{name}</ListGroup.Item>
          <ListGroup.Item>{username}</ListGroup.Item>
          <ListGroup.Item>{email}</ListGroup.Item>
          <ListGroup.Item>{email}</ListGroup.Item>
          </>
        )
      })
      }
        </ListGroup>
      ))}
    </>
    */}
  
  

<div>
<ListGroup defaultActiveKey="#link1">
{
   data.map((each)=>{
    const{id,name,email,username,address:{street,city}}=each
        return(
          <>
      <ListGroup.Item action href="#link1">
      
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
      {`${id} name: ${name} -- userName:${username} --- email:${email}  ${street}`}
      </ListGroup.Item>
      {/* <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item> */}
      </>
        )
      })
      }
    </ListGroup>

</div>




</>
)
}
export default Fetch;