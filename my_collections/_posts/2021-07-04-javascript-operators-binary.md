---
title: 'JavaScript Operators - Binary Operators'
date: 2021-07-04 15:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-operators-binary.jpg
---

This is the second post in the **JavaScript Operators** series. Following up on the first post on [unary operators](https://robert-laws.com/blog/javascript-operators-unary), this time the focus is on binary operators, which make up the majority of all operators used in JavaScript. <!-- more -->Binary Operators have multiple uses including arithmetic operations, relational and logical comparisons, and assignment.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Operators - Binary Operators" %}

## Binary Operators

In contrast to unary operators, which require just one operand to perform its operation, binary operators require two operands - as the name applies.

## Arithmetic operator

#### [addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) **+**

The addition operator will add together two numbers. When the two operands are either not number or only one is a number, the operation performed will be different. If the two operands are strings, the result will be string concatenation. If one or more of the operands is a boolean, the value of the boolean will be converted to a number and the operation will be performed. Note also that a number added to a number that is in the form of a string will concatenate the two numbers together as a string, ex. `'23' + 5; // '235'`.

```javascript
5 + 2; // 7

2 + '4'; // 24

8 + true; // 9

[5, 7, 2] + 4; // [5, 7, 24]

'hello' + ' there'; // 'hello there'
```

#### [subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) **-**

The subtraction operator will subtract one number from another. However, when a number and a string that is a number are subtracted, JavaScript will attempt to convert the string into a number to perform the arithmetic. Two strings subtracted will result in a `NaN` result. A boolean value will be converted to a number, just as with addition operators.

```javascript
5 - 2; // 3

2 - '4'; // -2

8 - true;

[5, 7, 2] - 4; // NaN

'hello' - ' there'; // NaN
```

#### [multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) **\***

The multiplication operator will multiply two numbers together. Performed on numbers that are string values, JavaScript will attempt to convert the string into a number and perform the multiplication. Similarly, with boolean values will be converted to numbers before the operation. Strings multiplied together will produce a `NaN` result.

```javascript
5 * 2; // 10

2 * '4'; // 8

8 * true; // 8

[5, 7, 2] * 4; // NaN

'hello' * ' there'; // NaN
```

#### [division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division) **/**

Division is similar to multiplication and produces similar results for numbers. A number in the form of a string will be converted to a number before the operation is performed. A boolean is also converted to a number before the operation is performed. For two strings or at least one arrays, a `NaN` result is produced.

```javascript
5 / 2; // 2.5

2 / '4'; // 0.5

8 / true; // 8

[5, 7, 2] / 4; // NaN

'hello' / ' there'; // NaN
```

#### [modulus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) (remainder) **%**

The modulus operator will return a number representing the remainder from a division operation involving two numbers. For example, the modulus operation for `17` and `5` results in a value of `2`, which is the remainder from the division of 17 by 5. A smaller number divided by a larger number will result in a result less than 1 and the result of the modulus operation will be the first number.

```javascript
5 % 2; // 1

2 % '4'; // 2

8 % true; // 0

[5, 7, 2] % 4; // NaN

'hello' % ' there'; // NaN
```

#### [exponentiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) **\*\***

The exponentiation operation works by taking the first operand and raising it to the power of the second number.

```javascript
3 ** 3; // 27

2 ** '4'; // 16

5 ** true; // 5

7 ** 'two'; // NaN
```

#### [increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) **++**

The increment operator is technically a unary operator, but is included here due to it's operation with arithmetic. The increment operator can be added before or after a variable that's been assigned a numeric value. When the increment operator is placed after the operand, it will return the value of the operand before the increment operation and then increment the value by one. When the increment operator is placed before the operand, the value of the variable will be incremented by one and this is the value returned.

```javascript
let number = 5;

number++; // 5
number; // 6

let newNumber = 10;

++newNumber; // 11
newNumber; // 11
```

#### [decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement) **--**

The decrement operator works similarly to the increment operator, except it decrements the value of the variable by one.

```javascript
let number = 5;

number--; // 5
number; // 4

let newNumber = 10;

--newNumber; // 9
newNumber; // 9
```

## Relational operators

The next group of binary operators are relational operators. These operators compare two operands based on the type of relational operator and returns a boolean value. These operators are often used to compare numeric values.

#### [less than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) <

The less than operator will return true if the value of the left side of the operation is less than the value on the right side, otherwise it will return false.

```javascript
10 < 20; // true

2.7 < 2.7; // false

'ball' < 'car'; // true
```

#### [greater than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than) >

The greater than operator will return true if the value of the left side of the operation is greater than the value on the right side, otherwise it will return false.

```javascript
10 > 20; // false

2.7 > 2.7; // false

'ball' > 'car'; // false
```

#### [less than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal) <=

The less than or equal operator will return true if the value of the left side of the operation is less than or equal to the value on the right side, otherwise it will return false.

```javascript
10 <= 20; // true

2.7 <= 2.7; // true

'ball' <= 'car'; // true
```

#### [greater than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) >=

The greater than or equal operator will return true if the value of the left side of the operation is greater than or equal to the value on the right side, otherwise it will return false.

```javascript
10 >= 20; // false

2.7 >= 2.7; // true

'ball' >= 'car'; // false
```

## Equality operators

#### [equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) ==

The equity operator will return true if the two operands are equal. JavaScript will attempt to perform a type conversion as part of the equity check operation.

```javascript
4 == 4; // true

'hello' == 'hello'; // true

14 == '14'; // true

1 == true; // true

[1, 5, 10] == [1, 5, 10]; // false

let items = ['hat', 'cat', 'map'];
items == items; // true
```

#### [inequality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality) !=

The inequality operator will return true if the two operands are not equal. Similar to the equity operator, JavaScript will attempt to convert the type before the inequality comparison.

```javascript
10 != 20; // true

10 != '10'; // false

1 != true; // false

[1, 5, 10] != [1, 5, 10]; // true

let items = ['hat', 'cat', 'map'];
items != items; // false
```

#### [identity operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) ===

The identity operator is similar to the equity operator, but will apply a more strict level of comparison between the two operands. For example, two values that are the same, but have different types will return false when compared with the identity operator.

```javascript
'14' === 14; // false

1 === true; // false

120.5 === 120.5; // true

[1, 5, 10] === [1, 5, 10]; // false
```

#### [nonidentity operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) !==

The nonidentity operator will perform a comparison between two operands and return true if the two operands do not match in value or type.

```javascript
10 !== 20; // true

10 !== '10'; // true

1 !== true; // true

100 !== 100; // false
```

## Binary logical operators

#### [logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) &&

The logical AND operator will return true if all of its operands return true. The logical operator will return a boolean unless the second operand is a non-boolean value that returns true.

```javascript
true && true; // true

false && true; // false

5 > 4 && 'hello' != 'there'; // true

'' && true; // ''
```

#### [logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) ||

The logical OR operator will return true if one of the two operands returns true. If the left side operand is a falsy value then the right side operand will be returned.

```javascript
false || true; // true

false || false; // false

'hello' || false; // 'hello'

false || ''; // ''
```

#### [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) ??

The nullish coalescing operator will return the right hand side of the operation if the left side is either null or undefined. This operator can be used to return a default value in cases of a a null or undefined value.

```javascript
null ?? 'default value'; // 'default value'

false ?? 'default value'; // false

5 > 2 ?? 'default value'; // true
```

## Assignment operators

#### [assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) =

The assignment is used to assign a value to a variable.

```javascript
let name = 'bob';

let value = (4 + 5) / 2;
```

#### [multiplication assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment) \*=

The multiplication assignment will multiply the variable value by the value on the right side and assign the resulting value to the variable.

```javascript
let value = 4;
value *= 3;
value; // 12
```

#### [exponentiation assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment) \*\*=

The exponentiation assignment will raise the variable value to the power of the value on the right side and assign the resulting value to the variable.

```javascript
let value = 4;
value **= 2;
value; // 16
```

#### [division assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment) /=

The multiplication assignment will multiply the variable value by the value on the right side and assign the resulting value to the variable.

```javascript
let value = 4;
value /= 2;
value; // 2
```

#### [remainder assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment) %=

The remainder assignment will divide the variable value by the value on the right side and assign the remainder value to the variable.

```javascript
let value = 18;
value %= 2;
value; // 9
```

#### [addition assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment) +=

The addition assignment will add the variable value by the value on the right side and assign the resulting value to the variable.

```javascript
let value = 12;
value += 8;
value; // 20
```

#### [subtraction assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment) -=

The subtraction assignment will subtract the variable value by the value on the right side and assign the resulting value to the variable.

```javascript
let value = 12;
value -= 8;
value; // 4
```

#### [logical AND assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment) &&=

The logical AND assignment operator will assign the value on the right side of the operation with the value only if the value on the left side is truthy.

```javascript
let value = 12;
value &&= 8;
value; // 8

let value2 = null;
value2 &&= 10;
value2; // null
```

#### [logical OR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment) ||=

The logical OR assignment operator will assign the value on the right side of the operation with the value only if the value on the left side is falsy.

```javascript
let value = '';
value ||= 'default value';
value; // 'default value'

let value2 = 'some value';
value2 ||= 'default value';
value2; // 'some value'
```

#### [logical nullish assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment) ??=

The logical OR assignment operator will assign the value on the right side of the operation with the value only if the value on the left side is null or undefined.

```javascript
let value = '';
value ??= 'default value';
value; // ''

let value2 = null;
value2 ??= 'default value';
value2; // 'default value'
```
