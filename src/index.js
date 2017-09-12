/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import RecipeDisplay from './components/recipe_display';
import AddRecipeButton from './components/add_recipe_button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRecipes: [
        {
          title: 'Chicken Tortilla Soup',
          imageUrl: 'http://farm3.static.flickr.com/2218/4287485981_f0423b9814_z.jpg',
          directions: 'In a large saucepan heat the vegetable oil. Add the onions and cook for 2 minutes. Once the onions have softened add the garlic and jalepenos and cook for another minute. Pour the chicken broth, tomatoes and beans into the pot and bring to a boil. Once at a boil lower heat to simmer and add your chicken breasts. Cook the chicken for 20 to 25 minutes. Once chicken is cooked remove from pot. When cool enough to handle shred it and set it aside. Add lime juice and fresh cilantro to the pot. In a serving bowl add a mound of shredded chicken. Ladle soup over chicken and top with a lime wedge, grilled tortilla strips, avocado slices and cheese.',
          ingredients: '2 tablespoons vegetable oil, 1 small onion diced, 2 tablespoons minced garlic, 2 jalapenos finely diced, 6 cups low-sodium chicken broth, One 14.5-ounce can fire-roasted diced tomatoes, One 14.5-ounce can black beans rinsed and drained, 3 chicken breasts boneless and skinless, 2 limes juiced plus wedges for garnish, Salt and freshly ground black pepper, 1 cup roughly chopped fresh cilantro leaves, One 8-inch flour tortilla grilled and cut into thin strips, 1 avocado pitted and sliced, 1 cup shredded Monterrey cheese',
        },
      ],
      editRecipe: false,
      editTarget: 0,
    };
  }

  componentWillMount() {
    console.log('Component is mounting...');
    if (localStorage.state) {
      this.setState({
        allRecipes: JSON.parse(localStorage.getItem('state')),
      });
    }
  }

  componentDidMount() {
    console.log('Component has mounted.');
    localStorage.setItem('state', JSON.stringify(this.state.allRecipes));
    $(document).ready(() => {
      $('.modal').modal();
    });
  }

  addRecipe = (newRecipe) => {
    const allRecipes = [
      ...this.state.allRecipes,
      newRecipe,
    ];
    const allRecipesLocal = JSON.stringify(allRecipes);
    localStorage.setItem('state', allRecipesLocal);
    this.setState({
      allRecipes,
      editRecipe: false,
    });
    console.log(this.state.allRecipes);
  }

  editOn = (position) => {
    this.setState({
      editRecipe: true,
      editTarget: position,
    });
    console.log(this.state.editTarget);
  }

  editOff = () => {
    this.setState({
      editRecipe: false,
    });
  }

  deleteRecipe = () => {
    const updatedRecipes = [...this.state.allRecipes];
    updatedRecipes.splice(this.state.editTarget, 1);
    const updatedRecipesLocal = JSON.stringify(updatedRecipes);
    localStorage.setItem('state', updatedRecipesLocal);
    this.setState({
      allRecipes: updatedRecipes,
    });
    this.editOff();
  }

  render() {
    return (
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '3vh',
      }}
      >
        <AddRecipeButton
          recipeList={this.state.allRecipes}
          addRecipe={this.addRecipe}
          editRecipe={this.state.editRecipe}
          editOff={this.editOff}
          editOn={this.editOn}
          deleteRecipe={this.deleteRecipe}
          editTarget={this.state.editTarget}
        />
        <RecipeDisplay
          recipeList={this.state.allRecipes}
          editOn={this.editOn}
        />
      </div>
    );
  }
}

const rootEl = document.querySelector('#root');

ReactDOM.render(
  <App />, rootEl);
registerServiceWorker();
