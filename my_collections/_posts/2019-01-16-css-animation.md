---
title: CSS Animation
date: 2019-01-16 14:41:23
date_updated: 2019-02-02 14:41:23
author: Robert Laws
categories: [css]
tags: [css]
featured-image: blog-css-animation.jpg
---
Inspired by the Medium post - [A Guide to CSS Animation](https://codeburst.io/a-guide-to-css-animation-part-1-8777f5beb1f8) by Jhey Tompkins and the book [CSS: The Definitive Guide: Visual Presentation for the Web, 4th Edition](https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195) by Eric A. Meyer and Estelle Weyl.<!-- more -->

CSS Animations add a degree of polish to a user interface. Animations can give users valuable information about how to use a website. Animations also can reflect on a high degree of professionalism and set it apart from websites that don't use animations. Animations can be applied via CSS using two common methods - `transition` and `animation`.

## Transform

There are several ways to change the position or shape of an element using the transform property. By itself, transform will be applied to an element without any animation.

**Translate**

```css
/* translation functions accepts a length or percentage value */
div {
  transform: translate(100px, 20%);
}

h2 {
  transform: translateX(200em);
}

aside {
  transform: translateY(10%);
}
```

**Scale**

```css
/* scale functions accept a number value */
section {
  transform: scale(2); /* will scale along the X and Y axes the same value */
}

article {
  transform: scale(3, 0.5);
}

div.picture {
  transform: scaleY(2.5);
}
```

**Rotate**

Rotation occurs as a flat 2 dimensions without using changing the perspective unless this is specified as with using the perspective() function.

```css
/* rotate functions accept an angle value - degrees, gradians, radians or turns */
div {
  transform: rotate(45deg);
}

h3 {
  transform: rotate(1turn);
}
```

**Perspective**

Perspective is needed for elements that are transformed in 3D space. Lower numbers result in more extreme perspective versus higher numbers.

Perspective can be applied two ways.

1. As a function within the transform property definition:

1. As a property

```css
/* perspective as a function */
div {
  transform: perspective(200px) rotateX(45deg);
}

/* perspective as a property */
div.pictures {
  perspective: 400px;
}
```

**Transform-Origin**

```css
/* transform-origin - default behavoir is to rotate an object around it's center */
div {
  transform-origin: 0 100%;
  transform: rotate(45deg);
}
```

**Transform-Style**

```css
/* transform-style - either the values flat or preserve-3d */
div {
  transform: perspective(300px) rotateX(25deg);
  transform-style: preserve-3d;
}
```

```css
/* perspective-origin - defining the point where the sight lines convere */
div {
  perspective: 500px;
  perspective-origin: 0 10%;
}
```

## Transition

Using the transition property in conjunction with properties like transform or opacity will produce an animation. The animation can be applied upon rendering of the element or using other means like a `:hover` pseudo-class.

**Transition**

```css
/* transitions are applied to elements using transition properties */
div {
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in;
  transition-delay: 50ms;
}

div:hover {
  transform: rotate(360deg);
  transform-origin: center center;
}
```

Multiple properties can be transitioned at once by using the `all` value for the `transition-property` property. The shorthand for the transition property is `transition: transition-property transition-duration transition-timing-duration transition-delay`.

```css
/* transition scale and opacity */
div {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: all 3s ease-out 1s;
}

div:hover {
  opacity: 0.5;
  transform: scale(1.25);
}
```

## Working Example - Transition

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="robert_laws" data-slug-hash="NojXYR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Animation - Transition">
  <span>See the Pen <a href="https://codepen.io/robert_laws/pen/NojXYR/">
  CSS Animation - Transition</a> by Robert Laws (<a href="https://codepen.io/robert_laws">@robert_laws</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Keyframes

Defining keyframes allows for significant power over the application of animations in CSS. Using the keyframes feature also allows for organization of animations and the ability to apply multiple keyframe animations to a single element.

**Setting up Keyframes**

```css
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    background-color: red;
  }
  100% {
    transform: scale(1);
  }
}
```

**Applying Keyframes for an Animation**

```css
div {
  animation: grow 2s ease-in 0.2s infinite normal;
}

button {
  animation: grow 1s, fadeout 2s;
}
```

## Working Example - Keyframes and Animation

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="css,result" data-user="robert_laws" data-slug-hash="VgbywG" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Animation - Keyframes">
  <span>See the Pen <a href="https://codepen.io/robert_laws/pen/VgbywG/">
  CSS Animation - Keyframes</a> by Robert Laws (<a href="https://codepen.io/robert_laws">@robert_laws</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>