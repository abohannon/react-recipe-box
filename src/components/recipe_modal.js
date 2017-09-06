import React from 'react'
import RecipeModalInput from './recipe_modal_input'

const RecipeModal = (props) => {
  console.log('RecipeModal', props.recipeList)

  return (
    <div style={{
      textAlign: 'center'
    }}>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal" style={{margin: "20px"}}>
        <i className="material-icons right">add</i>Add Recipe</a>
      <RecipeModalInput recipeList={props.recipeList} addRecipe={props.addRecipe}/>
    </div>
  )
}

export default RecipeModal;
