---
title: 'Responsive Design & Media Queries'
date: 2021-06-13 15:20:00
author: Robert Laws
categories: [learn]
tags: [css, responsive design]
featured-image: blog-post-responsive-design.jpg
---

Responsive design is the practice of designing webpages to maximize the visual appeal and usability of a webpage based on the type of device or screen size being used. The goal is to deliver the best possible user experience regardless of how a user arrives at a webpage.<!-- more --> At the heart of responsive design is the [CSS Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries). Using media queries allows the developer to target specific browser sizes or attributes to deliver styling customized for a particular device, resolution, or screen orientation.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Responsive Design & Media Queries" %}

## Learning Resources

There are several good resources to help learn about responsive design and media queries.

#### Responsive Design

The concept of responsive design has been around for a while now. Articles from 2010 (A List Apart) and 2011 (Smashing Magazine) describe the initial description of the concept of responsive design. Other articles reinforce the ideas from the initial stages and add new techniques to improve development with responsive design in mind.

- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [A List Apart - Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
- [Smashing Magazine - Responsive Web Design - What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)
- [Web.dev - Responsive web design basics](https://web.dev/responsive-web-design-basics/)
- [CSS-Tricks - Responsive Designs and CSS Custom Properties: Defining Variables and Breakpoints](https://css-tricks.com/responsive-designs-and-css-custom-properties-defining-variables-and-breakpoints/)

#### Media Queries

The two articles provide good information about the syntax and best practices for using media queries.

- [CSS-Tricks - A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [MDN - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

## Building Media Queries

The media query is composed of several pieces. There is a **media types** component, which describes the category of a device. Next, there is a **media features** component, which describes specific characteristics of the user agent or device. The media query can also include **logical operators** to add complexity to the query.

#### Media Types

Used to describe the general category of a device. The general options available include:

- **all** - suitable for all devices
- **print** - intended for printed or print preview modes
- **screen** - intended for screens
- **speech** - intended for speech synthesizers

#### Media Features

Used to test for a specific for the presence or a specific value of a characteristic of the user agent - for example, the test if the width of a screen is at a specific pixel size. Each media feature expression must be surrounded by parentheses.

Some examples ([several more are available](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features)) of features that can be used include:

- **aspect-ratio** - width-to-height aspect ratio of the viewport
- **orientation** - orientation of the viewport
- **resolution** - pixel density of the output device
- **width** - width of the viewport including width of the scrollbar

#### Logical Operators

The available logical operators include `not`, `and`, and `only`. Along with logical operators, commas can be used to combine multiple media queries into a single rule.

- **not** - used to negate a media query, returning true if the query would return false. A media type must be used if the _not_ operator is used
- **and** - used to combine multiple media features into a single media query. All of the chained features must return true for the query to be applied
- **only** - used to apply a style only if the entire query matches. Useful to prevent older browsers from mis-applying rules. A media type must be used if the _only_ operator is used
- **comma** - used to chain together multiple media queries into a single rule. Operates like a logical `or` operator in that if at least one of the queries matches, then the rule is applied even if the other rules don't

## Using Media Queries

A basic example of a media query that combines tests for a media type and media features:

```css
@media screen and (min-width: 600px) and (max-width: 1000px) {
  header {
    background-color: lightgreen;
  }
}
```

This media query will apply to the screen category and devices with a minimum width of 600px or greater and a maximum width of 1000px or less. Effectively, what this means is that for screens with a device width between 600px and 1000px, the header will have a background-color of `lightgreen`. For widths of all other sizes (less than 600px and greater than 1000px), the styling will not be applied.

#### Examples of Different Media Queries

Media queries can be designed to target a broad or specific set of page properties or characteristics. For example, there are a wide range of [Media Features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) that can be targeted with media queries, including things like colors, width, height, and more. Media queries can also be combined in a lot of different ways.

```css
@media screen and (min-width: 1000px) {
  .container {
    background-color: lightgray;
  }
}
```

This media query will target screens (the media type) and only be applied if the minimum width (the media feature) of the device is at least 1000px; It's also possible to combine several media features into a single media query.

```css
@media (min-width: 1000px) and (orientation: landscape) {
  .container {
    background-color: skyblue;
  }
}
```

Finally, multiple media queries can be combined with a comma to test for multiple types or features. If any of the queries matches, the entire media query is applied.

```css
@media (orientation: portrait), screen and (max-width: 1280px) {
  .container {
    background-color: crimson;
  }
}
```

## Using built-in responsive design features in combination with media queries

Both Flexbox and CSS Grid have some responsive design features built into them. These can be used to handle some of the issues that media queries might usually have addressed.

#### Flexbox

Flexbox allows content to wrap and this can be controlled by making use of the `flex-basis` property.

```html
<div class="container">
  <div class="item item-1">Item 1</div>
  <div class="item item-2">Item 2</div>
  <div class="item item-3">Item 3</div>
  <div class="item item-4">Item 4</div>
</div>
```

```css
.container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.item {
  border: 1px solid #000;
  background-color: coral;
  flex: 1 1 400px;
  padding: 10px;
}
```

This code example will create a container section with two columns of content when the width of the container is greater than 840px wide. When it is less than this amount, flexbox instructs the flex items to wrap, forming a single column.

#### CSS Grid

CSS Grid allows things like grid columns to be adjustable using utilities like the `minmax()` function.

```html
<div class="container">
  <div class="item item-1">Item 1</div>
  <div class="item item-2">Item 2</div>
  <div class="item item-3">Item 3</div>
  <div class="item item-4">Item 4</div>
  <div class="item item-5">Item 5</div>
  <div class="item item-6">Item 6</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.item {
  background-color: beige;
  padding: 10px;
}
```

Here the grid container creates columns using the `repeat()` function and the `auto-fill` value to create as many columns as needed based on the sizing requirements of the columns. The size of each column is determined by the `minmax()` function, which says that each columns should be a minimum of `500px` and a maximum of `1fr` unit.

In a more complex example, media queries can be used in combination with CSS Grid to reshape the grid as the viewport width increases. This example takes a mobile-first approach, creating a one-column grid for all the grid items. As the viewport widens to `1000px`, the first media query is applied and the grid becomes 3 columns. Finally, when the viewport increases to `1280px`, the grid increases to 4 columns and the width of the grid container is centered at a size of `1280px`.

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media screen and (min-width: 1000px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }

  header {
    grid-column: 1 / 4;
  }

  nav {
    grid-column: 1 / 4;
  }

  main {
    grid-column: 1 / 3;
  }

  aside {
    grid-column: 3 / 4;
  }

  footer {
    grid-column: 1 / 4;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    width: 1280px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }

  header {
    grid-column: 1 / 5;
  }

  nav {
    grid-column: 1 / 5;
  }

  main {
    grid-column: 1 / 3;
  }

  aside {
    grid-column: 3 / 5;
  }

  footer {
    grid-column: 1 / 5;
  }
}
```
