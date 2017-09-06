import React from 'react';
import PropTypes from 'prop-types';

const RecipeDisplay = (props) => {
  console.log('props', props);

  const recipeItem = props.recipeList.map((recipe, recipeIndex) => {
    const recipeIngredients = recipe.ingredients.split(',');
    const listIngredients = recipeIngredients.map((ingredient, ingredientIndex) => (
      <li key={ingredientIndex}>{ingredient}</li>
    ));
    return (
      <li key={recipeIndex}>
        <div
          style={{ backgroundImage: `url(${recipe.imageUrl})` }}
          className="collapsible-header cover"
        >
          <h4 className="recipe-title">{recipe.title}</h4>
        </div>
        <div className="collapsible-body">
          <div className="content">
            <i className="material-icons icon modal-trigger" role="button" tabIndex="0" href="#modal" onClick={() => console.log(recipeIndex)}>create</i>
            <div className="content-top">
              <h5>Directions</h5>
              <hr />
            </div>
            <p>{recipe.directions}</p>
          </div>
          <div className="content">
            <div className="content-top">
              <h5>Ingredients</h5>
              <hr />
            </div>
            <ul className="recipe-ingredients">
              {listIngredients}
            </ul>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className="collapsible" data-collapsible="expandable">
      {recipeItem}
    </ul>
  );
};

RecipeDisplay.propTypes = {
  recipeList: PropTypes.array.isRequired,
};

export default RecipeDisplay;
