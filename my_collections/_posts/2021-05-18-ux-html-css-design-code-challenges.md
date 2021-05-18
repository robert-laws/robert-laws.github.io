---
title: 'UX/HTML/CSS Design and Code Challenges'
date: 2021-05-18 14:00:00
author: Robert Laws
categories: [learn]
tags: [html, html5, css, user experience]
featured-image: blog-post-ux-html-css-design-code-challenges.png
---

My personal goal for 2021 is to prepare myself to get a web developer job. To that end, I'm reviewing and refining fundamental skills needed as a web developer including HTML & CSS.<!-- more --> I'm also very interested in developing UX design process skills. To that end, I'm kicking off what I'm calling a UX/HTML/CSS Challenge. The basic idea of the challenge is to find an existing website as inspiration for a design and then follow a process of designing a cloned version and coding it with HTML and CSS.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="UX/HTML/CSS Design and Code Challenges" %}

## Process

The first step in the challenge process is to identify a website as inspiration. The idea is not to copy an existing website's content, but to use the website as the foundation for testing out my design and coding skills. The websites identified should present challenges for extracting core design elements and coding it. Once a good website is identified, I'll take a full screenshot to serve as a reference for the next stage, the UX Design process.

#### UX Design

Experience has taught me that it's a bad idea to jump right into coding a website without having a good plan in place first. Part of the plan is understanding the basic structure and layout of a website and its core design elements like the color palette, typography, and reusable components. Following the principles behind [Atomic Design](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101), elements within a website can be defined from small to large building blocks.

Using a tool like Adobe XD, the atomic design methodology can be applied by creating atoms as base-level components and molecules as nested-components. From there, organisms can be built as grouped molecules and, if needed, grouped further to create templates. Finally, pages are built by combining organisms/templates to a final design and layout.

Along the way, design features like color palettes, typography, and other design features can be established. This can be considered to be the foundation of creating a design system, although the challenges aren't meant to go so far to build fully formed design systems.

The final outcome of the UX design process is to create a fully cloned version of the original website with alternate or placeholder branding and content. This final design is the model for what the fully coded version of the challenge should match.

#### HTML

Although the UX design aspect of the challenge may seem like a lot of work and effort, especially considering that the goal of the challenge is to build a website with HTML and CSS, but the intent is to help facilitate a smoother development process. The goal of the HTML part of the challenge is to translate the design into reusable code built with semantic HTML as much as possible. This is important since well-structured HTML helps with things like accessibility and search engine optimization (SEO). It's also useful to think of a website as built from component pieces because it lends itself well to many of the goals of component-based architecture libraries, like [React](https://reactjs.org/docs/design-principles.html).

Another key benefit of approaching the process of coding HTML after a thorough UX design process is to code the smaller pieces (atoms) in isolation from the larger parts of a website. For example, instead of beginning by coding a navbar with branding and a navigational menu, start with coding a navigational link (atom) in isolation. Once built, multiple navigational links can be combined into a navigation menu (molecule). This molecule can then be combined with a branding atom or molecule to create the final organism - the navbar. Depending on the semantics of the webpage, a header template can be built from different "heading" pieces.

The important idea behind the HTML phase of the challenge is to focus on structure and semantics rather than look & feel. The outcome will be a fully structured HTML document, which will not look very attractive on its own since it will lack styling. However, this will be fixed in the next stage, applying the CSS to the HTML.

```html
<article class="blog-post-article">
  <section class="blog-post-article-image">
    <img src="vscode-post-image.png" alt="VSCode for Web Developers" />
  </section>
  <section class="blog-post-article-content">
    <p class="blog-post-article-category">Blogger News</p>
    <p class="blog-post-article-title">
      Five New Features for Web Developers in the Latest Release of VSCode
    </p>
    <p class="blog-post-article-description">
      The latest version of VSCode has some great new features for web
      developers including enhancements for code previews, VCS workflow
      improvements, and better debugging.
      <span>Get the details >></span>
    </p>
    <section class="blog-post-article-meta">
      <div class="blog-post-article-meta-detail">
        <img src="https://picsum.photos/36" alt="Post author avatar" />
        <span>Blog Buddy</span>
      </div>
      <div class="blog-post-article-meta-detail">
        <i class="gg-comment"></i><span>14</span>
      </div>
      <div class="blog-post-article-meta-detail">
        <i class="gg-calendar-dates"></i><span>February 5, 2020</span>
      </div>
    </section>
  </section>
</article>
```

#### CSS

In order to match the output from the UX design process to the final webpage, the HTML must be transformed with CSS. The approach to the CSS mirrors the HTML development process in that CSS can be applied to parts of the HTML code in isolation. For example, a navigational link will have a distinctive styling that is independent of its layout within a navigational menu arrangement. CSS can be applied at the level its needed, building from atoms through organisms and/or templates. Even the final pages will have styling which is unique to itself.

```css
.blog-post-article-image {
  flex: 0 190px;
  padding: 0 20px;
}

.blog-post-article-content {
  flex: 1 100%;
}

.blog-post-article-category {
  font-size: 0.7rem;
  color: #85c8d0;
  text-transform: uppercase;
}

.blog-post-article-title {
  font-size: 2.25rem;
  color: #444;
  margin: 10px 0 30px;
}

.blog-post-article-description {
  margin: 0 0 30px;
  line-height: 1.25rem;
}

.blog-post-article-description span {
  color: #ff3356;
  margin-left: 4px;
}
```

Ultimately, the CSS for the webpage will work in combination between the constituent parts to unify the final webpage structure and look & feel. At this point, the challenge is completed.

#### Learning Concepts

Although designing and coding different examples of websites presents a challenge in itself, the process can be further enhanced by also implementing additional learning concepts to the challenge. HTML and CSS are full of advanced features and new features are being added constantly. For example, using web fonts in a challenge adds an additional learning opportunity and helps to a uniqueness to each individual challenge. This helps maximize the knowledge and experience gained by completing each challenge.

---

#### Challenge Workflow

The following workflow is a condensed version of the detailed information presented above. It's meant to serve as a general guideline for working through a challenge.

1. identify a website as inspiration for the challenge
1. take a full screenshot to serve as a reference
1. identify, list, and build in Adobe XD
   - color palettes
   - typography
   - components
1. create a final design in Adobe XD
1. code html
   - components to templates/pages
1. code css
   - global styles
   - components to templates/pages
1. apply additional learning concepts as appropriate
1. finalize webpage
