---
title: "Development"
process_order: 6
---
## Development

Development of the website is done using the Static Site Generator (SSG) [Jekyll](https://jekyllrb.com). This technology is purpose-designed for blogging, which is a top requirement for the website. Jekyll is also great for creating web pages that don't require a database to serve content. The appeal of Jekyll for this project is that the technology supports the markup language Markdown. This means that both blog posts and static pages can be written using Markdown and this will help with quicker content development.

#### HTML5, Flexbox, BEM and Sass

Styling the website is done with CSS. Although the website isn't overly complex, it still requires a lot of styling, which can become complex. [Sass](https://sass-lang.com) helps to minimize the problems that come with complexity by introducing things like reusable variables, nesting of elements and style definitions, and mixins for repeatable styling logic. Sass coupled with [BEM](http://getbem.com/introduction/) - which stands for Block Element Modifier - is a methodology for designing web sites with re-usable and modular components. Finally, [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) makes designing layouts much easier than without it. For this website flexbox is appropriate due to the fact that the website is not overly complex and doesn't require something like CSS Grid.

Using HTML5 as a foundation for devising components - such as the blog post shown below - describes an individual blog post entry that can be reused for every blog post on the webiste. The HTML5 article element consitutes the content that is repeatable and is defined by the class "blog-post". All subsequent elements are based on this block definition and extended by the element - such as with "blog-post__author". Finally, an element can make use of a modifier, such as with "blog-post__tag--primary" when there's some difference from the baseline element, but not a distinctively new element.

```html
<article class="blog-post">
  <header class="blog-post__header">
    <div class="blog-post__category">Categories...</div>
    <div class="blog-post__title">Title</div>
    <div class="blog-post__author">by author</div>
    <div class="blog-post__meta">
      <p class="publish">Published Date</p>
      <p class="update">Updated Date</p>
    </div>
  </header>
  <section>
    Blog Content
  </section>
  <footer class="blog-post__tags">
    <p class="blog-post__tag--primary">Post tags</p>
    <p class="blog-post__tag">Post tags</p>
  </footer>
</article>
```
Example of BEM methodology for an blog post
{:class="project-detail-caption--code"}

Sass makes use of BEM methodology when developing the Sass files - such as the excerpt of the Sass used for the blog-post content shown below. Sass works well with HTML5 and BEM since it can be structured to mirror the component.

```scss
.blog-post {
  padding: 7rem 0;
  background-color: lighten($color-primary-dark, 79%);
  display: flex;

  &__content {
    flex: 6;
    display: flex;
    flex-direction: column;
    min-height: 40rem;

    @include xl {
      flex: 12;
    }
  }
}
```
Sass file utilizing BEM naming convention
{:class="project-detail-caption--code"}

#### Liquid Syntax

Another prominent aspect of Jekyll is the use of the liquid syntax for the templating aspects of the website. An example is the way developers can define categories Jekyll and access that content via liquid syntax. There is a lot of complex development that can be done using liquid, which adds to the power of Jekyll. In this project, there is extensive use of liquid to do things like pagination, creating and organizing collections of content, and creating reusable content.

#### Layouts and Includes

Finally, Jekyll makes use of includes to expose repeatable content for use in blog post and other pages. An exmaple from the website is the use of an include for image content. The include can be called on website pages and information about the image and a caption can be passed to the include. The include is used on the blog page - using Sass in Jekyll in the following way to pass the featured image that is defined in the blog post front matter and using the caption "Web Developer in Action" in the sample below.

Jekyll is complex and takes time to learn, but has powerful features and has the added bonus of being supported by Github Pages - which hosts the content for access on the Internet.