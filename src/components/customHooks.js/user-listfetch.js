import UseAxios from "./Axios-cusotom"




const USerListFetch=()=>{
    
      const[Users,error,loading] =UseAxios("https://fakestoreapi.com/users")
  if(loading){
  return  <h1>welcome please </h1>
  }
  if(error){
    return<h4>something went Wrong, please try again later</h4>
  }

      return(<> 
         <div>UserList</div>
         {
            Users.map(each=>{
                return(
                    <>
                    <h2>{each.username}</h2>
                    </>
                )
            })
         }
      </>)
}
 export default USerListFetch;
