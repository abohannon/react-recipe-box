/* global $ */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class App extends React.Component {
  constructor(props) {
    super(props)

    if (!localStorage.state) {
      this.state = {
        allRecipes: [
          {
            title: 'Chicken Tortilla Soup',
            imageUrl: 'http://farm3.static.flickr.com/2218/4287485981_f0423b9814_z.jpg',
            directions: 'In a large saucepan heat the vegetable oil. Add the onions and cook for 2 minutes. Once the onions have softened add the garlic and jalepenos and cook for another minute. Pour the chicken broth, tomatoes and beans into the pot and bring to a boil. Once at a boil lower heat to simmer and add your chicken breasts. Cook the chicken for 20 to 25 minutes. Once chicken is cooked remove from pot. When cool enough to handle shred it and set it aside. Add lime juice and fresh cilantro to the pot. In a serving bowl add a mound of shredded chicken. Ladle soup over chicken and top with a lime wedge, grilled tortilla strips, avocado slices and cheese.',
            ingredients: '2 tablespoons vegetable oil, 1 small onion, diced, 2 tablespoons minced garlic, 2 jalapenos, finely diced, 6 cups low-sodium chicken broth, One 14.5-ounce can fire-roasted diced tomatoes, One 14.5-ounce can black beans, rinsed and drained, 3 chicken breasts, boneless and skinless, 2 limes, juiced, plus wedges for garnish, Salt and freshly ground black pepper, 1 cup roughly chopped fresh cilantro leaves, One 8-inch flour tortilla, grilled, cut into thin strips, 1 avocado, pitted, sliced, 1 cup shredded Monterrey cheese'
          }
        ]
      }
    } else {
      this.state = {
        allRecipes: JSON.parse(localStorage.getItem('state'))
      }
    }

    this.addRecipe = this.addRecipe.bind(this)

  }

  componentWillMount() {
    console.log('Component is mounting...')
  }

  componentDidMount() {
    const newState = [...this.state.allRecipes]
    console.log("Before:", newState[1])
    newState[1].title = "W00t"
    console.log("After:", newState[1])
  }

  addRecipe = (newRecipe) => {
    const allRecipes = [
      ...this.state.allRecipes,
      newRecipe
    ]
    const allRecipesLocal = JSON.stringify(allRecipes);
    localStorage.setItem('state', allRecipesLocal);
    this.setState({allRecipes});
    console.log(this.state.allRecipes)
  }

  // TODO: Create a set state method to handle everything?

  render() {
    return (
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '3vh'
      }}>
        <RecipeModal recipeList={this.state.allRecipes} addRecipe={this.addRecipe}/>
        <RecipeDisplay recipeList={this.state.allRecipes}/>
      </div>
    )
  }
}

const RecipeDisplay = (props) => {
  console.log('props', props)
  const recipeItem = props.recipeList.map((item => (
    <li key={item.title}>
      <div style={{
        backgroundImage: `url(${item.imageUrl})`
      }} className="collapsible-header cover">
        <h4 className="recipe-title">{item.title}</h4>
      </div>
      <div className="collapsible-body">
        <div className="content">
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
            <li>{item.ingredients}</li>
            {/* TODO: Create <li> out of comma separated list */}
          </ul>
        </div>
      </div>
    </li>
  )))

  return (
    <ul className="collapsible" data-collapsible="expandable">
      {recipeItem}
    </ul>
  )
}

const RecipeModal = (props) => {
  console.log('RecipeModal', props.recipeList)

  $(document).ready(() => {
    $('.modal').modal()
  })

  return (
    <div style={{
      textAlign: 'center'
    }}>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal">
        <i className="material-icons right">add</i>Add Recipe</a>
      <RecipeModalInput recipeList={props.recipeList} addRecipe={props.addRecipe} hello={props.hello}/>
    </div>
  )
}

class RecipeModalInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      imageUrl: '',
      directions: '',
      ingredients: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  closeModal = () => {
    $('#modal').modal('close')
  }

  render() {
    return (
      <div id="modal" className="modal bottom-sheet">
        <div className="modal-content">
          <i className="material-icons close-icon" onClick={this.closeModal}>close</i>
          <h4>Add Recipe</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                  <label htmlFor="title">Recipe Title</label>
                </div>

                <div className="input-field col s12">
                  <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange}/>
                  <label htmlFor="recipe-image">Image URL</label>
                </div>

                <div className="input-field col s12">
                  <textarea name="directions" className="materialize-textarea" value={this.state.directions} onChange={this.handleChange}/>
                  <label htmlFor="textarea1">Directions</label>
                </div>

                <div className="input-field col s12">
                  <textarea name="ingredients" className="materialize-textarea" value={this.state.ingredients} onChange={this.handleChange}/>
                  <label htmlFor="textarea2">Ingredients (comma separated)</label>
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Save Recipe</a>
        </div>
      </div>

    )
  }

  // local methods

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({[name]: value})
  }

  handleSubmit() {
    const newRecipe = {
      ...this.state
    }
    this.props.addRecipe(newRecipe)
    // console.log("new addition!", this.props.recipeList);
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#root'))
registerServiceWorker()
