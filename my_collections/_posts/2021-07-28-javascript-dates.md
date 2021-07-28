---
title: 'JavaScript - Dates'
date: 2021-07-28 18:00:00
author: Robert Laws
categories: [learn]
tags: [javascript]
featured-image: blog-post-javascript-dates.jpg
---

It's common to need to access or make calculations with dates and times in JavaScript programs. To handle these situations, there are several date tools built into the language.<!-- more --> Specifically, JavaScript provides a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object that provides ways to create new dates and several methods to work with them. Dates in JavaScript come with built-in functionality to work with UTC (Coordinated Universal Time) dates and times.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JavaScript Dates" %}

#### Creating Dates

The [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) comes with a few different ways to create a new Date using the constructor:

1. by specifying date data parts - year, month, date, hours, minutes, seconds, and milliseconds

2. with a number that represents time stamp

3. with a date string

4. by calling the constructor without any parameter, which will return the current date and time

```javascript
// Using date parts
let july4thDate = new Date(2021, 6, 4, 0, 0, 0); // 2021-07-04T04:00:00.000Z

// using a time stamp number
let dateInThe1990s = new Date(721484611197); // 1992-11-11T12:23:31.197Z

// using a date string
let newYearsDate2000 = new Date('2000-01-01'); // 2000-01-01T00:00:00.000Z

// Date constructor without any parameters
let currentDate = new Date(); // 2021-07-28T15:12:42.769Z
```

When creating a [new Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) using date parts, there are a few important considerations to keep in mind for each parameter.

- **year** - is a required integer representing the year. Values 0 - 99 will be added to 1900. For example, 88 will produce a year of 1988.

- **month** - is a required index value from 0 - 11 that corresponds to each month of the year. For example, the index value 3 will produce a month of 4 (or April).

- **day** - is an optional integer representing the day of the month (1 is the default)

- **hours** - is an optional integer representing the hour of the day (0 is midnight)

- **minutes** - is an optional integer representing minutes of time

- **seconds** - is an optional integer representing seconds of time

- **milliseconds** - is an optional integer representing milliseconds of time

Some examples of creating dates with date parts:

```javascript
new Date(2021, 0, 12); // 2021-01-12T05:00:00.000Z

new Date(1999, 11, 31, 12, 59, 59); // 1999-12-31T17:59:59.000Z

new Date(2009, 5, 20, 10, 30, 15, 232); // 2009-06-20T14:30:15.232Z
```

Creating a new date by using the Date constructor without any parameters is equivalent to calling the `Date.now()` static method and will return the current date and time. After creating a new date with the constructor, a date object is returned that can then make use of the many instance methods available to the Date object.

#### Working with Dates and Time

The Date object provides [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods) to get and set all parts of a Date instance, including:

- FullYear
- Month
- Date
- Hours
- Minutes
- Seconds
- Milliseconds

These methods can be used with the wording `get` or `set` before each of the keywords. The `set` methods require an integer to be passed as a parameter.

```javascript
let myDate = new Date(2009, 5, 20, 10, 30, 15, 232);

myDate.getFullYear(); // 2009
myDate.setFullYear(2021); // 1624199415232
myDate.getFullYear(); // 2021

myDate.getDate(); // 20
```

There is another method, `getDay()` that returns an integer between 0 and 6 representing the day of the week.

```javascript
myDate.getDay(); // 0 (Sunday)
```

There are several other useful methods available to use with the `Date` object.

- **getTime()** - returns a number representing a time stamp

- **valueOf()** - like `getTime()`, returns a number representing a time stamp

- **toString()** - returns a fully formatted date and time string

- **toDateString()** - returns a formatted date string

- **toTimeString()** - returns a formatted time string

- **toLocaleDateString()** - returns a locally sensitive date string

- **toLocaleTimeString()** - returns a locally sensitive time string

```javascript
let myDate = new Date(2009, 5, 20, 10, 30, 15, 232);
myDate.getTime(); // 1245508215232
myDate.valueOf(); // 1245508215232
myDate.toString(); // 'Sat Jun 20 2009 10:30:15 GMT-0400 (Eastern Daylight Time)'
myDate.toDateString(); // 'Sat Jun 20 2009'
myDate.toTimeString(); // '10:30:15 GMT-0400 (Eastern Daylight Time)'
myDate.toLocaleDateString(); // '6/20/2009'
myDate.toLocaleTimeString(); // '10:30:15 AM'
```

#### Conclusion

Using the many resources available with the Date object, it's possible to create pre-formatted date strings or perform date and time calculations to find information such as time passed between two dates or the days of the week for date values. Although the `Date` object does have [some limitations](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/) - such as lack of support for timezones and formatting date strings in a way other than the few built-in formatting methods - working with dates isn't too tricky. The resources available to work with dates in JavaScript can handle many different situations that come up when working with dates and time.
