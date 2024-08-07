import { useNavigate } from "react-router-dom"

const Recipe=()=>{
    const navigate=useNavigate()
  
    return(
        <>
{
    [1,2,3,4].map(each=>{
        return(
            <button onClick={()=>{navigate(`/recipe/${each}`)}}>{each}</button>
        )
    })
}
        </>
    )
}
export default Recipe;