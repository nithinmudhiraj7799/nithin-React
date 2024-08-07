import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './recipe.css';
import { RecipeContext } from './RecipeApi';
import CustomSpinner from '../../components/Customspinner/CustomSpinner';
import { Modal } from 'react-bootstrap';

const RecipeList = () => {
  const { recipes, loading } = useContext(RecipeContext);
  const [modalShow, setModalShow] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  if (loading) {
    return <CustomSpinner />;
  }

  const handleShow = (recipe) => {
    setCurrentRecipe(recipe);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
    setCurrentRecipe(null);
  };

  return (
    <>
      <div className='main'>
        {recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <div key={index} className='box'>
              <img style={{ height: 200, width: 200 }} src={recipe.image} alt={recipe.name} />
              <h1>{recipe.name}</h1>
              <Button variant="primary" onClick={() => handleShow(recipe)}>
                See More
              </Button>
            </div>
          ))
        }
      </div>

      {modalShow && (
        <Modal
          show={modalShow}
          onHide={handleClose}
          className="model_box modal-dialog modal-dialog-centered modal-dialog-scrollable"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Ingredients</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            {currentRecipe && (
              <ul>
                {currentRecipe.instructions.map((instruction, id) => <li key={id}>{instruction}</li>)}
              </ul>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default RecipeList;
