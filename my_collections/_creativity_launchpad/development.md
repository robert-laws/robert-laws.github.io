---
title: 'Development'
process_order: 7
---

## Development

Although the design and content development of the website were challenging, the developmental phase of the website presented multiple complex challenges as well. These challenges focused around issues like dynamically loading data from JSON files, adding interactivity to the website - particularly in the ways a user could filter and sort content, applying the design to the website through layout and CSS styling, and verifying that the website was fully compliant with accessibility standards.

#### Semantic HTML

Websites benefit from use of semantic HTML. The benefits come from providing greater transparency to the intent of content within the website as well as aiding in accessibility. Use of elements such as `header`, `nav`, `main`, `article`, `aside`, `footer`, and the `heading` elements help to build a well-defined website outline and highlight more or less important content. For example, the HTML structure of the `main` sectioning element on the **resources.html** page reflects it's prominence and the sectioning of content.

```html
<main id="main-content" class="site-main">
  <section class="title-section">
    <h1>All Resources</h1>
  </section>
  <section class="main-buttons">
    <div class="button-group">
      <a
        id="filter-button"
        href="#"
        name="open-panel-button"
        class="button blue margin-right"
        >Filter</a
      >
      <a id="a-to-z-button" href="#" class="button outlined">Sort A - Z</a>
    </div>
    <div class="button-group">
      <input
        id="resources-search"
        class="margin-right"
        placeholder="Search Resources"
        type="text"
      />
      <a id="clear-search" href="#" class="button outlined">Clear</a>
    </div>
  </section>
  <section class="cards-section">
    <div id="cards-total" class="cards-total"></div>
    <div id="cards-container" class="cards"></div>
  </section>
</main>
```

The main content components of the `main` section are the title, buttons, and content cards. These are each isolated by a `section` element, which reflects their status as discreet pieces of content within the `main` content of the website.

#### Layout with CSS Grid and Flexbox

The challenges of creating an attractive and responsive layout were much more difficult before CSS Grid and Flexbox were available and widely supported by different browsers. Both offer good ways to handle complex layouts, and when used in combination they can solve most layout challenges. One way that CSS Grid is applied for the website is with the layout of the resource cards on the **resources.html** page. Here, the cards are laid out in a grid with three columns when in the width is for desktop screens. As the screen size decreases, the layout adjusts to accommodate the smaller screen size and moves the cards into two columns and finally a single column for mobile layouts. This is achieved with the `auto-fill` property of the grid. This property instructs the grid items to fill in the available space as specified by the `minmax()` function. Once the multiple grid items can no longer fill the space within the constrain of the `minmax()` function, the items will be pushed to the next row. This is also a great way to introduce a responsive design to the website without needing media queries.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
}
```

Flexbox can achieve similar responsiveness by making use of the `flex-wrap: wrap` property. This property allows the flex items to wrap around the container. Similar to the above example for CSS Grid, this property will allow flex items to wrap if there is not enough space for all the items to fit in one row. This feature is utilized for the buttons used to filter resources on the **resources.html** page.

```css
.main-buttons {
  padding: 2rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
```

Finally, the stylesheet makes extensive use of CSS custom properties to define different properties that can be utilized and change based on media queries. For example, font sizing can be defined through CSS custom properties and applied to elements, which will then adjust without needing to add a separate media query just for the element.

```css
/* Text Sizing */
:root {
  --h1-heading: 3.2rem;
  --h2-heading: 3rem;
  --h3-heading: 2.8rem;
  --h4-heading: 2.6rem;
  --h5-heading: 2.2rem;
  --h6-heading: 2rem;
}

@media (min-width: 1200px) {
  :root {
    --h1-heading: 3.2rem;
    --h2-heading: 2.8rem;
    --h3-heading: 2.6rem;
    --h4-heading: 2.4rem;
    --h5-heading: 2.2rem;
    --h6-heading: 2rem;
  }
}

h1 {
  font-size: var(--h1-heading);
}
```

This helps to simplify changes based on media queries and standardizes how elements behave based on definitions in just two lines of code within the CSS.about-content

#### JavaScript

The website makes extensive use of JavaScript to handle content data loading and functionality of the website. Most of the data for the website is contained in JSON files. Each JSON file is loaded into the page dynamically by calling an asynchronous `fetch()` function. The `fetch()` function returns a promise, which is then handled by another function to load the data as an array of objects. For example, the following code fetches the **projects.json** file and loads the data into a `projectsList` array.

```javascript
const getProjectsData = async () => {
  const response = await fetch('./data/projects.json');

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
};

const getAllProjectsData = () => {
  getProjectsData()
    .then((allData) => {
      projectsList.pushWithEvent(...allData.projects);
    })
    .catch((error) => {
      document.querySelector(
        '#main-content'
      ).innerHTML = `<div${error.message}</div>`;
    });
};
```

JavaScript ES6 array methods are used throughout the code to do things like filtering, sorting, and searching. For example, the following code searches the titles of an array of all resources to find a match for the search query. This is done using the `filter()` method in combination with the `includes()` method to determine if the title string includes the words used in the search query.

```javascript
const searchResources = () => {
  let searchMatches = [];

  if (searchTerms.length > 0) {
    searchMatches = resourcesList.filter((resource) => {
      return resource.title.toLowerCase().includes(searchTerms.toLowerCase());
    });
  }

  return searchMatches;
};
```

#### Accessibility

A very important aspect of the website is its accessibility features. One important feature is controlling tab order on a side panel that is revealed when a user clicks on the filter button. Once the side panel is opened, the user can either close it with a close button, check different checkboxes for a filter to be selected, or click on a button to reset all filters. It's important to apply the concept of tab trapping to keep a user with a screen reader inside the panel until they choose to close it. If this is not done, a user will tab through other parts of the web page without being able to close the panel.

```javascript
document.addEventListener('keydown', function (e) {
  if (panelOpenState) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === sidePanelCloseButton) {
        resetFiltersButton.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === resetFiltersButton) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        sidePanelCloseButton.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  }
});
```

In the code above, the `keydown` event is captured on the `document` while the side panel is open. If the user tabs to the last element in the panel or shift + tabs backwards, the focus is kept within the panel and not outside of the elements on the panel. This way, a user can tab through the panel without problem until they choose to close it.
