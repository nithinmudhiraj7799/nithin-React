import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeDetail = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe) {
    return <div>No recipe data available.</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Card style={{ width: '50%' }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.label}</Card.Title>
          <Card.Text>
            <strong>Source:</strong> {recipe.source}
          </Card.Text>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeDetail;
