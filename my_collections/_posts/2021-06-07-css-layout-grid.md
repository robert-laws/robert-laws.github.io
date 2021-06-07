---
title: 'CSS Layout Grid'
date: 2021-06-07 15:00:00
author: Robert Laws
categories: [learn]
tags: [css, grid]
featured-image: blog-post-css-layout-grid.jpg
---

One of the most challenging aspects of building webpages is managing layout. HTML and CSS offer several different methods to control layout. The layout options include using normal flow, floats, multi-column layout, flexbox, and CSS Grid.<!-- more --> To allow for more complex layouts, [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) aims to be a major step forward by giving developers more control over layout and arrangement of elements on a web page.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="CSS Layout Grid" %}

## Great Learning Resources

There are several really good and helpful resources available to learn CSS Grid. Here's a quick rundown of resources that helped me learning CSS Grid.

- [A Complete Guides to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - CSS-Tricks
- [Learn CSS Grid](https://learncssgrid.com)
- [Grid in CSS](https://cssreference.io/css-grid/)
- [Grid Cheatsheet](https://yoksel.github.io/grid-cheatsheet/)

Visual Examples of Layouts

- [Visual Cheatsheet for Grid Layout](https://grid.malven.co)
- [CSS Layout](https://csslayout.io)

Interactive Grid Building tools

- [Layoutit!](https://grid.layoutit.com)
- [Griddy - Learn the CSS Grid](https://griddy.io)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app)

Fun and Games - to learn CSS Grid

- [Grid Garden](https://cssgridgarden.com)

## Setting up the Grid

CSS Grid works by creating a grid container using the `display: grid` property. The immediate children of the grid container are called grid items.

An essential feature of using CSS Grid is setting up the columns and rows to be used in the grid. This is done with the `grid-template-columns` and `grid-template-rows` properties. There are many different ways to set up a grid.

Let's say we want a grid with five columns. There's a few ways to set this up.
To build columns, we'll use the `grid-template-columns` property. To create five columns it's necessary to add five values, on for each column.

```css
.container {
  display: grid;
  grid-template-columns: 20rem 100px auto 30% 25em;
}
```

As shown in the code sample, it's possible to add sizes using different units of measurement, including `px`, `em`, `rem`, `%`, and `auto`. CSS Grid also introduces a new unit, `fr`, which means fractional unit. This is used by assigning size to the grid based on values entered and dividing up the remaining space based on a division of fractional units.

```css
.container {
  display: grid;
  grid-template-columns: 15rem 1fr 2fr;
}
```

In the example above, `15rem` is assigned and the remaining space is divided between the two columns, the 2nd column getting `1fr` out of 3 units and the last column getting `2fr` out of 3 units.

The same concepts for columns work for rows. Adding the `grid-template-rows` property allows for the explicit creation of grid rows.

```css
.container {
  display: grid;
  grid-template-columns: 15rem 1fr 2fr;
  grid-template-rows: 20rem 400px;
}
```

This addition establishes two explicit rows in the grid. The row sizes are defined by units. This code creates a grid that is 3 columns by 2 rows and creates 6 total grid cells. Now it's time for content to flow into the grid.

```html
<div class="container">
  <h1>Title</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, totam.</p>
  <img src="sun.jpg" alt="Sun" />
  <h4>Image subtitle</h4>
  <p>Velit dolor unde explicabo illum ipsa temporibus, hic sed error.</p>
  <div>Additional content</div>
</div>
```

The HTML above includes a `<div class="container">` that is used as a grid container. The 6 elements that are the immediate children of the div are the grid items. Since there are only 6 items, each one will fit into the 6 grid cells defined in the CSS code above. If another grid item is added, however, this will now be a total of 7 children element. In this case, CSS Grid will automatically create a new row to include this element. The new row constitutes what is known as the implicit grid - automatically added to the grid, although not explicitly defined.

There are certain situations where a developer does not know exactly how many rows may be needed for a grid - in the case of repeating or auto-generated content, for example. In these situations, it's possible to make use of the `grid-auto-columns` and the `grid-auto-rows` properties. These properties set a pre-determined size for implicitly created columns and rows.

There are many situations where a `grid-template-columns` and `grid-template-rows` property will include multiple entries of the same value. To save developers from having to write the same values repeatedly, CSS grid has a `repeat()` feature the can minimize extra writing. For example, to create a grid that has five equally sized columns, the following can be used: `grid-template-columns: repeat(5, 1fr);`.

Another issue that often arises is that a column or row that is explicitly sized can sometimes be too small for its content, which results in the content overflowing the grid item. For situations like this, CSS Grid provides a `minmax()` function. This allows the creation of a minimum value that should be used and a maximum value to account for content that requires space beyond the minimum specified. For example, using the following: `grid-template-rows: minmax(200px, 500px);` a grid row will be sized to `200px` unless its content is larger, in which case it will grow to up to `500px` to allow for more content. Another variation of this can be: `grid-template-rows: minmax(200px, auto);`. Here, a row would size to at least `200px` and grow as much as needed with the `auto` keyword.

Another useful feature is the ability to add a gap between columns or rows or both. This is done with the `column-gap`, `row-gap`, and shorthand `gap` properties.

```css
.container {
  column-gap: 2rem;
  row-gap: 4px;
  /* OR */
  gap: 4px 2rem; /* row column */
}
```

## Working with the Grid

The way that grid items flow into the grid is that the first child item will fill the grid cell starting with the first column and first row. Each subsequent item will be placed in the next grid cell along the first row. Once all the grid cells are filled along the first row, the next item will take the space of the grid cell in the first column and the second row. The items will continue to flow into the grid until all the items have been placed.

There are several different ways to control how and where grid items occupy space within the grid. One way is to make use of line names to tell grid items where to begin and end along the columns and rows.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 225px 225px 225px;
  gap: 10px;
}
```

Consider the grid above. It has five columns, each `1fr` unit and three rows, each sized to `225px`. This establishes a 5x3 grid with a total of 15 grid cells. When each column and row is created with the above code, line-names are automatically created starting with 1 and continuing to the end of the column or row.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 225px 225px 225px;
  gap: 10px;
}
```

For example, for the grid created by the CSS above, the track lines are automatically created to look like this: `[1] 1fr [2] 1fr [3] 1fr [4] 1fr [5] 1fr [6];`. What this means is that the first grid cell occupies the column space from 1 to 2 or equal to 1fr. The rows follow the same logic.

{% capture post_image %}/assets/img/blog/blog-post-css-layout-grid-lines.jpg{% endcapture %}
{% include post-image.html file=post_image caption="Grid Construction and Lines" %}

Custom line names can be used for each line, such as the following.

```css
.container {
  display: grid;
  grid-template-columns: [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six];
  grid-template-rows: [one] 225px [two] 225px [three] 225px [four];
  gap: 10px;
}
```

These line-names, either created automatically or user-defined, can be used to control where grid items are placed within the grid. For example, the grid container has an immediate child `<h1>Title</h1>` that by default occupies the grid cell located at the first column and first row of the grid. The grid item can be told to occupy this space explicitly by using the `grid-column` and `grid-row` properties on the grid item.

```css
.container h1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
```

The same thing can be expressed with the user defined line-names as the following:

```css
.container h1 {
  grid-column: one / two;
  grid-row: one / two;
}
```

Grid items can occupy multiple grid cells within the grid. To make the `<h1>` occupy the entire first row, for example, the following code can be used.

```css
.container h1 {
  grid-column: one / six;
}
```

In this case, there is no need to declare a value for `grid-row` since the item will fill up one row by default. Another way of writing the same thing is to indicate how many columns or rows an item should span.

```css
.container h1 {
  grid-column: span 5;
}
```

Finally, there are situations where grid items exist in the HTML, but have not been specifically designated a place within the grid, the property `grid-auto-flow` can be used to indicate that an item should be placed on a `row` or `column` first as the grid is populated. Another option in combination with row and column is `dense`, which allows the grid to be filled with items that may move out of place in their normal order for the purpose of filling a gap in the grid.

## Positioning and Alignment

CSS Grid allows for great flexibility when positioning grid items within the grid. Using the `grid-area` property, it's possible to specify where exactly on the grid an item should be placed. There are two main ways to do this. First, the grid item can be placed using starting and ending column and row numbers or named lines. Consider the grid defined below:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 5px;
}
```

This grid will create a four column by four row grid. If we wanted to take an item and have it occupy two columns and 3 rows, it can be done using the `grid-area` property and column and row numbers following the pattern: `grid-area: <row-start> / <column-start> / <row-end> / <column-end>`.

```css
.item-5 {
  grid-area: 2 / 2 / 5 / 4;
}
```

Another way a grid item can be assigned to a position on the grid is by using the grid area name as defined by the `grid-template-areas` property for the grid container. For example, in the following grid, there are several template areas named that correspond to the defined template columns and rows - including the header area, which occupies the entire top row.

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  grid-template-areas:
    'header header header header'
    'sidebar main main main'
    'sidebar main main main'
    'footer footer footer footer';
  gap: 5px;
}
```

To specify that a grid item should take the entire space of a named area, the following property and value should be applied to a grid item.

```css
.item-1 {
  grid-area: header;
}
```

CSS Grid offers many different ways to align grids, items in the grid, the even individual grid items.

In situations where the total size of the grid is less than the size of the container for the grid, it's possible to make use of the properties `justify-content` and `align-content`. Use of the property `justify-content` applies to the row axis and use of the property `align-content` applies to the column axis.

The available values for `justify-content` and `align-content` include: `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, and `space-evenly`.

A shorthand property for both `justify-content` and `align-content` is `place-content`, which will set both properties in one declaration. It can be used as the following: `place-content: <align-content> <justify-content>`. If only one value is declared, it will be applied for both properties.

```css
.container {
  place-content: space-between center;
}
```

The properties `justify-items` and `align-items` will apply alignment to all the items within their individual grid cells. The available values for `justify-items` and `align-items` include: `start`, `end`, `center`, and `stretch`. A shorthand property for both `justify-items` and `align-items` is `place-items`, which will set both properties in one declaration. It can be used as the following: `place-items: <align-items> <justify-items>`. If only one value is declared, it will be applied for both properties.

```css
.container {
  place-items: start center;
}
```

There are situations where it is necessary to change the alignment of one or more individual grid items separate from the entire grid. This can be done with properties `justify-self` and `align-self`. The property will apply alignment to specific items within their individual grid cells. The available values for `justify-self` and `align-self` include: `start`, `end`, `center`, and `stretch`. A shorthand property for both `justify-self` and `align-self` is `place-self`, which will set both properties in one declaration. It can be used as the following: `place-self: <align-self> <justify-self>`. If only one value is declared, it will be applied for both properties.

```css
.item-1 {
  place-self: end end;
}
```
