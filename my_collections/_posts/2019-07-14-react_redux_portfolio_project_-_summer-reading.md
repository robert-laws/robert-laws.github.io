---
title: React & Redux
date: 2019-07-14 8:53:00
author: Robert Laws
categories: [javascript]
tags: [redux, react, ruby-on-rails]
featured-image: react-redux.jpg
---

For my React & Redux portfolio project - [Summer Reading](https://github.com/robert-laws/portfolio-project-july-2019-react-front-end) - I developed a concept of a summer reading program.<!-- more -->

The React & Redux project marks the end of the curriculum at the [Flatiron School](https://flatironschool.com/). The section on React and Redux - and the final project - were both very challenging. Partly because the concepts take a while to sink in really well. The async redux aspect of the project was particularly challenging. This was because there were many moving parts involved and it was tricky to grasp how to manage handing off the api data to the redux store and then keeping state under control while making further requests to the api and updating the redux store.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="React and Redux" %}

The concept for the project is a summer reading program. The application allows users to view a list of existing books from the database and add any number of them into their reading list. Users are able to view details about each book. Users can use a web form to add new books to the database of books, and then add those to their reading list too. Users can also remove books from their reading list and remove books from the database entirely. Finally, the reading list displays some basic statistics about the user's list.

#### Application(s) Environment Setup

To complete this project there were two major pieces to build. First, the API back-end was developed using Ruby on Rails. Next, the React and Redux front-end was built and sent requests to the API to load data and make additional requests when needed.

Reading other student posts on the React and Redux project, it seemed that the API aspect of the project went one of two ways. Either students created two separate applications for the API and the front-end app (what I did) or students created one application and used build tools such as [foreman](http://ddollar.github.io/foreman/) to handle running multiple processes in one app. Although I have two applications to manage, I preferred this route at the time since I could isolate the work on each independently. Setting up the API allowed me to review many rails features - so not as to forget them too quickly.

#### Battles with React

The focus of the project, of course, was React and Redux. For my project, I really focused on meeting the requirements first then looked at adding some design and extra touches. Working with React and Redux can quickly become frustrating between keeping track of all the import statements, actions, reducers, containers, etc. There's a lot of parts that need to come together.

##### Actions

The most frustrating part was working with the API and the Redux store at the beginning. Making async API requests required precise setup and then understanding how to move the resulting JSON into the Redux store correctly was tricky at first. First, I setup an action for the async call to the API and sent the dispatch to the reducer along with the response data.

```javascript
export function fetchBooks() {
  return dispatch => {
    dispatch({ type: 'LOADING_BOOKS' });
    return fetch('http://localhost:3001/api/books')
      .then(response => response.json())
      .then(books => dispatch({ type: 'FETCH_BOOKS', books }))
  }
}
```

##### Reducers

Next, the dispatch is received by the reducer, which will match against the action type to determine how to update the store. In the case of the API call, the data received from the API call replaced all the data in the store for the `books` segment.

```javascript
export default function(state = [], action) { 
  switch (action.type) {
    case 'LOADING_BOOKS':
      return state;
    case 'FETCH_BOOKS':
      return action.books
    case 'CREATE_BOOKS':
      return state.concat(action.book);
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== parseInt(action.id));
    default:
      return state;
    }
}
```

Working with Redux was complicated, especially trying to get a grasp of it while also dealing with the async API requests. Once I was done with the API and working only with Redux and state, things became much more clear. I did this when working with the reading list (or favorites) of books selected by a user. The reading list exists as long as the user is on the app and takes book data from the API and adds it to a local store segment.

The actions for working with the reading list was much easier to grasp. The two actions I setup for the reading list included adding and removing books.

```javascript
export function addToFavoriteBooks(book) {
  return {
    type: 'ADD_FAVORITE_BOOKS',
    book
  };
}

export function removeFromFavoriteBooks(id) {
  return {
    type: 'REMOVE_FAVORITE_BOOKS',
    id
  }
}
```

The reducer for the reading list (or favorites) was much easier to handle too. The logic used with the reading list allowed for practice with ES6 javascript syntax too. An interesting case was when a user deleted a book from the central book database. If this book was also in a user's reading list it had to be removed from there too. Upon a delete action from the main books action the reading list reducer also had an action dispatched to its reducer to delete the book from its state segment. This was an interesting challenge to solve.

```javascript
export default function(state = [], action) { 
  switch (action.type) {
    case 'FETCH_FAVORITE_BOOKS':
      return state;
    case 'ADD_FAVORITE_BOOKS':
      let existingFavorites = state.filter(
        book => book.id === parseInt(action.book.id)
      );
      if(existingFavorites.length > 0) {
        return state;
      } else {
        return [...state, action.book];
      }
    case 'REMOVE_FAVORITE_BOOKS':
      return state.filter(book => book.id !== parseInt(action.id));
    default:
      return state;
    }
}
```

#### Some Design

The design aspect of the project was interesting too. I made use of [Semantic-UI](https://semantic-ui.com/) for the design and was pleased with the results. The interface isn't overly extravagant, but does have a clean and functional look to it.

#### Final Thoughts

The project started slow - including some moments of real frustration - but by the end I was feeling much more comfortable with Redux and working with ES6 to update the store and maintain the integrity of the data for the application. React is complex and takes time to learn, but does produce some amazing outcomes given the effort to master it.