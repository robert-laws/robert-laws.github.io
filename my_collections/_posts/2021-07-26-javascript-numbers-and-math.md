---
title: 'JavaScript - Numbers and Math'
date: 2021-07-26 16:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-numbers-and-math.jpg
---

Numbers in JavaScript include both integers and floating point numbers as just a single Number type. This is unlike some other programming languages like C# which distinguish between the many types of numbers depending on the size of the number and space taken up in memory.<!-- more --> Numbers in JavaScript can be very flexible, but also pose some risks depending on how they're processed by the program.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Numbers and Math" %}

Primitive number values have a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) object equivalent that wraps around the value and provide access to constants and methods that can be used to work with number values.

#### Creating Numbers

A new number can be created a few different ways:

1. With the `Number()` function

2. As a number literal

```javascript
let myNumber = Number(481);
typeof myNumber; // 'number'

let anotherNumber = 326.74;
typeof anotherNumber; // 'number'
```

#### Converting to Numbers

It's possible to convert values to numbers using a few different techniques. It's important to be aware of how numbers are converted since they can sometimes produce expected results.

1. Convert a value using the `Number()` function

2. Convert a value by placing a `+` value before the value

3. Use the `parseFloat()` or `parseInt()` functions. The [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function will attempt return a float value upon evaluating the passed parameter. Similarly, the [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function will attempt to return a integer value upon evaluation of the passed parameter. In cases where a float value passed as a string is used with the parseInt function, only the integer segment of the value will be returned.

```javascript
let total = '36226.72';
let numberTotal = Number(total);
numberTotal; // 36226.72

let myAge = '21';
+myAge; // 21

let myPrice = '51.85';
parseFloat(myPrice); // 51.85
parseInt(myPrice); // 51
```

The examples above show conversion of strings containing numbers to Numbers. It's important to understand how the results vary depending on how the string is constructed. For example, strings that include non-numeric characters will produce different results depending on how the string is constructed.

```javascript
let myPayment = '$24.64';
let mySecondPayment = '75.25 dollars';

Number(myPayment); // NaN
parseInt(myPayment); // NaN

Number(mySecondPayment); // NaN
parseInt(mySecondPayment); // 75
parseFloat(mySecondPayment); // 75.25
```

If the function `Number()` encounters a non-numeric character it will produce a `NaN` result. By contrast, both `parseInt()` and `parseFloat()` will terminate once encountering a non-numeric character. In cases when

Boolean values can also be converted into numbers. This is sometimes useful, especially is data is being boolean data is being stored in a data object or databases and needs to be converted to a number.

```javascript
+true; // 1
+false; // 0

Number(true); // 1
Number(false); // 0

parseInt(true); // NaN
parseInt(false); // NaN

parseFloat(true); // NaN
parseFloat(false); // NaN
```

The other primitive values of null and undefined can also be converted into numbers by adding a `+` before each.

```javascript
+null; // 0
+undefined; // NaN
```

These examples show that there are many ways to create numbers and how convert different data types into numbers. These are common actions performed during a program and often needed when getting data from form inputs. For example, form fields that collect numeric data store the data as a string and should be checked and converted to a number to avoid any arithmetic errors.

## Math

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) is a built-in JavaScript object that works with number value types. The Math object is not a constructor since it only has static properties and methods and cannot be created as an instance of a Math object. The Math object is useful to provide useful constant values, such as [PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI), and perform common mathematical operations like producing a [random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) number, to show a few examples.

#### Examples of Math properties and methods

Some of the most useful [Math properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#static_properties) include PI and E, two mathematical constants.

```javascript
let pi = Math.PI;
pi; // 3.141592653589793

let e = Math.E;
e; // 2.718281828459045
```

The Math object has many methods that are very useful. These include useful methods like trigonometry functions such as methods to calculate [sine](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin), [cosine](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), [tangent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan). There's also useful methods like [rounding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) values, calculating the [floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) or [ceiling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) of a number, or even producing a [random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) number.

A good example of the usefulness of these mathematical methods is using several of them in combination to produce a [random number between two values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#returning_a_random_integer_between_two_bounds).

```javascript
let randomBetween = function (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

randomBetween(1, 100); // 23
```

#### Conclusion

Using numbers and performing complex calculations is integral to programming with JavaScript. Having a good awareness of how to create numbers and convert other value types into numbers is important to make programs work as desired and avoid costly errors.
