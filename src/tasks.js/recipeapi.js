import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeApi = () => {
  const [data, setData] = useState([]);
  const[input,setInput]=useState("")

  useEffect(() => {
    DataHandler();
  }, []);

  const DataHandler = async () => {
    try {
      const response = await axios.get( 'https://api.edamam.com/search?q=pizza&app_id=b9e8503a&app_key=83b35450ff5b69f1fa2bb87856a343dd' );
      if (response.status === 200) {
        console.log('data console');
        console.log(response.data.hits);
        setData(response.data.hits);
      }
    } catch (error) {
      console.log(error);
    }
  };
const handleInputData=(e)=>{
    e.preventDefault()
    setInput(e.target.value)
}

    const filteredData = data.filter((item) => item.recipe.label.toLowerCase().includes(input.toLowerCase()));
    
  return (
    <div>
      <div >recipeApi</div>
      {/* <h1>{input}</h1> */}
      <input type='text' value={input} placeholder='enter any item' onChange={handleInputData}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredData.map((e, index) => {
          const { label, image, source } = e.recipe;
          return (
            <Card key={index} style={{width: '18rem',margin:'10px'}}>
              <Card.Img variant="top" src={image} />
             <Card.Body>
                <Card.Title>{label}</Card.Title>
                <Card.Text>
                  Source: {source}
                </Card.Text>
                <Button variant="primary" >
                  View Recipe &&filter
                </Button>
             </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeApi;
