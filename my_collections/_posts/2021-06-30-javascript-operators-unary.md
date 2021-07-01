---
title: 'JavaScript Operators - Unary Operators'
date: 2021-06-30 15:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-operators-unary.jpg
---

This post begins a series on **JavaScript Operators** and follows from a previous blog post on [types and values](https://robert-laws.com/blog/types-and-values) in JavaScript. A core part of building a program in JavaScript is performing operations on values, which are more interesting when operations are performed upon them. <!-- more --> Being able to perform operations such as arithmetic, combining, comparing, performing logical checks, and other operations on values transform them into dynamic values. Different types have available different operations. And some operations behave differently depending on the types involved. Operators can be broken down into a few groups.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Operators - Unary Operators" %}

## Unary Operators

A unary operation is an operation that involves only one operand. This means that there is an operator followed by just one value - or operand - that then produces a result from the operation.

#### delete

The [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator will remove a property from an object. This includes arrays. Using `delete` with an array, however, will delete the value, but won't change the overall length of the array. Delete can be useful to remove a single property from an object without leaving anything behind like an undefined value for the property.

Example of deleting a property from a object.

```javascript
let myObj = {
  name: 'bob',
  age: 32,
  member: true,
};

delete myObj.age;
myObj; // { name: 'bob', member: true }

delete myObj['member'];
myObj; // { name: 'bob' }
```

Example of deleting a member from an array.

```javascript
let items = ['hat', 'cat', 'map'];

delete items[0];
items; // [<1 empty item>, 'cat', 'map']
items[0]; // undefined
```

#### void

The [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) operator will evaluate a given expression and then returns a value of `undefined`. This is used often when its useful to return an undefined value as part of a code process. It was often used with hyperlinks as `javascript:void(0)` to return undefined from a user click to prevent page reloading.

```javascript
function sayHello() {
  return 'hello';
}

sayHello(); // 'hello'
void sayHello(); // undefined
```

#### typeof

The [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator will evaluate and return a string of the type of the operand value. This can be useful when checking the type of the value being held by a variable before performing additional operations upon the value.

```javascript
let name = 'hal';
let age = 43;
let isMember = true;

typeof name; // 'string'
typeof age; // 'number'
typeof isMember; // 'boolean'
```

#### unary plus (+)

The [unary plus (+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) will attempt to convert the value next to it into a number. This works with numbers, strings that contain only numbers as a string (ex. `'246'`), and boolean values. For booleans, adding a `+` before a true value will convert it into `1` and false into `0`.

```javascript
let myValue = '326';
+myValue; // 326

let isMember = true;
+isMember; // 1

let name = 'bob';
+name; // NaN
```

#### unary negation (-)

The [unary negation (-)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation) does the same as the unary plus, first converting the value into a number and then negates it.

```javascript
let balance = '23.73';
-balance; // -23.73;

+true; // 1
+false; // 0
+'53'; // 53
+null; // 0
+undefined; // NaN
+'hello'; // NaN
```

#### bitwise not (~)

The [bitwise not (~)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) will invert the bits of its operand and return an integer of the result.

#### logical not (!)

The [logical not (!)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) operator will evaluate a value as truthy or falsy and return the negated value as a boolean. When applied to a non-empty strings, non-zero numbers, or object the logical not operator will return false since each of those data types is considered to be true.

```javascript
let name = 'melvin';
!name; // false

let number = 232;
!number; // false

let person = { name: 'bob' };
!person; // false
```

When the logical not is applied to a boolean value, it will return the negation of the boolean value.

```javascript
let isMember = true;
!isMember; // false

!false; // true
```

There are other values that are considered 'falsy' and will return true when the logical not operator is applied to an operand.

```javascript
!null; // true
!undefined; // true
!NaN; // true
!''; // true
!0; // true
```

**Double negation** is possible by using two `!!` logical not operators in a row. When applied to an operand, it will evaluate and convert the operand to a boolean value and then negate that boolean to return the value to the operand's original 'truthy' or 'falsy' value. This is a useful tool to use when a boolean value is needed in evaluations for things like logical operations.

```javascript
let name = 'bob';
!!name; // true

!!null; // false
```
