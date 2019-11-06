---
title: React Hooks - Working with useEffect
date: 2019-11-03 09:49:00
author: Robert Laws
categories: [react]
tags: [react, javascript]
featured-image: blog-post-react-hooks-use-effect.jpg
---
There's a lot of interesting features that come with React Hooks and useEffect is particularly interesting.<!-- more -->

[React Hooks](https://reactjs.org/docs/hooks-intro.html) has been a feature of React since the release of React version 16.8. Although there's a lot of complexity within React Hooks, I was particularly interested in the **Effect Hook** to perform some side effects when a particular part of state changed.

React's documentation can be a little dense at first. I actually was initially frustrated by the documentation, since I didn't find an example that matched my particular use case. However, reading over it a second time (and while not trying to implement the feature in my code as I was reading through the documentation), I was able to discover that the documentation did in fact have an example matching my use case.

#### My Use Case

In my use case, I already had a data file containing a listing of courses a student could choose. Based on their selection from a select input control, I wanted to update state (and the UI) with values like the instructors name, course name, description, etc. I began by the **State Hook** to initialize state as an object of values, shown below. I also initialize *selectedCourse* using the State Hook. This will contain the result of the user selection in the select input control.

```javascript
import React, { useState, useEffect } from 'react';
import courses from '../../data/courses';

const Instruction = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [myCourse, setMyCourse] = useState({
    courseInstructor: '',
    courseName: '',
    courseLevel: ''
  })

  // ... Effect Hook goes here

  return (
    <div>
      {/* UI goes here */}
    </div>
  )
}
```

I used my data file to populate a select input control with the names of all the courses available. Upon a change to the select input the state of selectedCourse would be updated. It is on changes to this piece of state that I *watch* to initiate an effect. To get this working, I employ the Effect Hook to detect a change to the state for *selectedCourse* in the following way.

```javascript
useEffect(() => {
  const thisCourse = courses.find = courses.find(thisCourse => thisCourse.name == selectedCourse);

  if(thisCourse) {
    setMyCourse(myCourse => ({ ...myCourse, courseInstructor: thisCourse.instructor, courseName: thisCourse.name, courseLevel: thisCourse.level }))
  } else {
    setMyCourse(myCourse => ({ ...myCourse, courseInstructor: '', courseName: '', courseLevel: '' }))
  }
}, [selectedCourse])
```

The benefits of using the **Effect Hook** is that it can take the place of `componentDidMount` and `componentDidUpdate`. Depending on how the dependency array is setup, either as an empty array `[]` or by passing value, the effect will either run on initialization like `componentDidMount` or on an update in state as specified in the dependency array the effect will run like `componentDidUpdate`. In my use case I'm responding to changes to the state of *selectedCourse*. When state is updated the effect will run. The side effect will populate the state of *myCourse* with data from the data file that is returned when matched to the *selectedCourse* value.

A key additional piece of information is how we handle updating *myCourse* inside the effect hook. Attempting to update myCourse via state can sometimes add another dependency that needs to be passed into the dependency array. One way around this is to perform a functional update by making use of the state hook's accept to the previous state. By spreading the values of the previous state into the `setState` function there's no need to include the entire state object in the dependency array.

There's more than one way to accomplish the task described above. The power of the *Effect Hook* is in its flexibility to do what could only be done with class components prior to React version 16.8. 