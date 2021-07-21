---
title: 'JavaScript - Arrays'
date: 2021-07-20 19:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-arrays.jpg
---

Arrays at their most basic level are collections (or lists) of data. Since programs are constantly working with data, arrays are used extensively in JavaScript. A typical program will add data to list, like products in a shopping cart, which can be stored in an array.<!-- more --> The shopping cart array can have items added, removed, and rearranged. To accomplish tasks like this, arrays come with many built-in methods that provide a lot of flexibility when working with them. This article will examine how to create arrays, access data with them, and work with arrays.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Arrays" %}

There is extensive support for arrays including a [detailed MDN article on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

#### Creating an Array

Arrays can be created using the array literal syntax or using the Array constructor.

```javascript
// array literal syntax
let cart = ['pencil', 'hat', 'paper', 'belt'];
// creates an array with a length of 4 and defined content
```

The Array Constructor can be used to create an empty array of no length, an array of a specified length, and an array with specified content. Creating an array with the Array Constructor is equivalent to using the array literal syntax.

```javascript
let cart = new Array();
// creates an array with a length of 0 and no content

let cart2 = new Array(3);
// creates an array with a length of 3 and undefined content

let cart3 = new Array('pencil', 'map', 'shirt');
// creates an array with a length of 3 and defined content
```

## Arrays Basics

#### Array length property

The property `length` is the one property available for arrays. It returns a number that equals the number of items held in the array.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.length; // 4
```

#### Accessing items inside an array

Arrays are index-based, meaning that each item in an array corresponds with an zero-based index number. The first item in the array has an index of 0. The next item has an index of 1, and so on. Items within an array maintain their order, which corresponds to the index value. This provides some predictability since the items in the array will always be located at the same index unless changed by the program.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart[0]; // 'pencil'
cart[2]; // 'paper'
cart[5]; // undefined
```

## Array Methods

The array class has one class method and several instance methods. A key concept of working with arrays and instance methods is how they change or do not change the original array. A method that takes in an array and modifies the original array is called destructive. It's considered destructive because the original array is destroyed and a new array takes its place. In contrast to this, methods that take in an array and after completion leaves its original array unchanged is called nondestructive. The original array emerges unchanged after the method completes. This is an important concept because there are situations where it's important to maintain the integrity of original data when working with array data.

**[isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)**

The Array class has a method called isArray() that accepts a variable value and will return a boolean depending on whether or not it is an array or not.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
Array.isArray(cart); // true
Array.isArray('pencil'); // false
```

#### Destructive methods to add to or remove from an array

**[shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)**

Removes the first element from the array and returns it. Returns undefined if the array is empty. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.shift(); // 'pencil'
cart; // ['hat', 'paper', 'belt']
```

**[unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)**

Inserts the passed element to the beginning of the array. If several items are passed as multiple parameters, they are added to the array in the order listed as parameters. The return value is the new length of the array. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.unshift('map'); // 5
cart; // ['map', 'pencil', 'hat', 'paper', 'belt'];
```

**[pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)**

Removes the last element from the array and returns it. Returns undefined if the array is empty. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.pop(); // 'belt'
cart; // ['pencil', 'hat', 'paper']
```

**[push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**

Inserts the passed element to the end of the array. If several items are passed as multiple parameters, they are added to the array in the order listed as parameters. The return value is the new length of the array. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.push('map'); // 5
cart; // ['pencil', 'hat', 'paper', 'belt', 'map'];
```

**[splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)**

Modifies an array by removing and or replacing elements from an array starting at a designated index within the array. The return value is the removed items. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.splice(1, 2); // ['hat', 'paper'];
cart; // ['pencil', 'belt']
```

The method can accept additional parameters, which are inserted into the array at the location where the elements are removed from the array.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.splice(1, 2, 'printer', 'computer', 'hard drive'); // ['hat', 'paper'];
cart; // ['pencil', 'printer', 'computer', 'hard drive', 'belt']
```

#### Nondestructive methods to concat, slice, or join arrays

**[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)**

Merges two arrays and returns a new array that is a combination. Multiple arrays can be combined by adding them as individual parameters. The original arrays are unmodified.

```javascript
let cart1 = ['pencil', 'pen', 'marker'];
let cart2 = ['hat', 'cap', 'belt'];
let combinedCart = cart1.concat(cart2);
combinedCart; // [ 'pencil', 'pen', 'marker', 'hat', 'cap', 'belt' ]

cart1; // ['pencil', 'pen', 'marker'];
cart2; // ['hat', 'cap', 'belt'];
```

**[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**

Creates a new array copying from an original array from a specified starting index location and copying all items up to an optional ending index location. Negative numbers can be used, indicating how much to offset from the end of the array as the starting index. The original array is unmodified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.slice(1); // [ 'hat', 'paper', 'belt' ]
cart.slice(1, 3); // [ 'hat', 'paper' ]
cart.slice(-2); // [ 'paper', 'belt' ]

cart; // ['pencil', 'hat', 'paper', 'belt'];
```

**[join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)**

Creates a string by combining all the items within an array. An optional separator parameter can be passed, which is either a string or will be attempted to be converted to a string. The separator will be placed before all items in the array, but not before the first or after the last. If no separator is defined, a comma is placed between the items.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.join(); // 'pencil,hat,paper,belt'
cart.join(' '); // 'pencil hat paper belt'
cart.join('--'); // 'pencil--hat--paper--belt'
```

#### Destructive sorting and reversing

**[reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)**

Reverses the values in an array and returns the modified array. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.reverse(); // [ 'belt', 'paper', 'hat', 'pencil' ]
cart; // [ 'belt', 'paper', 'hat', 'pencil' ]
```

**[sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)**

Sorts the array into ascending order by default if the optional parameter comparison function is not present. The compare function will compare the two numbers and depending on the result of the comparison and move the numbers to the correct position in the array. The original array is modified.

```javascript
let numbers = [2, 5, 1, 4, 3];
numbers.sort(); // [1, 2, 3, 4, 5]

function compareNumbers(a, b) {
  return a - b;
}
numbers.sort(compareNumbers); // [1, 2, 3, 4, 5]

function compareNumbersDesc(a, b) {
  return b - a;
}
numbers.sort(compareNumbersDesc); // [ 5, 4, 3, 2, 1 ]
```

#### Searching the array for specific values

**[indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)**

Finds the index location of the first matching item and returns the index value. The search is done using strict equality `===` and will return `-1` if no match is found. The method also accepts an optional second parameter, startIndex, which indicates which index location the search for a match should begin. A negative number for startIndex will begin the search from an offset index location.

```javascript
let numbers = [2, 6, 8, 1, 7, 2, 7, 9, 2, 15, 37];
numbers.indexOf(7); // 4
numbers.indexOf(10); // -1
numbers.indexOf(2); // 0
numbers.indexOf(2, 4); // 5
numbers.indexOf(2, -3); // 8

numbers.indexOf('15'); // -1

let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.indexOf('hat'); // 1
cart.indexOf('bubble'); // -1
```

**[lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)**

Finds the index location of the first matching item starting backwards from the end of the array and returns the index value. The search is done using strict equality `===` and will return `-1` if no match is found. The method also accepts an optional second parameter, startIndex, which indicates which index location the search for a match should begin. A negative number for startIndex will begin the search from an offset index location.

```javascript
let numbers = [2, 6, 8, 1, 7, 2, 7, 9, 2, 15, 37];
numbers.lastIndexOf(2); // 8
numbers.lastIndexOf(15); // 9
numbers.lastIndexOf(2, 5); // 5
numbers.lastIndexOf(2, -4); // 5
```

#### Nondestructive iteration

The first group of array iterative methods work with arrays and review the content of arrays, allowing the programmer to use the output to make evaluations.

**[forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)**

Iterates over each value within the array. Accepts a callback function as a parameter, which itself accepts up to three parameters, the iterated element from the array, the index of the current iteration, and the enter array being called upon by the `forEach` method.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];

cart.forEach(function callback(item, index) {
  console.log(`index: ${index} for item: ${item}`);
});

// index: 0 for item: pencil
// index: 1 for item: hat
// index: 2 for item: paper
// index: 3 for item: belt
```

**[every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)**

Performs an evaluation on each item in the array and returns true if every item returns true and false if at least one item returns false.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];

cart.every((word) => word.length > 3); // false
```

**[some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)**

Performs an evaluation on each item in the array and returns true if at least one item returns true and false if all items returns false.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];

