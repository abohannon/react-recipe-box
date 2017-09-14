import React from 'react';
import PropTypes from 'prop-types';
import RecipeInput from './recipe_input';

const AddRecipeButton = (props) => {
  console.log('AddRecipeButton props', props.recipeList);

  return (
    <div style={{
      textAlign: 'center',
    }}
    >
      <a className="waves-effect waves-light btn modal-trigger" href="#modal" style={{ margin: '20px' }} onClick={() => props.editOff()}>
        <i className="material-icons right" role="button" tabIndex="0">add</i>Add Recipe</a>
      <RecipeInput
        recipeList={props.recipeList}
        addRecipe={props.addRecipe}
        editRecipe={props.editRecipe}
        editOff={props.editOff}
        editOn={props.editOn}
        deleteRecipe={props.deleteRecipe}
        editTarget={props.editTarget}
      />
    </div>
  );
};

AddRecipeButton.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  recipeList: PropTypes.array.isRequired,
  editRecipe: PropTypes.bool.isRequired,
  editOff: PropTypes.func.isRequired,
  editOn: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  editTarget: PropTypes.number.isRequired,
};

export default AddRecipeButton;
