---
title: 'Web Accessibility'
date: 2021-10-03 19:00:00
author: Robert Laws
categories: [learn]
tags: [accessibility]
featured-image: blog-post-web-accessibility.jpg
---

Websites developed in the 21st century cannot take accessibility for granted. In fact, in many places organizations have a legal obligation to make their websites accessible. Making websites accessible to all users is simply the right thing to do.<!-- more --> Thankfully, today accessibility is a big deal and there are many different techniques to make websites more accessible.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Web Accessibility" %}

#### What is Web Accessibility?

The core idea behind web accessibility is that websites should be usable by everyone regardless of disabilities or impairments. An accessible website would allow any user, even those with disabilities, to perform the core functions of the website without significantly diminishing content or the overall user experience. For example, an individual with visual impairments may not be able to see an image on a website, but information about the content and nature of the image is still provided to them through alternative means.

The aim of web accessibility is to design and develop websites that are usable regardless of the type of disability a user may have. In this regard, web developers must anticipate that their websites will be used by users with a range of different disabilities, including:

- **Visual Impairments** - users who are either blind or have low-vision. These users will sometimes use a screen reader to navigate the website or prefer a zoomed version of the website.

- **Hearing Impairments** - users who are deaf or have low-hearing. These user can experience multimedia content best when captions are provided.

- **Mobility Impairments** - users who have constraints on their movement or are unable to use a mouse to navigate a website. These users will sometimes only be able to interact with a website through the keyboard.

The examples above are only some of the possible disabilities or impairments that users may have. Building an understanding of the challenges some users face to access information the Internet is essential to grasp the importance of web accessibility.

## Help is on the Way - Accessibility Standards

Because the topic of web accessibility is so important - and complex - there are many resources available to help web designers and developers implement solutions to make websites more accessible. Most resources are based on the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) (WCAG) published by the [World Wide Web Consortium](https://www.w3.org/Consortium/) (W3C). Some of the best resources for web accessibility include:

- **[Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)** - a good starting point for the official standard.

- **[Mozilla Developer Network - Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)** - great overview and tutorials of accessibility.

- **[The A11y Project](https://www.a11yproject.com/)** - a community-based resource for accessibility.

- **[WebAIM - Web Accessibility in Mind](https://webaim.org/)** - a website with many articles and tools to improve accessibility.

These are just some of the many resources available and a good starting point to learn more about the topic. Included in some of the resources on accessibility are also checklists that can be helpful to review for compliance with the latest accessibility standards.

## Making Websites Accessible

There are many different techniques that can be applied to improve accessibility. For example, visually impaired users often make use of screen readers like [JAWS](https://www.freedomscientific.com/products/software/jaws/), [NVDA](https://www.nvaccess.org/), or [VoiceOver](https://www.apple.com/accessibility/mac/voiceover/) to read out the content of a website for a user. To make this experience as rewarding as possible, web developers must code the website to accommodate these users. Below is a discussion of some of the techniques that are used to improve accessibility.

#### Accessible HTML

The elements and tags used in HTML to construct a website carry both structural and semantic meaning to them. For example, the `<header>`, `<nav>`, `<main>`, and `<footer>` elements all have special semantic value that screen readers utilize when reading out the content of a website. Likewise, other elements like anchor tags, lists, forms, blockquotes, and images have semantic meaning and can be interactive. It's important to use these elements as they were intended to reduce confusion when encountered by screen readers.

```html
<main>
  <h1>Same as the Page Title</h1>
  <p>paragraph content goes here...</p>
</main>
```

Some HTML elements provide built-in ways to improve their accessibility. The most obvious example is with images. For users who have a visual impairment, images are not viewable. In these cases, it's important for some textual content to be provided to describe what is displayed in the image. This can be done using the **alt** attribute. Screen readers will read out the text in the alt attribute and provide this type of information for the user.

```html
<img
  src="zoo-penguins.jpg"
  alt="A group of penguins within an exhibit at the zoo."
/>
```

#### WAI-ARIA One resource that is available to help improve the meaning of

different elements on a webpage for screen readers is [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/), the Accessible Rich Internet Applications standards for accessibility. WAI-ARIA defines a set of roles and properties for elements that improve their accessibility. For example, elements may be used for decorative purposes, but are not meaningful for users with screen readers. WAI-ARIA provides a way to remove these types of elements from screen readers to avoid confusion.

```html
<!-- Using the role="presentation" attribute will tell screen readers to ignore the element -->
<img src="top-banner-accent" role="presentation" />

<!-- Screen readers will also skip over content with an empty alt attribute -->
<img src="top-banner-accent" alt="" />
```

#### Accessible CSS

Used mostly for styling a website, CSS (Cascading Style Sheets) can play an important part in improving accessibility. For example, larger text sizing can be used to make content easier to read. Defining colors that provide sufficient contrast is also an important part of accessibility. Finally, CSS can be used to remove elements from the display of a website and they will be ignored by screen readers.

```css
/* Make the text larger */
h1 {
  font-size: 4rem;
}

/* Good contrast between background and text */
header {
  background-color: #000;
  color: #fff;
}
```

#### Keyboard Accessibility

For users who access websites only with a keyboard, some important accessibility techniques include providing ways to skip navigational links and go directly to the main page content. This will help users avoid hearing a long list of navigational links on each page, especially when they know what content they want to access. This can be achieved by using a _skip to content_ link that advances the user to the main content of the page.

```css
#skip-link {
  position: absolute;
  left: -999em;
}

#skip-link:focus {
  position: relative;
  top: 0;
}
```

```html
<body>
  <a id="skip-link" href="#main-content">Skip to Content</a>
  <nav>
    <ul>
      <li>navigational links...</li>
    </ul>
  </nav>
  <main id="main-content">
    <h1>Main Page Content Title</h1>
  </main>
</body>
```

It's also important to provide users with a logical progression through a website using the tab key. Also, users who can view a webpage but use a keyboard to navigate through the page content need clear visual cues when an element on the webpage is focused, typically with a prominent and color-blind safe border around the element.

Another important consideration is helping users to move through web pages without any unexpected problems. For example, when modal boxes are used, it's important to allow a user to progress through the modal with the keyboard and provide the user a way to progress through the context as well as exit it without being trapped. The concept is described as [No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html) and is described in detail on the W3C website.

#### Reduced Motion

For some users, websites that contain either quick or persistent motion or animations in the page or by interactive elements on the page can produce could cause problems like dizziness or even induce seizures in the worst cases. It's recommended to limit the amount of animations, but in cases where animations do have significant motion, the developer can offer a _reduced motion_ option. Users on modern operating systems have the ability to indicate that they prefer reduced motion, which is then used by the browser to request a version of the animation that conforms to this setting.

## Conclusion

These are just a few of the many considerations and techniques that can be used to improve website accessibility. What's most important is to not assume that a website will be accessible without making any effort to make it accessible. Good planning and prioritizing accessible user experiences is vital as part of any modern web design and development workflow. Accessible websites also are able to be used by the maximum number of people, which should be a goal for every website.
