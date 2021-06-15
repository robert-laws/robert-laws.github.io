---
title: 'Basics of CSS Animation'
date: 2021-06-15 15:00:00
author: Robert Laws
categories: [learn]
tags: [css, css animation]
featured-image: blog-post-basics-of-css-animation.jpg
---

CSS Animations can add some polish and shine to website. They can also be useful to provide users with some visual feedback about the user interface.<!-- more --> Although there are some concerns about using CSS animation for critical aspects of a website - especially where use of CSS animation compromises accessibility - if used carefully, they can enhance a website in some very appealing ways.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Basics of CSS Animation" %}

To make use of basic CSS animations, it's important to understand the concepts of [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions), [transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms), and [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) in the CSS context. These concepts support the creation of simple animations, like the gradual change of the color for a button, to complex animations, like moving an object on the screen and simultaneously changing it's shape and opacity.

## Transition

Transitions will apply a controlled change from one CSS property to another. CSS developers can control aspects of the transition including the property, the duration, timing function, and delay of a transition.

The basic structure of a transition looks like the following:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

Each of these aspects of the transition can be defined individually.

- **transition-delay**: duration of time to wait before applying the transition
- **transition-duration**: duration of time that the transition should take to complete
- **transition-property**: property targeted by the transition
- **transition-timing-function**: definition of the acceleration curve for the transition

Changes to multiple properties can be specified individually with commas between each individual property or by using the `all` keyword to target all of them at once.

```css
.box {
  padding: 10px;
  border: 1px solid #555;
  width: 100px;
  height: 100px;
  background-color: lightgray;
  transition: all 0.4s ease-out 0.2s;
}

.box:hover {
  height: 120px;
  width: 120px;
  color: white;
  background-color: dodgerblue;
  box-shadow: 0px 0px 10px black;
}
```

In this example, the transition is triggered by the `:hover` pseudo-class selector and applies `transition: all 0.4s ease-out 0.2s;` which will transition `all` properties between the two states in `0.4` seconds with an `ease-out` timing function and a delay of `0.2` seconds.

## Transform

Transformations can be made to elements on a webpage and include rotation, scaling, skewing, or translating the element. Transformations are applied to the center of an element by default, but this can be modified by using the `transform-origin` property.

```css
.box {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  transform: rotate(45deg);
  transform-origin: top left;
}
```

The `transform` property can accept two values. Either a `<transform function>` or a value of `none`.

There are several different _transform-functions_ that can be applied to a transform property. Some of the transform functions include:

- **rotate()** - used to rotate an element around a fixed point on the 2D plane
- **scale()** - used to scale an element up or down on the 2D plane
- **skew()** - used to skew an element on the 2D plane
- **translate()** - used to translate (or move) an element on the 2D plane.
- Also useful are **translateX()** and **translateY()** to translate along either the X or Y axis

## Animation

CSS animations allows for a transition from one CSS property to another to be animated. This is done by defining the style that will be animated and defining a set of keyframes that indicate the start, waypoints, and end states for the animation.

To setup an animation the first step is to define it using the `animation` property to configure the name, duration, timing-function, delay, iteration count, direction, fill-mode, and play-state. Once the animation is defined, it's possible to define the appearance of the animation with the `@keyframe` rule. At least two keyframes are required and more can be added to provide more description of the animation at intermediate stages of a sequence.

The configuration options for the animation property can be defined separately as individual sub-properties.

- **animation-name** - Specifies the name of the @keyframes at-rule describing the animation’s keyframes.
- **animation-duration** - Configures the length of time that an animation should take to complete one cycle.
- **animation-timing-function** - Configures the timing of the animation; that is, how the animation transitions through keyframes, by establishing acceleration curves.
- **animation-delay** - Configures the delay between the time the element is loaded and the beginning of the animation sequence.
- **animation-iteration-count** - Configures the number of times the animation should repeat; you can specify infinite to repeat the animation indefinitely.
- **animation-direction** - Configures whether or not the animation should alternate direction on each run through the sequence or reset to the start point and repeat itself.
- **animation-fill-mode** - Configures what values are applied by the animation before and after it is executing.
- **animation-play-state** - Lets you pause and resume the animation sequence.

#### Basic Animation

The first thing to do is add some values to the animation property, either as a single short-hand definition using the `animation` property, or as individual entries for the animation sub-properties. Once the animation is defined, it's possible to define the keyframes, applying the animation name defined for the element to be animated. The options for the `@keyframes` rule include using the `from` and `to` keywords to indicate the start and end of the keyframes. It's also possible to define the steps for the keyframes as percentages starting at `0%` and going to `100%` with as many steps with different percentage values in between.

```css
.box {
  /* basic styles... */

  animation-name: moveBox;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-iteration-count: 4;
}

@keyframes moveBox {
  from {
    left: 100px;
  }

  to {
    left: 500px;
  }
}

@keyframes moveBoxAround {
  0% {
    left: 50px;
  }

  50% {
    left: 1000px;
    top: 200px;
  }

  100% {
    left: 50px;
  }
}
```

This animation - applying the `moveBox` animation - moves the box from the left at 100px to left at 500px. The `animation` property can be re-written in the following way:

```css
.box {
  /* animation: name | duration | easing-function | delay | iteration-count */
  animation: moveBox 3s ease-in 1s 4;
}
```

#### Multiple Animations

It's possible to run multiple animations on a single element, each animation with a different set of property values and `@keyframe` rules. The animations will all be applied to the element and run according to the values specified.

```css
.box {
  /* styles for the element... */

  animation-duration: 4s, 8s;
  animation-name: moveAround, fadeOut;
  animation-timing-function: linear, ease-out;
  animation-iteration-count: infinite, 1;
}

@keyframes moveAround {
  0% {
    left: 20px;
    top: 20px;
  }

  25% {
    left: 300px;
    top: 20px;
  }

  50% {
    left: 300px;
    top: 300px;
  }

  75% {
    left: 20px;
    top: 300px;
  }

  100% {
    left: 20px;
    top: 20px;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
```

These animations will move the element around, with the `moveAround` animation going through keyframes based on the percentages for each part of the animation and the `fadeOut` animation will going through the keyframes starting with the `from` keyword and ending at the `to` keyword.
