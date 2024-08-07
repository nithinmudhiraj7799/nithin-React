import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomSpinner from '../../components/Customspinner/CustomSpinner';
import { RecipeContext } from './RecipeApi';
import { useContext } from 'react';

function MyVerticallyCenteredModal(props) {
    const { recipes, loading } =useContext(RecipeContext);
    if(loading){
        <CustomSpinner/>
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <h4 style={{display:"flex",justifyContent:"center",}}>recipe details</h4>
       {
          <div >  {recipes.map((recipe, index) => {
            return(
                <div style={{display:"flex",justifyContent:"center"}}>
            <div key={index} className='box'>
          
               <img style={{height: 200, width: 200}}src={recipe.image} alt={recipe.name} />
               <h1>{recipe.name}</h1> 
               <h1>{recipe.price}</h1>
             </div>
             </div>
             )})}
             </div>
       }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal