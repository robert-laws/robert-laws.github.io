---
title: 'Challenge Two - Blogging Website'
date: 2021-06-04 16:00:00
author: Robert Laws
categories: [learn]
tags: [html, html5, css, user experience, typography, flexbox]
featured-image: blog-post-challenge-two.jpg
---

The second challenge in the UX/HTML/CSS Design and Code Challenge series is another blogging website. In contrast to the first challenge, the inspiration website for this challenge is much more complex and offers opportunities to test out my skills.<!-- more --> The website I used as the inspiration for this challenge is [Pinch of Yum](https://pinchofyum.com/), a blogging website about food, cooking, and recipes.

Just like with the [first challenge](https://robert-laws.com/blog/challenge-one), the intent is to recreate the website through a process of building a design and then translating that design to HTML and CSS to produce a working version of the inspirational website.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Challenge Two - Blogging Website" %}

## New and Interesting Hurdles

The first challenge was a simple blogging website, which had a fairly simple layout and design. The first challenge website had a header, a content area with blog post entries and an aside area, and finally a footer. The website for the second challenge presents many more sections and all having increased complexity than the first challenge. Of course, that's what this challenge series is all about - finding websites that push my skills and creativity forward.

Specifically, this challenge included many interesting features:

- use of advanced typography - including type and icon fonts
- extensive (and varied) use of flexbox throughout the website
- different uses of positioning for complex image arrangements and element layering
- use of CSS custom properties (variables)
- use of HTML semantic sectioning elements

Additionally, the approach I took to both the design and development phases was based on applying [atomic design principles](https://atomicdesign.bradfrost.com/). For this challenge, there were many different features that could lend themselves well to the ways atomic design. This approach works by breaking down a elements on a website into smaller pieces - or atoms - which are then used to build more complex pieces - molecules and organisms. These pieces are then placed within templates and pages to construct a final website.

## The Design Phase

The first part of the challenge was to examine the design of the inspirational website. With a full screenshot of the inspiration website in hand, I was able to sample the colors and build a color palette of 8 colors. The site had two main brand colors and a range of shades of gray as well as black and white. The typography was a nice mix of serif and sans-serif fonts and a cursive script. It wasn't too difficult to inspect the fonts on the inspirational website, which weren't freely available. The good news was that Google Fonts has many options and several that were good substitutes for the fonts used on the inspiration website. I choose _Roboto Slab_ and _Playfair Display_ for the serif fonts and Source Sans Pro for the sans serif font. I also chose _Allura_ for the cursive font, which wasn't too similar to the inspirational website, but was an acceptable option.

{% capture post_image %}/assets/img/blog/blog-post-challenge-two-design-features.png{% endcapture %}
{% include post-image.html file=post_image caption="Semantic HTML Sections and Layout" %}
