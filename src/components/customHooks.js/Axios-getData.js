

import UseAxios from "./Axios-cusotom"

const AxiosDataFetching=()=>{
    const[data,error,loading]=UseAxios()
    const[categories,catagoriesError,categoriesLoading]=UseAxios("https://fakestoreapi.com/products/categories")
    if(loading){
        return(
            <h1>loading... please wait ....</h1>
        )  
    }
    if(error){
        <h1>something went wrong please try again</h1>
    }
    return(
        <>
        <h1>data Fetching</h1>
        {
        data.map(each=>{
            return(
                <>
                <h2>{each.title}</h2>
                </>
            )
        })
        }
        {
            categories.map(eachCategory=>{
                return(
                <>
              <p> {eachCategory}</p> 
                </>
                )
            })
        }
        </>
    )
} 
export default AxiosDataFetching;