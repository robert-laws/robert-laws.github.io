---
title: Using Sass in Jekyll
date: 2018-12-10 14:41:23
date_updated: 2018-12-14 14:41:23
author: Robert Laws
categories: [jekyll]
tags: [jekyll, sass]
featured-image: blog-post-jekyll-and-sass.jpg
---
Sass is supported out-of-the-box by Jekyll. By taking advantage of this feature, CSS development is easier used in conjunction with Jekyll <!-- more -->

{% capture post_image %}/assets/img/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Jekyll and Sass work well together" %}

#### Getting Sass to work in Jekyll

Making use of Sass in Jekyll is almost identical to how it is used in most other development projects, with one important difference. Jekyll will examine the contents of all folders and files it finds in the root directory and copy those contents exactly into the `_site` directory as is, unless it finds yaml front matter. If it finds front matter, it will process the file using its internal logic. For Sass this means that Jekyll will process a root .scss file located in **assets/css/app-styles.scss** that looks like the following:

```scss
---
--- 
@import "main"
```

These few lines of code tell Jekyll to process this .scss file and import that main.scss file located in the `_sass` directory. That file is where all the necessary @import statements are called to pull in sass files for processing.

#### What happens next

The next stage is to simply develop your CSS using Sass's logic. A great feature of Sass is the ability to make use of things like mixins to include repeatable code in multiple places within Sass files. A good example is the use of mixins for responsive design. The sample code show the use of a mixin for styling that only should be displayed as defined as having a max-width of 576px.

```scss
// small screen sizes
$screen-sm-min: 576px;

// small devices
@mixin sm {
  @media only screen and (max-width: #{$screen-sm-min}) {
    @content;
  }
}
```

This mixin can then be injected into a Sass file that increases the left and right margins for smaller screens. The mixin is nested in the `blog-post__content` selector definition - another feature of Sass - and will define a responsive display for this selector definition. This mixin can be reused as many times as desired and needs only a few lines of code to implement.

```scss
blog-post__content {
  margin: 0 1rem;

  @include sm {
    margin: 0 2rem;
  }
}
```