---
title: 'JavaScript - Objects'
date: 2021-07-21 19:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-objects.jpg
---

Objects in JavaScript in their most basic definition are used to store data in key, value entries. Objects are a core building block of many programs in JavaScript and are used for things like storing complex data, building classes, and as an integral part of object-oriented program.<!-- more --> Within an object, a keyed value that stores data is called an object property. A keyed value that stores a function is called an object method. Although objects can be very complex, there are several important core concepts that are important to know first.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Objects" %}

This article introduces many core concepts about objects in JavaScript. This article follows along with the MDN documentation on [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) and their guide on [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics), both which are very helpful resources.

#### Creating objects

There are two ways to create a new object. The first way is by using the Object constructor to create a new object. The other and more straight-forward way to create a new object is by using object literal syntax.

**Object Constructor**

A new object can be created using the `Object` constructor, which accepts a value that will be wrapped by an object. An object created using the Object constructor without a value or either `null` or `undefined` will create an empty object.

```javascript
let myPlace = new Object();
myPlace; // {}

let myPet = new Object({ type: 'dog', breed: 'terrier' });
myPet; // { type: 'dog', breed: 'terrier' }
typeof myPet; // 'object'
```

**Object Literal**

An object can be created directly without need of the Object constructor by assigning a value to a variable using the object syntax.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
};

myPet; // { type: 'dog', breed: 'terrier' }
typeof myPet; // 'object'
```

#### Accessing properties in an object

There are two main ways to access properties from an object, _dot notation_ and _bracket notation_.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
};

myPet.type; // 'dog'
myPet['breed']; // 'terrier'
```

#### Assigning object properties

Using both dot and bracket notation, it's possible to reassign a property value or to assign new property names and values. It's also possible to assign a property with a custom name, including spaces, but these have to be written using bracket notation.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
};

myPet.breed = 'poodle';
myPet.name = 'Spot';
myPet['age'] = 4;
myPet['prizes won'] = 5;
myPet; // { type: 'dog', breed: 'poodle', name: 'Spot', age: 4, 'prizes won': 5 }
```

#### Creating sub-objects within an object

An object property can be any type of data, including another object. It can be assigned just like other property assignments. Accessing properties of a sub-object can be done by using the dot and bracket notation to look deeper into the object.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
};

myPet.owner = { name: 'bob', age: 32 };
myPet; // { type: 'dog', breed: 'terrier', owner: { name: 'bob', age: 32 } }

myPet.owner.name; // 'bob'
myPet['owner']['age']; // 32
```

#### Removing a property from an object

It's possible to assign a value of `undefined` to a property to remove its value. To remove the property name and value, the `delete` unary operator can be used to accomplish this.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
};

myPet.breed = undefined;
myPet; // { type: 'dog', name: undefined }

delete myPet.breed;
myPet; // { type: 'dog' }
```

#### Using methods (functions) to an object

Functions can be added to objects, which are called methods when included within objects. They can be added as anonymous functions with a property name. A method can be called and executed by using the dot notation with a function call.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
  communicate: function () {
    console.log('my pet communication');
  },
};

myPet.communicate(); // my pet communication
```

Methods can reference properties within the object by using the keyword `this` to indicate that the function should use the current object context.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
  communicate: function () {
    console.log(`my ${this.type} communication`);
  },
};

myPet.communicate(); // my dog communication
```

Methods can also accept parameters that are passed to it when the method is called.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
  communicate: function (speak) {
    console.log(`my ${this.type} says ${speak}`);
  },
};

myPet.communicate('bark'); // my dog says bark
```

#### Object methods

There are several [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods) and [instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#instance_methods) methods available for the `Object` class. Two important class methods are [keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) and [values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values), which can be used to return an array with the names and values of each property of the object respectively.

```javascript
const myPet = {
  type: 'dog',
  breed: 'terrier',
  owner: {
    name: 'bob',
    age: 32,
  },
  communicate: function (speak) {
    console.log(`my ${this.type} says ${speak}`);
  },
};

Object.keys(myPet); // [ 'type', 'breed', 'owner', 'communicate' ]
Object.values(myPet); // [ 'dog', 'terrier', { name: 'bob', age: 32 }, [Function: communicate] ]
```

#### Conclusion

Mastering objects in JavaScript is essential since objects are used throughout most JavaScript programs. Understanding the basics of object creation, properties, methods, and accessing data will make handling complex object use in advanced JavaScript programs a lot easier.
