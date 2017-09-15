## User Stories

User Story: I can create recipes that have names and ingredients.

User Story: I can see an index view where the names of all the recipes are visible.

User Story: I can click into any of those recipes to view it.

User Story: I can edit these recipes.

User Story: I can delete these recipes.

User Story: All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.

## React JS Recipe App

I walked away from this project with a much more solid understanding of React. I was able to stumble my way through my first two React projects, which were considerably less complex, based on what I had initially learned from reading the official React docs (a surprisingly great resource) and the first few lessons of Stephen Grider's 'Modern React with Redux' Udemy course (also a great resource).

Having put in a lot of work with vanilla JS for Freecodecamp's front-end certification, React didn't quite look so intimidating at first until I got further in Stephen's course and encountered a lot of foreign vocabulary and concepts. So I decided to table the course momentarily and focus on building my recipe app then revisit the course once I'd finished.

I began by building the general structure and completing the styling using Materialize CSS. I want to gain more experience working with Google Material design principles, so I've chosen to use the Materialize CSS library in a few of my recent projects and will likely continue using it in my projects to follow.

I very much enjoy the initial prepatory process of styling an app. It gives me time to reason through scenarios of how I'd like my app to function and I simply enjoy designing. I've found this incubation period plays an important role in my coding process. Once I feel close to a reasonable plan of action, then I start working on the logic. 

I implemented the addRecipe input modal first. I had just completed a tutorial on controlled inputs in React, so I decided to create two components, one for the modal wrapper and another for the inner modal inputs. Later I tried to combine the two because I thought it would tidy things up a bit, but I had issues with the modal wrapper reloading on every input change because the state was being updated on every keystroke so I ultimately separated them again.

I struggled at first figuring out how to get the state from RecipeInput into the parent App component. At this point I wasn't familiar enough with the flow of props to easily see the solution, but after a couple conversations with a friend it clicked. 

``` javascript
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
  }
```
I passed the above function down through props to this function in RecipeInput:

``` javascript
 handleSubmit = () => {
    if (this.state.title.length !== 0) {
      const newRecipe = {
        ...this.state,
      };
      this.props.addRecipe(newRecipe);
      this.setState({ title: '', imageUrl: '', directions: '', ingredients: '' });
    }
  }
```
This was also my first time working with localStorage, which was fun.


...
