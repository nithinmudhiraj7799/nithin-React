import { Table } from "react-bootstrap";

function DataTable(prop){
  const{data}=prop;
  console.log(data)
    return(
        <>
        <Table className="table" >
  <thead>
    <tr>
      <th>id</th>
      <th>recipeName</th>
      <th>image</th>
      <th>ingredients</th>
      <th>instructions</th>
    </tr>
  </thead>
  <tbody>
  {
    data.map((eachRecipe)=>{
      const {id,name,image,ingredients,instructions}=eachRecipe
      return(
        <>
        {/* <>{eachRecipe}</> */}
        <tr>
          <td>{id}</td> 
          <td>{name}</td>  
          <td><img src={image} width={200} height={200} alt="name"></img></td>     
          <td>{ingredients.map((eachIngredients,index)=>{
            return(<p>{`${index+1}${eachIngredients}`}</p>)
          })}</td>     
          <td>{instructions.map((eachInstructions,index)=>
          {
            return(<p>{`${index+1}${eachInstructions}`}</p>)
          })}</td>              
          </tr>
          </>
      )
    })
  }
  
   
  </tbody>
</Table>

        </>
    )
}
export default DataTable;