---
title: 'JavaScript - Program Flow'
date: 2021-07-11 19:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-program-flow.jpg
---

JavaScript offers several ways to control the flow of a program. Normally, a JavaScript program will begin to execute a program starting from the first line and continuing with each line to the end of the program. <!-- more -->There are several different ways to control the flow of the program, including [conditional statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements) and [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration). Each offer the ability for the programmer to evaluate different aspects of the program before continuing down a particular path or repeating a piece of code a specified number of times.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Program Flow" %}

#### Blocks

An important concept in JavaScript is the **block statement**, which are used extensively throughout programs. [Block statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) are used to group statements, expressions, and declarations within logical containers. They are particularly useful in conditional statements, loops, and exception handling statements. A block is created by enclosing the code within an opening and closing curly braces.

```javascript
{
  let firstName = 'bob';
  let lastName = 'cobb';
  console.log(`${firstName} ${lastName}`);
}
```

#### Conditional Statements

[Conditional statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements) give the programmer the power to specify what code should be executed based on different conditions. Depending on the result of a conditional statement, the program will follow a specified branch and continue to execute the program. For example, a program may display different information for a user depending on information like their age, sex, and location. A program could use this information to conditionally set information.

There are two main ways to handle conditional logic in JavaScript, either with `if...else` or `switch` statements. The main different is that `switch` statements are typically used to match against a set of fixed values whereas `if...else` statements can match against one or more boolean values or within ranges of values.

#### if...else

```javascript
let age = 34;

if (age <= 18) {
  console.log('child options');
} else if (age > 18 && age < 50) {
  console.log('adult options');
} else {
  console.log('elderly options');
}
```

#### switch

The switch statement accepts a parameter, against which it will attempt to match as a case. If no match if found, a default option is available to provide some kind of processing in such situations.

```javascript
let customer = 'vip';

switch (customerType) {
  case 'new customer':
    console.log('new customer menu');
    return;
  case 'returning customer':
    console.log('returning customer menu');
    return;
  case 'vip':
    console.log('vip menu');
    return;
  default:
    console.log('new customer menu');
    return;
}
```

#### Loops

Similar to conditional statements, [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) provide a way to control the flow of the program. Loops are controlled by setting conditions for how many times a loop should run before exiting. There are several different types of loops including the `while`, `do...while`, `for`, and `for...in` loops.

#### while

A `while` loop will execute a block of code while a condition is true and stop the loop when the condition is false.

```javascript
let counter = 1;
while (counter <= 5) {
  console.log(`count number is ${counter}`);
  counter += 1;
}
```

#### do...while

Similar to a while loop, the `do...while` loop will execute a code block while a condition is true and stop when the condition is false. The main difference from a `while` loops is that a `do...while` loop will always run the loop at least once.

```javascript
let counter = 1;
do {
  console.log(`running loop ${counter} times`);
  counter += 1;
} while (counter < 3);
```

#### for

The `for` loop provides a way to control a loop by giving control over an initializing value, a condition under which the loop should continue or finish, and a post-iteration operation - usually to update the initialized value.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`for loop iteration #${i + 1}`);
}
```

#### for...in

The `for...in` loop is available to loop over properties within objects. The properties can either be used as keys for values within the object or as values themselves. For example, in an array, the properties are the index values for each member of the array. And for an object, the properties are the names for the values within the object.

```javascript
// Array
let numbers = [2, 4, 6, 8, 10];
for (let index in numbers) {
  console.log(`number is ${numbers[index]}`);
}

// Object
let employee = {
  name: 'Bob Cobb',
  age: 35,
  manager: true,
};
for (let key in employee) {
  console.log(employee[key]);
}
```

#### Conclusion

Being able to control the flow of a program is an essential skill for any programmer. Conditional statements and loops provide key tools to control how a program runs, where it branches, and how many times it will run particular blocks of code. Mastering conditional statements and loops is a foundational skill that is used in most programming languages. Therefore, it's important that programmers should learn how to construct such statements and how they work.
