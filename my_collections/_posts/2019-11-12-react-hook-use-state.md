---
title: React Hooks - Basics of the State Hook
date: 2019-11-12 09:49:00
author: Robert Laws
categories: [react]
tags: [react, javascript]
featured-image: blog-post-react-hooks-use-state.jpg
---
Let's discuss the basics of how to use React Hooks and useState.<!-- more -->

[React Hooks](https://reactjs.org/docs/hooks-intro.html) provides a new set of tools to handle state locally within components. A big change introduced along with React Hooks is the ability to make use of state within functional components. The way I've used the State Hook take two forms - to set a single value like **true**, **false**, or some variable value. I'll also use state to update an object or array collection. Doing this with Hooks introduces some challenges, particularly with objects and arrays. However, after gaining experience with React, some of the patterns for working with data become familiar and comfortable.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="React Hooks - Effect Hook" %}

#### Updating simple data values with the State Hook

The use case I have for applying the State Hook is an application that allows users to enter their current location while also keeping track of all the locations they've visited. There's different ways to set things up. One way is to capture a singular value for the location.

```javascript
import React, { useState } from 'react';

const MyTravelApp = () => {
  const [currentLocation, setCurrentLocation] = useState('')

  // more code goes here
}
```

The way to use the State Hook is to create both a stored state with an initial value for `currentLocation` and a function to update it with `setCurrentState`. In my case, I've set the initial value to an empty string. I can apply the function to update state in the following way:

```javascript
return (
  <>
    <input type='text' name='currentLocation' value={currentLocation} onChange={e => setCurrentLocation(e.target.value)} />
  </>
)
```

To read the value out of state, as shown above for the value of the input control, it's as simple as referencing a variable for `currentLocation`. This value can be retrieved and used in multiple places.

```javascript
return (
  <>
    <p>
      Your current location is {currentLocation}.
    </p>
    <input type='text' name='currentLocation' value={currentLocation} onChange={e => setCurrentLocation(e.target.value)} />
  </>
)
```

#### Updating objects and arrays with the State Hook

Working with objects and arrays adds a bit of complexity. When updating the state of an object, following the same pattern as the example above will create some problems. Consider the following:

```javascript
import React, { useState } from 'react';

const [currentLocation, setCurrentLocation] = useState({
  city: '',
  country: ''
})
```

To update the state for the object above passing a value such as:

```javascript
setCurrentLocation({ [`${name}`]: value })
```

Will not work since each time setCurrentLocation is called it will overwrite the entire object with just the value passed into it. The recommended way to update an object is to pass the previous state too the function to update state like the following:

```javascript
setCurrentLocation(prevState => ({
  ...prevState,
  [`${name}`]: value
}))
```

In this way, the values already set for one key and value inside the object are preserved when updating the other.

Similarly, updating an array can be done by accessing the previous state and passing it along when updating or adding a new value.

```javascript
import React, { useState } from 'react'

const [locations, setLocations] = useState([])

updateLocations = newLocation => {
  setLocation(prevState => ({
    ...prevState,
    [newLocation]
  }))
}
```

Although it takes a little bit of time to get used to updating state with React Hooks versus how it was done before hooks were available, the benefits are clear and allow use of functional components without a second thought.