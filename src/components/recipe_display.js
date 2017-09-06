import React from 'react'

const RecipeDisplay = (props) => {
  console.log('props', props)

  const recipeItem = props.recipeList.map((item, i) => {
    const recipeIngredients = item.ingredients.split(',');
    const listIngredients = recipeIngredients.map((item, i) => {
      return (
        <li key={i}>{item}</li>
      )
    });
    return (
      <li key={i}>
        <div
          style={{backgroundImage: `url(${item.imageUrl})`}}
        className="collapsible-header cover">
          <h4 className="recipe-title">{item.title}</h4>
        </div>
        <div className="collapsible-body">
          <div className="content">
            <i className="material-icons icon modal-trigger" href="#modal" onClick={() => console.log(i)}>create</i>
            <div className="content-top">
              <h5>Directions</h5>
              <hr/>
            </div>
            <p>{item.directions}</p>
          </div>
          <div className="content">
            <div className="content-top">
              <h5>Ingredients</h5>
              <hr/>
            </div>
            <ul className="recipe-ingredients">
              {listIngredients}
            </ul>
          </div>
        </div>
      </li>
    )
  })

  return (
    <ul className="collapsible" data-collapsible="expandable">
      {recipeItem}
    </ul>
  )
}

export default RecipeDisplay;
