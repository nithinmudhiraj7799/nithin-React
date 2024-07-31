import User from "./props";

const Name=(props)=>{
   
    const{Name}=props
    
    return(
        <>
       
       <h1>hello:{Name}</h1>
      <User/>
        </>
    )
} 
export default Name;