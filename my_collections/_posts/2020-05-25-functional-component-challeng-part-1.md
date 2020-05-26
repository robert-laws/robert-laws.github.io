---
title: "Functional Component Challenge - Part 1"
date: 2020-05-23 14:56:32
author: Robert Laws
categories: [learn]
tags: [react, react hooks]
featured-image: blog-post-functional-component-challenge.jpg
---
I've taken the challenge recently to use only functional components in my code-along sessions even when the instructor uses class components<!-- more --> Since I've gotten more experience with React Hooks, I've decided that they're a much better coding experience than class components. I've vowed to code only using functional components when doing React projects now. Along with using only functional components I am also learning how to make the most of different hooks. At this point, I'm fairly comfortable with the `useState` hook. I'm getting more comfortable with the `useEffect` hook, although there's some particular cases that I'm still figuring out.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Functional Component Challenge" %}

#### Basics of a Functional Component

A functional component is called by simply writing a function. The JSX is placed in a return statement. Everything else, including all the programming logic, can be placed before the return statement. Functional components - before React Hooks - were used mostly for things like content that didn't require state and for purely presentational needs - like displaying HTML. Functional components also are able to have props and data sent along to them from other components.

An example of the typical functional component could be the following - for a header section of a website.

```javascript
import React from 'react';

const Header = () => {
  return (
    <nav>
      Header Content - including icon, site title, navigational links
    </nav>
  )
}

export default Header
```

With React Hooks, it's possible to add in state to a functional component with the `useState` hook. This allows the component to handle state and changes to it inside the component, without having to rely on a class component to do the work.

```javascript
import React, { useState } from 'react'

const User = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ?
       ( 
         <p>You are currently logged in</p> 
        ) : ( 
         <p>Please log in to continue</p>
      )}
    </div>
  )
}

export default User
```

Another great thing about React Hooks and functional components is the ability to have user input in the component and handle stateful changes to the user input. It's a tidy amount of code too, reducing the number of lines it takes to do the same thing with a class component.

```javascript
import React, { useState } from 'react'

const Location = () => {
  const [location, setLocation] = useState('');

  const handleChange = event => {
    setLocation(event.target.value)
  }

  return (
    <div>
      <p>
        <strong>My current location is:</strong> {location}
      </p>
      <input type='text' onChange={handleChange} />
    </div>
  )
}

export default Location
```

Part 2 will explore how to handle the equivalent of lifecycle methods in functional components.