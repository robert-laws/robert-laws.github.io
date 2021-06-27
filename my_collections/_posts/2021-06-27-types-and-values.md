---
title: 'Basics of Types and Values'
date: 2021-06-27 15:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-types-and-values.jpg
---

The foundation of any programming language is data. Without data, creating a program is very difficult, if not impossible. Most interactions on the Internet involve data of some kind.<!-- more --> Perhaps it's bank account data, or data about a list of products in a shopping cart, or a message on a social media network, or the latest score from the basketball playoffs. Data is the reason why people start up a browser and explore the Internet. JavaScript allows programmers to control data **values** and the **types** of data used in a program.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Types and Values" %}

JavasScript allows programmers to work with a lot of different values. These values can include the _total dollar amount_ in an online bank account, a _list of the product names_ in a shopping cart TV on a e-commerce website, the _text_ of a post on a social media website, or the _final score_ of a basketball game. The common feature of all of these examples is that they are values - numbers, text, a list of text, etc. that is displayed on a webpage.

When speaking of values, it makes sense to do so in conjunction with types. In JavaScript, types are the different forms that data can take and are understood by the JavaScript engine. According to MDN, there are currently [nine distinct types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). These include:

## Types

#### Data Types (Primitives)

- **String** - content enclosed by quotes, double quotes, or backticks (ex. 'hello, bob', "automobile rental company", `green park`)
- **Number** - include integers and decimals (ex. 17, 2.63, -32.62, 5000.01)
- **Boolean** - true or false (ex. true, false)
- **undefined** - absence of value (ex. undefined)
- **BigInt** - numbers larger than 2^53 - 1 (ex. BigInt(9007199254740991))
- **Symbol** - an anonymous, unique property (ex. var sym = Symbol('sym'))

#### Structural Types

- **Object** - data type for structured data (ex. { name: 'bob', age: 34 })
- **Function** - a code snippet that can be called by other code (ex. function sayHello() { return 'hello'; })

#### Structural Root (Primitive)

- **null** - points to a nonexistent value (ex. var score = null)

## Assigning Values - Primitive Types

Values on their own don't do very much. To make the most out of values, they should be assigned to variables. In JavaScript, the process of assigning a value to a variable is incredibly easy and simple.

```javascript
var title = 'Tale of Two Cities';
typeof title; // 'string'
```

The code above both declares a variable and assigns it a value - a String type of data. Because JavaScript is a [dynamically typed](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing) programming language, the variable `title` can be reassigned as a new type of data.

```javascript
var title = true; // the variable title is reassigned with a new value
typeof title; // 'boolean'
```

The primitive data types can be created in the following ways:

#### String

[Strings](https://developer.mozilla.org/en-US/docs/Glossary/String) can be assigned using single quotes, double quotes, or backticks. Using backticks is typically done in conjunction with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (also known as template strings), which allows expressions to be embedded within the string.

```javascript
var myName = 'bob';
var myNickname = 'sparky';
var myFriend = `melvin`;

// using template literals
var greeting = `hello, how are you ${myFriend}?`;
```

#### Number

[Numbers](https://developer.mozilla.org/en-US/docs/Glossary/Number) can include whole numbers, decimals, and negative numbers. There are some limitations to the how big numbers can get in JavaScript, but generally speaking, the number data type will meet most everyday needs and situations.

```javascript
var age = 34;
var price = 53.67;
var transactionTime = 326.2646223;
var submersionDepth = -236;
```

#### Boolean

[Booleans](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) can only be assigned a value of `true` or `false` and nothing else.

```javascript
var isMember = true;
var completedExam = false;
```

Booleans are used throughout JavaScript, and are particularly useful as results from comparisons between different types and values.

#### Undefined

[Undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) values can either be explicitly assigned, or they are assigned by default to declared variables that do not hold any value yet.

```javascript
var name = undefined;
var location; // undefined
```

#### BigInt

[BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) is a fairly new JavaScript data type (added with the ES2020 release) that is used for numbers that are beyond the range that the primitive type Number can support. The Number data type can reliably handle numbers between -9007199254740991 and 9007199254740991, which are static properties of the Number object `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`. For numbers smaller or larger than this, the BigInt primitive is available. A variable with a value of the type BigInt can be created by appending the letter `n` to an integer.

```javascript
var myLargeNumber = 9007199254740999n;
typeof myLargeNumber; // 'bigint'
```

#### Symbol

[Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) was added to JavaScript with ES2015 and can be created by invoking the function `Symbol`. A symbol can be created with an optional description string. Each symbol created is always unique. A common use for symbols is as an object property.

```javascript
let location = Symbol('location');
typeof location; // 'symbol'

let place = Symbol('location');
location === place; // false - symbols are unique, even with the same description string

const company = {
  name: Symbol('Acme Co.'),
  location: Symbol('Los Angeles'),
};

company.name; // Symbol(Acme Co.)
company.location.description; // 'Los Angeles'
```

## Assigning Values - Structural Types

#### Object

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) are a structural data type that accounts for a wide range of different data within JavaScript. The standout feature of objects in JavaScript is the keyed collections used to create complex data structures. Objects can be created by using the `Object()` constructor or using the object literal syntax.

#### Object Creation with the Object() Constructor

```javascript
let myItem = Object(); // creates an empty object {}

myItem.name = 'hat';
myItem.size = 'large';
myItem.price = 21.47;

myItem; // { name: 'hat', size: 'large', price: 21.47 }
```

#### Object Creation using object literal syntax

```javascript
let newEmployee = {
  name: 'melvin',
  age: 34,
  isManager: true,
};

newEmployee.name; // 'melvin'
```

#### Function

[Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function) is a non-data structural type that can call on other snippets of code to execute. Functions are of the data type 'object', but will return `function` when the typeof operator is called on it. Functions can be declared several different ways.

#### Named Function

```javascript
function sayHello() {
  return 'hello!';
}

sayHello(); // 'hello!'
```

#### Function Expression

```javascript
let greeting = function (name) {
  return `Welcome, ${name}. It's nice to meet you.`;
};

greeting('bob'); // "Welcome, bob. It's nice to meet you."
```

#### Anonymous Functions

Are written without a declared name, but must be used as a function expression this way

```javascript
// Will produce an error without a name or assignment to a variable
function() {
  return 'some good information';
}
```

#### [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Arrow functions are a special type of function call that can be called like named functions or function expressions, but behave somewhat differently from other functions.

```javascript
let getProduct = (name) => {
  return `Finish purchase for ${name}.`;
};

getProduct('pencil'); // 'Finish purchase for pencil.'
```

## Assigning Values - Structural Root Primitive

#### Null

[Null](https://developer.mozilla.org/en-US/docs/Glossary/Null) points to a nonexistent or invalid value. Null itself is described as a primitive, although it technically is a type of `object`. It can be used to assign a non-value to a variable. It's useful to give a variable a value that will return `false` when performing a comparison.

## Conclusion

Types and values are the cornerstone of JavaScript. It's hard to imagine doing anything useful with the language without using or having a strong understanding of how the different types work and how to assign them values.
