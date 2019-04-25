---
title: Organizing JQuery
date: 2019-04-25 07:41:00
author: Robert Laws
categories: [jquery]
tags: [jquery, javascript, gulp]
featured-image: blog-post-organizing-jquery.jpg
---
I've been using Gulp.js for a while now as my tool of choice for workflow automation. One feature that is very useful is the [https://www.npmjs.com/package/gulp-concat](gulp-concat) package, which allows me to develop with separate js files and combine them into one final javascript file at production. The advantage of this is that I only load one javascript file for the website instead of multiple files. However, this adds some challenges too. The biggest challenge is that on certain pages of a project, I want to run JQuery code when the page's DOM has finished loading. However, I don't need the JQuery code to run on every page when the DOM has finished loading.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="JQuery - Still Useful & Powerful" %}

#### Testing for Page Elements

The way I've chosen to solve this problem is by testing for the presence of particular DOM elements first before loading additional JQuery code. For instance, on a page that contains a form I check for the presence of a submit button that only appears on this particular page before funning additional code.

```javascript
if($("#class-submit").length) {
  $("#class-submit").click(function() {
    if(formValidate($(this))) {
      var newId = saveClass();
      if(newId > 0) {
        $(location).attr("href", "confirmation.html?cid=" + newId);
      } else {
        console.log("class id was not saved.");
      }
    } else {
      $("#form-errors").html("<strong>Please fix the errors highlighted above</strong>").addClass("alert-text");
    }
  });
}
```

If the `#class-submit` element is not present on the page, the remainder of the code block will not run. This check saves me from having unnecessary code run. I can also keep my code organized based on code that is meant to run only on particular pages.

#### JQuery - .ready function

An alternate approach to running javascript code is to take advantage of JQuery's function to run code once the DOM has loaded via the function call `$(function() { });` and then perform checks for the presence of particular DOM elements. For my site, performance isn't a huge issue, so between the two options I don't experience much difference in load or update times. On a bigger site, however, I'd test for the most optimized solution.

For a situation similar to the code above, the JQuery is adding a click event-handler to the element with an id `#class-submit` - a button in this case. A safe approach may be to run a script after the DOM has loaded using JQuery and then check for the presence of a particular DOM element. The main question is whether or not the if statement containing JQuery actually runs before the DOM is loaded or is it safer to wait for the DOM to load and be assured of this by using the `$(function() { });` method?