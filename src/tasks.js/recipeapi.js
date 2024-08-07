import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recipe.css';
import { useNavigate } from 'react-router-dom';
import CustomSpinner from '../components/Customspinner/CustomSpinner';

const RecipeApi = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    DataHandler();
  }, []);

  const DataHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${input}&app_id=b9e8503a&app_key=83b35450ff5b69f1fa2bb87856a343dd`);
      if (response.status === 200) {
        setData(response.data.hits);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputData = (e) => {
    setInput(e.target.value);
  };

  const filteredData = data.filter((item) => item.recipe.label.toLowerCase().includes(input.toLowerCase()));

  if (loading) {
    return <div className='spinner'><CustomSpinner /></div>;
  }

  return (
    <div>
      <div className='main'>Recipe API</div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <input type='text' value={input} placeholder='Enter any item' onChange={handleInputData} />
        <button onClick={DataHandler}>Search</button>
      </div>

      <div className='Card'>
        {filteredData.map((e, index) => {
          const { label, image, source } = e.recipe;
          return (
            <Card key={index} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img 
                variant="top" 
                src={image} 
                onClick={() => navigate(`/recipe/${index}`, { state: { recipe: e.recipe } })} 
                style={{ cursor: 'pointer' }} 
              />
              <Card.Body>
                <Card.Title>{label}</Card.Title>
                <Card.Text>
                  Source: {source}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/recipe/${index}`, { state: { recipe: e.recipe } })}>
                  View Recipe
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
