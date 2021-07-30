---
title: 'JavaScript - Strings'
date: 2021-07-30 16:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-strings.jpg
---

Strings are representation of textual data in JavaScript and are fundamental to the language. Programs designed for user interaction almost always make use of strings as a key component.<!-- more --> In JavaScript, the [string data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) is wrapped by the String object that provides access to many useful methods that can be used for string manipulation.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Strings" %}

#### Creating strings

The most common way a string is created is by using string literals, which is simply a string value surrounded by quotes, double quotes, or back-ticks. A string can also be created using the String object to wrap around a primitive data.

**string literals**

The enclosing quotes or back-ticks cannot be interchanged at the start and end of a string literal, they must be the same.

```javascript
'mr. jones';
'hamburger and fries';
`sunday evening newspaper`;
```

**string object**

```javascript
let name = new String('hal hope');
```

String created either way have a number of properties available to them including a `length` property and the characters of a string can be accessed as values of an array.

```javascript
let myPlace = 'recording studio';
myPlace.length; // 16
myPlace[5]; // d

for (let i = 0; i < myPlace.length; i++) {
  if (myPlace[i] == 'd') {
    console.log('found letter d');
  }
}
// found letter d
// found letter d
```

#### Template literals

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are a fairly new feature to JavaScript (released as part of ES2015) that allow for embedding of expressions within a string. To use expressions within a template literal, the string must be enclosed within back-tick marks and the expression must use the following syntax - `${expression}` - to be interpreted by the program.

```javascript
let firstScore = 95;
let secondScore = 87;
let finalResult = `your final grade average is ${
  (firstScore + secondScore) / 2
}.`;
finalResult; // 'your final grade average is 91.'
```

It's also possible to create multi-line strings with template literals without the need explicitly to use special line-break characters.

```javascript
let myLocation = `123 Main St.
Washington D.C.
USA`;

myLocation; // '123 Main St.\nWashington D.C.\nUSA'
```

#### String methods

The many different [instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) available to use with the String object and add a lot of versatility and power when working with strings. Below is a list of many of the most useful methods, although there are several other methods beyond this list.

- **[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)** - if the string starts with the string passed as a parameter the method will return true, otherwise it will return false.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.startsWith('sea'); // false
myPhrase.startsWith('The'); // true
```

- **[endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)** - if the string ends with the string passed as a parameter the method will return true, otherwise it will return false.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.startsWith('boat'); // false
myPhrase.startsWith('port.'); // true
```

- **[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)** - if the string includes the string passed as a parameter the method will return true, otherwise it will return false.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.includes('sea'); // true
```

- **[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)** - will return the index number of the first location of the string passed as the parameter and `-1` if no match is found.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.indexOf('boat'); // 4
```

- **[lastIndexOf]()** - will return the index number of the last location of the string passed as the parameter up to the index position of an optional second parameter. The method will return `-1` if no match is found.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.lastIndexOf('boat'); // 47
```

- **[concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)** - returns string with one or more string parameters added to the string.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.concat(' The', ' End.'); // 'The boat went out to sea for a while, then the boat came back to port. The End.'
```

- **[split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)** - if the string matches the string passed as a parameter, an array of the strings excepting the string values passed as a parameter will be returned.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.split(','); // [ 'The boat went out to sea for a while', ' then the boat came back to port.' ];
```

- **[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)** - will return a string beginning at the index value of the first parameter and ending at the index value of the second optional parameter. If no second parameter is passed, the method will return the remainder of the string from the index location from the first parameter value.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.slice(4, 24); // 'boat went out to sea'
```

- **[substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)** - is similar to `slice` in that it will return a string beginning at the index value of the first parameter and ending at the index value of the second optional parameter. If no second parameter is passed, the method will return the remainder of the string from the index location from the first parameter value.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.substring(29); // 'a while, then the boat came back to port.'
```

- **[substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)** - returns string that begins at the index position of the first parameter and will extend for the length indicated by the second optional parameter. If no second parameter is passed, the method will return the remainder of the string from the index location from the first parameter value.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.substr(4, 9); // 'boat went'
```

- **[toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)** - will return a string with all the characters of the string as lower case.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.toLowerCase(); // 'the boat went out to sea for a while, then the boat came back to port.'
```

- **[toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)** - will return a string with all the characters of the string as upper case.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.toUpperCase(); // 'THE BOAT WENT OUT TO SEA FOR A WHILE, THEN THE BOAT CAME BACK TO PORT.'
```

- **[trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)** - will return a string with all the beginning and ending spaces removed.

```javascript
let myPhrase = '   boat went out to sea    ';
myPhrase.trim(); // 'boat went out to sea'
```

- **[trimStart]()** - will return a string with all the beginning spaces removed.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.trimStart(); // 'boat went out to sea    '
```

- **[trimEnd]()** - will return a string with all the ending spaces removed.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
myPhrase.trimEnd(); // '   boat went out to sea'
```

- **[repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)** - will return a string repeated the number of times as the number parameter.

```javascript
let myPhrase = 'the boat came back. ';
myPhrase.repeat(3); // 'the boat came back. the boat came back. the boat came back. '
```

#### Combinations

Several of the methods can be used in combinations and chained together to simply processes that would have to be done separately.

```javascript
let myPhrase = 'The boat went out to sea, then the boat came back to port.';
newPhrase = myPhrase
  .slice(myPhrase.indexOf('boat'), myPhrase.lastIndexOf('boat'))
  .trimEnd(); // 'boat went out to sea, then the'
```

#### Conclusion

Strings are everywhere in JavaScript and being able to work with them effectively, mostly by using the many already methods built into JavaScript will make things much easier when it's necessary to perform complex string manipulations.