cart.some((word) => word.length > 3); // true
```

**[find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)**

Will return the first element in an array that matches a testing function. If nothing matches, undefined is returned.

```javascript
let people = [
  { name: 'bob', age: 24 },
  { name: 'kal', age: 46 },
  { name: 'mel', age: 33 },
];

people.find((person) => person.age > 30); // { name: 'kal', age: 46 }
```

**[findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)**

Will return the index value of the first element in an array that matches a testing function. If nothing matches, -1 is returned.

```javascript
let people = [
  { name: 'bob', age: 24 },
  { name: 'kal', age: 46 },
  { name: 'mel', age: 33 },
];

people.findIndex((person) => person.age > 30); // 1
```

**[includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)**

Checks the values within the array and returns true if a match is found and the array includes the value. Returns false if no match is found and the array does not include the value.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.includes('hat'); // true
cart.includes('button'); // false
```

The next group of array iterative methods take in the original array and return a new array based on some processing or evaluation of the original array.

**[map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**

Will return a new array based on the result of a callback function that iterates over each item within an array. Best used for situations where an array will be used based on all the elements within an array.

```javascript
let numbers = [2, 6, 8];

let double = numbers.map((number) => number * 2);

double; // [ 4, 12, 16 ]
```

**[filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**

Will return a new array based on a comparison function returning elements that return true and omitting elements that return false. Best for situations where an array will be used based on a filtered array.

```javascript
let people = [
  { name: 'bob', age: 24 },
  { name: 'kal', age: 46 },
  { name: 'mel', age: 33 },
];

let youngerPeople = people.filter((person) => {
  if (person.age < 40) {
    return person;
  }
});

youngerPeople; // [ { name: 'bob', age: 24 }, { name: 'mel', age: 33 } ]
```

The last group of array iterative methods produce a result based on the array's elements.

**[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)**

Executes a user-provided reducer function on each item within an array and returns the final result. Makes use of accumulator argument, which holds the result as it iterates over the array and a current value argument, which is the value of the element of the array as it is being iterated over. The reduce function also accepts an optional initial value parameter.

```javascript
let ages = [25, 28, 32, 35, 28, 20];
let initialValue = 200;

let totalAges = ages.reduce((total, age) => total + age, initialValue);

totalAges; // 368
```

**[flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)**

Will create a new array with all the sub-array elements of the provided array concatenated. The method accepts an optional depth parameter.

```javascript
let numbers = [[1, 4], 6, 1, [6, 1, 8], 8];
numbers.flat(); // [ 1, 4, 6, 1, 6, 1, 8, 8 ]

let newNumbers = [
  [1, 4],
  [2, [4, 9]],
];
newNumbers.flat(); // [ 1, 4, 2, [ 4, 9 ] ]
newNumbers.flat(2); // [ 1, 4, 2, 4, 9 ]
```

**[flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)**

Combines the functionality of `flat()` and `map()` to simultaneously map elements to a new array and flatten the newly created array.

```javascript
let motto = ['to be', 'or not', 'to be, that is the question'];
let mottoWords = motto.flatMap((part) => part.split(' '));
mottoWords; // [ 'to', 'be', 'or', 'not', 'to', 'be,', 'that', 'is', 'the', 'question' ]
```

#### Conclusion

Mastery of JavaScript arrays are a must for any programmer since they're used extensively and the methods available to work with arrays allow many different types of manipulations. This article provides just a taste of how to work with arrays and make use of the different methods available. The list of methods is not comprehensive, but covers many of the most important methods.
