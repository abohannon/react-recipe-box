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
        <i className="material-icons right">add</i>Add Recipe</a>
      <RecipeInput recipeList={props.recipeList} addRecipe={props.addRecipe} />
    </div>
  );
};

AddRecipeButton.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  recipeList: PropTypes.array.isRequired,
};

export default AddRecipeButton;
