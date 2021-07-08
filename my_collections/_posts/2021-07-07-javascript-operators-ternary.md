---
title: 'JavaScript Operators - Ternary Operators'
date: 2021-07-07 19:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-operators-ternary.jpg
---

JavaScript has a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), which as the name implies, requires three operands. This post continues the series on [unary](https://robert-laws.com/blog/javascript-operators-unary) and [binary](https://robert-laws.com/blog/javascript-operators-binary) operators. <!-- more -->The ternary operator is sometimes called a conditional operator and is used often for a shortened version of the `if...else` statement. Using the ternary operator can help to condense code, although is sometimes criticized for being [less transparent](https://betterprogramming.pub/the-javascript-ternary-operator-1589238d929b) and [readable](https://jrsinclair.com/articles/2021/rethinking-the-javascript-ternary-operator/) code compared to the `if...else` statement.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Operators - Ternary Operators" %}

#### Constructing a Ternary Operators

The ternary operator statement includes a condition, which is evaluated. The conditional statement is followed by a question mark. Upon evaluation, the operator will execute the code before the colon if the result of the condition is true and the code after the colon if the result of the condition is false.

```javascript
condition (truthy or falsy) ? `code to execute if truthy` : `code to execute if falsy`;
```

#### The ternary operator compared with the if..else statement

A ternary operator and an `else...if` statement are equivalent in terms of the result they return with in a program. The main difference if that a ternary operator is more terse to write.

```javascript
let price = 35.75;

// using the else...if statement
if (price > 25) {
  console.log('too expensive');
} else {
  console.log('affordable');
}

// using the ternary operator
price > 25 ? console.log('too expensive') : console.log('affordable');

// result from both statements 'too expensive'
```

Even though ternary operators are usually used for the evaluation of simple conditions, they can also be used to build more complex conditional statements, including statements that mirror complex `if...else` statement. The following code example shows how to create a ternary statement that includes an `if`, `elseif`, and `else` combination and the equivalent as a ternary operator.

```javascript
let name = 'bob cobb';

if (name.includes('melvin')) {
  console.log('hello, melvin');
} else if (name.includes('kalvin')) {
  console.log('hello, kalvin');
} else {
  console.log('hello someone else');
}

name.includes('melvin')
  ? console.log('hello, melvin')
  : name.includes('kalvin')
  ? console.log('hello, kalvin')
  : console.log('hello someone else');
```

Conditional statements can also include nested conditions on occasion. In the following code example there is a nested `if...else` statement and the equivalent version as a ternary statement.

```javascript
let product = { group: 'electronics', name: 'camera', price: 95 };

if (product.group == 'electronics') {
  if (product.name == 'camera') {
    if (product.price > 75) {
      console.log('expensive camera');
    } else {
      console.log('affordable camera');
    }
  } else if (product.name == 'computer') {
    if (product.price > 500) {
      console.log('expensive computer');
    } else {
      console.log('affordable computer');
    }
  } else {
    console.log('other electronic product');
  }
} else {
  console.log('other product group');
}

product.group == 'electronics'
  ? product.name == 'camera'
    ? product.price > 75
      ? console.log('expensive camera')
      : console.log('affordable camera')
    : product.name == 'computer'
    ? product.price > 500
      ? console.log('expensive computer')
      : console.log('affordable computer')
    : console.log('other electronic product')
  : console.log('other product group');
```

The code above shows that although the ternary operator is more condense than an `if...else` statement, it requires some effort to follow what it's doing.

The ternary operator useful in situations where a conditional statement is not particularly complex since ternary operators can be difficult to read when they span multiple lines, as reflected in the example above. In situations requiring complex logic, `else...if` statements are more useful since they tend to be easier to read over multiple lines, especially if they include several or embedded conditional statements.

#### Variable Assignment

A good example of ternary operator use is when assigning a variable based on a condition.

```javascript
let department = 'Information Technology';
const isManager = true;

const role = isManager ? `${department} manager` : `${department} staff`;
```

Here, the variable `role` is assigned conditionally based on how the `isManager` boolean is evaluated.

#### Conclusion

Ternary operators are great for evaluations that are not overly complex, where condensed code helps improve code readability, and in situations where reduced lines of code can be written without compromising its accessibility to other developers.
