## User Stories

User Story: I can create recipes that have names and ingredients.

User Story: I can see an index view where the names of all the recipes are visible.

User Story: I can click into any of those recipes to view it.

User Story: I can edit these recipes.

User Story: I can delete these recipes.

User Story: All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.

## React JS Recipe App

I walked away from this project with a much more solid understanding of React. I was able to stumble my way through my first two React projects, which were considerably less complex, based on what I had initially learned from the official React docs (a surprisingly great resource) and the first lessons of Stephen Grider's 'Modern React with Redux' Udemy course. 

Having put in a lot of work with vanilla JS for Freecodecamp's front-end certification, React didn't look quite so intimidating at first until I got deeper into Stephen's course and encountered a lot of vocabulary and concepts I wasn't familiar with. What I discovered worked best for me was working on the Freecodecamp projects, learning more about React in the process, then going back and completing a bit more of the course, moving the needle of each a little bit at a time.

When I started the recipe app, I still struggled to truly understand the component lifecycle, how props worked, and how stateful and stateless components differed. Visualizing how props passed from parent to child and how to actually do that in my code was a challenge -- not to mention anything about understanding how to pass props to sibling components through the parent. This last scenario stumped me for a good while. How do I execute a function in Sibling A when a button is clicked
in Sibling B? (In this case, it concerned populating my modal input [in Sibling A] form fields with recipe data from the parent's state when a user clicks the edit icon [in Sibling B].)

Eventually, however, through failure and repitition it started to crystalize. I'm sure I wrote some very verbose code that violates DRY ten time over, but I started to see how I could call functions in the parent component through handlers in the children. And how those could be passed around to wherever I needed them. What was completely foreign to me a week ago seemed like the greatest coding convention I had encountered thus far. Now what I need to improve on is writing more functional code. I tend to write many functions to handle a single thing, and though I've read arguments for doing this, I'd prefer to write functions that are more complex to clean up my code some.

After getting more comfortable with props, I started running into issues with my state.

...
