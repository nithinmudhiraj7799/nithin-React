import { useParams } from "react-router-dom"

const Detail=()=>{
    const {id}=useParams()
    return(
        <h1>Hii {id}
        </h1>
    )
}
export default Detail