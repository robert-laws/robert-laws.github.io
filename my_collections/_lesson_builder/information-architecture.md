---
title: 'Information Architecture'
process_order: 3
---

## Information Architecture

The information architecture of the public-facing website is very straight-forward. The website has a home page and five "sub-pages" - **login**, **about**, **lists**, **list item detail**, and the **new lesson** pages.

#### The Back-End

The front-end of the website includes the handful of pages that a user can access on the public-facing site. However, the back-end of the website is more complex and required more thought to implement. Because the back-end made use of WordPress, it was necessary to work within the WordPress environment to structure and build the back-end.

The back-end is structured into different pieces of data that are used on the website. The data includes:

- List of all courses offered (and which could have a library instructional session)
- List of all librarians who could offer instruction
- List of instructional modules that could be offered during the instructional sessions
- List of lesson plans

Each list was created using a plugin called [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/) that allowed the creation of new post types that extended the types of data that could be saved to WordPress. This plugin allows a developer to add new types of posts, but the new types of posts only have fields available to the built-in post types that come with the default WordPress installation. To add other types of fields, another plugin called [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/). This plugin allows the creation of customized fields that can be added to the post types created with the custom post type UI plugin. Using these two plugins, it was possible to create the data structures within WordPress. For example, the _Lessons_ custom post type includes fields like _session date_, _number of learners_, _information literacy concepts_, and more.
