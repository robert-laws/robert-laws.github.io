---
title: 'Accessibility Audit Workflow'
date: 2021-11-04 19:00:00
author: Robert Laws
categories: [learn]
tags: [accessibility]
featured-image: blog-post-accessibility-audit-workflow.jpg
---

Making websites accessible is in the best interest of everyone involved in developing, building content, and using a website. When websites are more accessible, everyone wins.<!-- more --> This is true because compelling content can be accessed by more people in more ways when websites are accessible. Having a highly accessible website also reflects well on the organization since they are demonstrating that they take issues of access seriously. An important step to assure that a website is accessible is performing an accessibility audit to identify where websites do and do not meet the recognized, and often required, accessibility standards.

{% capture post_image %}/assets/img/blog/{{page.featured-image}}{% endcapture %}
{% include post-image.html file=post_image caption="Accessibility Audit Workflow" %}

#### Why Accessibility?

An important step in running an accessibility audit is convincing those involved of its importance. Without the "buy-in" and support of the people involved in making a website accessible, it is difficult to motivate them to be vigilant about implementing accessibility standards in their work. Although there are many reasons for why it's important to make websites accessible, three reasons are most important:

- For many industries, including education, there are specific legal requirements that institutions must follow to ensure that their websites are accessible. Most notably, [Section 508 of the Rehabilitation Act of 1973](https://www.section508.gov/manage/laws-and-policies/), which requires Federal agencies to make electronic and information technology accessible to people with disabilities. Also, the [American Disabilities Act (1990)](https://www.ada.gov/) requires organizations to provide “reasonable accommodations” to employees with disabilities. Under Title II of the ADA, universities and colleges are mandated to provide reasonable accommodations to students with disabilities.
- Websites that are accessible increases the number of people that can access and use the information and services available from an organization. Providing information and services to more people is a good goal for any organization.
- Finally, building empathy and understanding of the challenges people with disabilities face when using websites is a motivating factor to make websites as accessible as possible.

#### How to Identify Accessibility Issues

An essential step in solving problems with accessibility as knowing what needs to be improved. Fortunately, there are many tools available that can help identify and even offer suggestions to improve accessibility. The World Wide Web Consortium (W3C) created the [Web Accessibility Initiative](https://www.w3.org/WAI/) (WAI) to help developers and organizations improve the accessibility of websites. The WAI provides many helpful resources to understand accessibility better, including [Web Content Accessibility Guidelines](w3.org/WAI/standards-guidelines/wcag/) (WCAG), which provide detailed information about the definitions of accessibility standards and how to implement them in websites. These guidelines are very useful to understand the specific requirements that should be implemented and detailed information about the reasons for each requirement.

The W3C has also put together a [list of web accessibility evaluation tools](https://www.w3.org/WAI/ER/tools/) that help developers test their websites and identify potential issues that need to be addressed. Thankfully, most of the listed tools provide comprehensive feedback about a range of accessibility issues found on a website. Some of the more notable tools listed include:

- Online Accessibility Tester

  - [Accessibility Checker](https://www.accessibilitychecker.org/)
  - [aCe](https://ace.accessibe.com/) by accessiBe
  - [MAUVE](http://mauve.isti.cnr.it/) by Human Interfaces in Information Systems Laboratory
  - [Rocket Validator](https://rocketvalidator.com/)
  - [TAW](https://www.tawdis.net/)
  - [WAVE](https://wave.webaim.org/) web accessibility evaluation tool

- Browser Extension

  - [ARC Toolkit](https://chrome.google.com/webstore/detail/arc-toolkit) Chrome Extension
  - [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib) Chrome Extension
  - [axe DevTools](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access) Microsoft Edge Add-on
  - [axe Web Accessibility Testing](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/) Firefox Add-on

- Commercial Accessibility Audits

  - [axe Auditor](https://www.deque.com/axe/auditor/)
  - [Siteimprove](https://siteimprove.com/en-us/)

These tools are extremely useful to identify accessibility issues and offer suggestions to improve accessibility. The help address accessibility issues and can be used in conjunction with other resources like [WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist) to find and solve accessibility issues.

#### Content Creators - Accessibility Best Practices

The process of making a website accessible is a team effort. Organizational staff members that are responsible for creating content should be taught how to apply accessibility best practices in their work. Typically, content creators using content management systems (CMS) have access to content pages and use a WYSIWIG editor when creating content. The editor often allows staff to do things like add text and apply various transformation to them including different font sizes, weights & styles, colors, inserting images, and adding hyperlinks. Each of these content elements have associated accessibility issues that staff need to know about.

Some ways that staff can be informed about their responsibility for making a website accessible include:

- Offering training on website editing and accessibility
- Providing documentation on accessibility
- Communicating with staff members who have questions about accessibility
- Adding tools within the CMS to help staff when creating content (ex. [CKEditor Accessibility Checker](https://www.drupal.org/project/ckeditor_a11ychecker))

#### Developers - Implementing Accessibility Standards

Web developers are critical for implementing key accessibility features on websites. During the development process it's important to understand the required accessibility standards fully and put them into use as a part of the development process. But it's equally important to share information with other staff members on what accessibility features are being implemented and for which types of users they are applicable.

For example, some of the most common accessibility features that developers can add include:

- Color combinations - helps color blind user to view content the uses appropriate color combinations
- Skip to Content links - provides keyboard-only users a way to quickly jump to the main content of a page
- Wai-ARIA tags - provides screen readers with information about the page's structure and content
- Tab index order - provides keyboard-only users a way to quickly jump to the main content of a page
- Focus color cues - allows keyboard users to visually identify which element has focus
- Reduced motion (CSS) - reduces the amount of motion that occurs when a user interacts with a website

All of the accessibility features listed above can be added to the website by a developer. However, it's essential for the developer also to communicate these features to the staff and explain the rationale behind each of them so that staff members can recognize their need and how users with disabilities can benefit from them.

#### User Experience and Testing

Even after implementing a full range of accessibility features, there is still work that should be done. Specifically, the website should be tested for compliance to accessibility standards. Testing should also include replicating the user experience of different types of users with disabilities to understand how they will experience the website. For example, using a screen reader to navigate the website will allow testers to understand how blind users will experience the website and what issues they may encounter that make the website less accessible for them. Likewise, testers can remove the mouse and attempt to use the keyboard to navigate the website and understand the challenges this may cause. This type of testing will help developers and staff build empathy for disabled users of the website and encourage them to find solutions to improve the overall website accessibility.
