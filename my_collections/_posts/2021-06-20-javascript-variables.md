---
title: 'Javascript Variables'
date: 2021-06-20 15:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-variables.jpg
---

Variables are a foundational aspect of programming with JavaScript, or any programming language. It's essential to understand what variable are and what to expect when using them.<!-- more --> For the longest time, JavaScript generally had only one way to declare variables, with the `var` keyword. Since the arrival of ES6 (ES2015), the keywords `let` and `const` have been available for variable declaration. The idea behind adding these features to the language was to provide ways to control how variables are declared, assigned values, and visible to other parts of a JavaScript program through the concept of scope.

This article focuses on the basics of variables in JavaScript and examples of their use. The core concept of a variable is to provide a way to declare and store values that can be used in a program. Declaring a variable is like giving a value a pointer that can be used again and again to reference the value stored at that pointer. This functionality

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Basics of CSS Animation" %}

Variables can be declared using the `var`, `let`, and `const` keywords.

## var

The variable declaration `var` has been used with javascript since its inception. The `var` variable (also the `let` and `const` variables) are used to store different types of data. A variable can store data such as strings, numbers, booleans, objects, functions, and more.

```javascript
var myName = 'bob';
var myAge = 34;
var clubMember = true;
var schoolSupplies = ['pencil', 'notebook', 'pen', 'eraser'];
var schoolSchedule = {
  math: 'Advanced Algebra',
  science: 'Physics',
  literature: 'Modern Chinese Literature',
};
var sayHello = function () {
  console.log('hello');
};
```

The example above show the different types of data that can be stored in variables. All the variables above are declared with the `var` keyword. Declaring a variable with `var` and outside of any other blocks of code places it within the **global scope**, meaning the variables can be accessed from any other part of the program and is available globally within the program.

```javascript
var myName = 'bob';

function studentProfile() {
  console.log(`student name: ${myName}`);
}

studentProfile(); // student name: bob - variable 'myName' is part of the global scope
```

Variables declared using `var` within function code blocks - known as **function scope** - are only accessible within the function. An exception is when a variable is assigned a value but not declared using the `var` keyword, as shown for `testResults` below. Assigning a value like this allows the variable to be accessed outside of the function.

```javascript
function getStudentGrade() {
  testResults = [75, 86, 93, 87];
  var testResultsAverage =
    testResults.reduce((a, b) => a + b) / testResults.length;
  return testResultsAverage;
}

console.log(testResults); // 85.25 - variable 'testResults' is part of the global scope
```

Variables declared using `var` within logical code blocks - known as **block scope** (ex. `if..else`) - are accessible outside of the block.

```javascript
if (true) {
  var newName = 'ned';
}

console.log(newName); // ned - variable 'newName' is part of the global scope
```

## let

The variable declaration `let` is similar to `var` in many ways, but include some key difference when it comes to access and scope. A variable declared within the global scope using `let` can be accessed anywhere in the program. This behavior is just like what happens with the `var` variable declaration.

```javascript
let studentName = 'melvin';

function greetStudent() {
  console.log(`Greetings, ${studentName}!`);
}
```

Also, just like with `var`, variables declared with `let` within a function scope are only accessible within the function scope and will cause an error when attempting to access outside of the function scope.

```javascript
function chooseClub() {
  let clubSelection = 'chess club';
  console.log(clubSelection);
}

console.log(clubSelection); // ERROR - 'clubSelection' is only accessible within the function scope
```

However, when using block scopes, any variable declared with `let` inside a block is _not_ accessible outside of the block and will cause an error. This is a key difference to variables declared with the `var` keywords, which can be accessed outside of a block.

```javascript
if (10 > 5) {
  let answer = 'Ten is greater than five';
}

console.log(answer); // ERROR - 'answer' is only accessible within the block scope
```

## const

The variable declaration `const` is meant to be used for data that will not change - in other words, data that will remain constant. Just like with `var` and `let`, variables declared outside of a function or block with `const` are available to the global scope.

```javascript
const friendName = 'Kalvin';

function sayFriendName() {
  console.log(`Hi, ${friendName}!`);
}

sayFriendName(); // Hi, Kalvin! - variable 'friendName' is part of the global scope
```

And just like variables declared with `let`, a variable declared with `const` is not accessible outside of either function scope or block scope and will cause an error.

```javascript
function getLunch() {
  const specialMeal = 'pasta';
}

console.log(specialMeal); // ERROR - 'specialMeal' is only accessible within the function scope

if ('pizza' === 'pizza') {
  const favoriteFood = 'cheese pizza';
}

console.log(favoriteFood); // ERROR - 'favoriteFood' is only accessible within the block scope
```

An important note about using variables declared with `const` is that they cannot be reassigned. This applies to `const` variables that have data including values, arrays, or objects.

```javascript
// VALUE
const courseLength = '2 hours';

courseLength = 120; // ERROR - 'courseLength' cannot be reassigned

// ARRAY
const courseTitles = ['Intro to Math', 'English Literature', 'Biology'];

courseTitles = ['Physical Education', 'Chemistry', 'Spanish I']; // ERROR = 'courseTitles' cannot be reassigned

// OBJECT
const courseProfile = {
  name: 'Chemistry',
  days: ['Monday', 'Wednesday'],
  time: '9:30am',
  instructor: 'Gil',
};

courseProfile = {
  name: 'German Literature',
  days: ['Friday'],
  time: '14:00',
  instructor: 'Bob',
}; // ERROR - 'courseProfile' cannot be reassigned
```

An important thing to note, however, is that `const` does allow both data inside arrays and objects to be changed.

```javascript
// ARRAY
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

weekDays.push('Strangeday');

console.log(weekDays); // [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Strangeday' ]

// OBJECT
const mathAssignment = {
  partOne: 'Read the textbook',
  partTwo: 'Complete the homework questions',
};

mathAssignment.partThree = 'Take the quiz';

console.log(mathAssignment); // { partOne: 'Read the textbook', partTwo: 'Complete the homework questions', partThree: 'Take the quiz' }
```

## Conclusion

Variables are used everywhere in JavaScript programs. One problem that can come up is from having variables in different scopes with the same name. This can produce problems when values assigned to one variable are overwritten by other variables unintentionally. This is a type of problem that may not produce an error message, but will still result in problems. Likewise, many assigned values are created without the need to change them at any point during the program. However, it's possible to overwrite the value of variable unintentionally, causing problems in the program.

The addition of `let` and `const` are meant to address some of these problems. They've become useful tools to help developers write code that restricts the visibility and modification of data - and therefore helps developers avoid smaller errors that could cause big problems.
