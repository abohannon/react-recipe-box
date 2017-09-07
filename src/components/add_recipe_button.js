import React from 'react';
import PropTypes from 'prop-types';
import RecipeInput from './recipe_input';

const AddRecipeButton = (props) => {
  console.log('AddRecipeButton', props.recipeList);

  return (
    <div style={{
      textAlign: 'center',
    }}
    >
      <a className="waves-effect waves-light btn modal-trigger" href="#modal" style={{ margin: '20px' }}>
        <i className="material-icons right" role="button" tabIndex="0">add</i>Add Recipe</a>
      <RecipeInput
        recipeList={props.recipeList}
        addRecipe={props.addRecipe}
        editRecipe={props.editRecipe}
        editOff={props.editOff}
      />
    </div>
  );
};

AddRecipeButton.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  recipeList: PropTypes.array.isRequired,
  editRecipe: PropTypes.bool.isRequired,
  editOff: PropTypes.func.isRequired,
};

export default AddRecipeButton;
