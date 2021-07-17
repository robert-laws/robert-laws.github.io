---
title: 'JavaScript - Functions'
date: 2021-07-16 19:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-functions.jpg
---

Functions in JavaScript are segments of code that can be defined and then called when needed. They can be thought of as sub-programs within the overall program. <!-- more -->Functions are helpful since they allow a programmer to write a piece of code once that can then be used multiple times throughout the program, which helps reduce code duplication. Functions also allow programmers to create discrete code segments that can be logically separated from other code within a program.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Functions" %}

Functions include the following characteristics:

- Can accept none or multiple parameters
- Can return a specified value at the end of the function call
- Can produce a side effect on other parts of the program without return a value

#### How to create a function

Functions can be created a few different ways. The most common way they are created is either as a function declaration or a function expression.

**Function Declarations**

A [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) (also known as a function statement) is one way to create a function. To create a function this way, the function must have a _name_, optional _parameters_, and a _statement_ that is executed within a function block.

```javascript
function sayHello(name) {
  return `hello, ${name}`;
}
```

In the example above, the function name is `sayHello`, the optional parameter is `name`, and the statement is `` return `hello, ${name}`; ``. In this example, the statement uses the `return` statement to explicitly return a value from the function. However, if the `return` statement is omitted, the function will return `undefined`.

A unique characteristic of function declarations is that when a program is run, function declarations are hoisted to the top of the enclosing function scope or global scope before the code is executed. This allows function declarations to be called before they're defined in the raw code.

```javascript
greeting('melvin');

function greeting(name) {
  return `Howdy, ${name}!`;
}

// Even though the function declaration comes after the function call, hoisting moves the function declaration to the top of the global scope
// 'Howdy, melvin!'
```

**Function Expression**

A [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) is a function that is stored within a variable and can either be named functions or anonymous, which means it has no name even if it has parameters and statements.

```javascript
// named function expression
const welcomeMessage = function hello(name) {
  return `hello, welcome ${name}.`;
};

// anonymous function expression
const assignedTask = function (task) {
  return `your task is: ${task}.`;
};

welcomeMessage('ned');
// 'hello, welcome ned.'

assignedTask('front-end development');
// 'your task is: front-end development.'
```

Function expressions are stored in variables and can be called or passed as an argument to another function. In most cases, function expressions are very similar to function declarations, however, function expressions are not hoisted to the top of the local or global scope. A function expression called before it is defined will produce an reference error since the function will not have been defined before it is called.

```javascript
sayHello(); // Uncaught ReferenceError: sayHello is not defined

const sayHello = function () {
  return 'hello...';
};
```

#### Closures

An important feature of javascript functions is the concept of a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#closures). When creating functions, it's possible for a function to enclose one or more additional functions. Each function can have its own variables and functions that are specific to its scope. Functions that are enclose by other functions have access their own scope variables and functions and all the variables and functions of functions that it is enclosed by. The enclosing function, however, does not have access to variables and function that are defined inside it.

Another feature of closures is the ability to preserve the variables and functions of inner functions even after the outer function has been executed. JavaScript will preserve these variables and functions, which can be accessed later during the execution of inner functions of the enclosing function.

```javascript
const welcomeMessage = function (name) {
  let employeeName = name;
  const greeting = function (message) {
    return `${message}, ${employeeName}.`;
  };

  return greeting;
};

let myGreeting = welcomeMessage('kalvin');

myGreeting('hello'); // 'hello, kalvin.'
myGreeting('welcome'); // 'welcome, kalvin'
```

In the example here, the function expression `welcomeMessage` is declared and accepts the parameter `name`. The variable `employeeName` is declared within the scope of the function expression. Another function expression `greeting` that accepts the parameter `message` is declared within the scope of `welcomeMessage`. The function `greeting` has access to the variables declared by its enclosing function and returns a string using the variable `employeeName` and the value of its own parameter `message`.

As can be seen, the function is called by assigning it to the variable `myGreeting` and passing a value for the parameter `name`. The function preserves this variable and makes it available when `myGreeting` calls the inner function `greeting`. This construction allows the outer function to be called multiple times with different values for the `message` parameter, but the originally declared `employeeName` variable value is preserved and returned from the function call.

#### Function Parameters

As of ES2015, there are two new types of parameters in addition to the traditional type of parameters that have already been shown above. These new type of parameters are `default parameters` and `rest parameters`.

[Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#default_parameters) make it possible to provide default values that can be used if no value is provided to a function when it is called. This allows a function to run without causing an error.

```javascript
function sendGreeting(message, name = 'Anonymous') {
  return `${message}, ${name}.`;
}

sendGreeting('Welcome to the chatroom');
// 'Welcome to the chatroom, Anonymous.'
```

[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#rest_parameters) are useful at times when a function expects an indeterminate number of parameters. The rest parameters allow `x` number of parameters to be accepted by the function using the spread operator. The items will be accepted into the function without producing an error.

```javascript
function customerList(name, ...cart) {
  return `customer: ${name}, ordered the following items:${cart.map(
    (item) => ` ${item}`
  )}`;
}

customerList('kal', 'book', 'hat', 'pencil', 'computer');
```

#### Arrow Functions

Another new feature that arrived with ES2015 is [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions). These are functions that can be written using a condensed syntax and have a few other important features. Arrow functions also differ on how they handle `this` compared to traditional functions.

```javascript
const sayHi = (name) => {
  return `hi, ${name}.`;
};

sayHi('jim');
// hi, jim.
```

#### Conclusion

Functions are essential to the JavaScript language. They make it possible to do many things in a program including sharing code throughout a program, group code logically, and create sub-programs that return values. Functions also have particular properties and characteristics that are important to know and master. Features such as hoisting, closures, default parameters, and arrow functions are important nuances to JavaScript and should be mastered to have a solid grasp on how best to work with functions in JavaScript.
