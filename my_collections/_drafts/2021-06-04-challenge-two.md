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

The first challenge was a simple blogging website, which had a fairly simple layout and design. The website from the first challenge had a header, a content area with blog post entries and an aside area, and finally a footer. The website for the second challenge presents many more sections and all having increased complexity than the first challenge. Of course, that's what this challenge series is all about - finding websites that push my skills and creativity forward.

Specifically, this challenge included many interesting features:

- use of advanced typography - including type and icon fonts
- extensive (and varied) use of flexbox throughout the website
- different uses of positioning for complex image arrangements and element layering
- use of CSS custom properties (variables)
- use of HTML semantic sectioning elements

Additionally, the approach I took to both the design and development phases was based on applying [atomic design principles](https://atomicdesign.bradfrost.com/). For this challenge, there were many different features that could lend themselves well to the ways atomic design. This approach works by breaking down a elements on a website into smaller pieces - or atoms - which are then used to build more complex pieces - molecules and organisms. These pieces are then placed within templates and pages to construct a final website.

## The Design Phase

The design of the inspiration website was an interesting mix of different typographies, icons, text and visual content. The website also contains some basic form elements, a styled navigation, and interesting visual combinations of text and images together into a basic card-like component. The website had a little bit of everything to test my design skills.

The screenshot below is the inspirational website - pinch of yum. The design process began by examining this website.

{% capture post_image %}/assets/img/blog/blog-post-challenge-two-screenshot.png{% endcapture %}
{% include post-image.html file=post_image caption="Challenge Two - Inspirational Website" %}

#### Extracting Colors and Fonts

The first part of the challenge was to examine the design of the inspirational website. With a full screenshot of the inspiration website in hand, I was able to sample the colors and build a color palette of 8 colors. The site had two main brand colors and a range of shades of gray as well as black and white. The typography was a nice mix of serif and sans-serif fonts and a cursive script. It wasn't too difficult to inspect the fonts on the inspirational website, which weren't freely available. The good news was that Google Fonts has many options and several that were good substitutes for the fonts used on the inspiration website. I choose _Roboto Slab_ and _Playfair Display_ for the serif fonts and Source Sans Pro for the sans serif font. I also chose _Allura_ for the cursive font, which wasn't too similar to the inspirational website, but was an acceptable option.

{% capture post_image %}/assets/img/blog/blog-post-challenge-two-design-features.png{% endcapture %}
{% include post-image.html file=post_image caption="Design Phase - Colors and Typography Analysis" %}

#### Finding Atoms and Molecules

The next step of the design phase was to identify atoms and molecules on the website. Identifying atoms was straight forward - they included text (headings and body text), icons, form elements, images, and buttons. These atoms are typical of most websites. Combining the atoms into molecules is where it's possible to create unique and interesting elements for the website. For example, the major visual elements on the inspiration website included a visual element that was a combination of an image and two textual atoms to create a combined visual element molecule. This molecule has two variations, a large and small version, which are both based on the same constituent atoms.

Other major molecules include the blog post entry, which is made up of an image atom and four text atoms. This molecule is repeated for a few blog entries on the page. Other textual content form molecules by combining text and other atoms (like buttons and list numbers) to form additional textual molecules. Forms come together in a similar way. The input for the search is combined with an icon and the email signup form is a combination of text, two inputs and a button to make up a more complex form molecule. The sign up form could even be considered as an organism since it combines all the pieces needed to make up a full-functional form that can be submitted.

{% capture post_image %}/assets/img/blog/blog-post-challenge-two-design-features.png{% endcapture %}
{% include post-image.html file=post_image caption="Design Phase - Atoms and Molecules" %}

#### Layout Analysis

After analyzing the colors, typography, and finding the different atoms and molecules within the original design, the next step was to look at the website layout and determine the best semantic layout structure for the website. This included some obvious choices, like the header and footer sections of the website, which were located in the expected locations. Less obvious were how to divide up other parts of the website, especially some of the large visual pieces, into sections that made sense. The visual section directly under the header served the similar purpose as a hero section - an eye catching visual area - although it wasn't exactly like hero sections on other webpages because there wasn't a clear call-to-action. Below this section were other areas that provided resources, information, and tools to the user. Under this was what I considered to be the main section of the website - where the individual blog post entries were located, along with an aside. Finally, the website concluded with some additional resources and a repeat of the sign-up form before ending with the footer.
