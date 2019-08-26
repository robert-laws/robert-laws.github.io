---
title: "Development"
process_order: 4
---
## Development

The development phase of the project involved building the site in an environment using Gulp for testing and building html. The final html is then moved into place on the Drupal server.

The most challenging and interesting aspect of the developmental phase was creating mixins with Pug to create the side navigation bar for each sub page on the site. The feature works through use of multiple components. First, a yaml data object contains the different sub sections of the category - in this case the services category.

```jade
- var navServices = {'Borrowing':'borrowing', 'Renewing':'renewing', 'Interlibrary Loans':'interlibrary-loans', 'Course Reserves':'course-reserves'}
```

This data will be looped over inside the mixin, which will make each item a link unless the item is the same as the current page. The mixin is inserted within the pug template.

```jade
mixin side-nav(page, items)
  div(class="list-group d-none d-md-block")
    each val, index in items
      if page == index
        a(href=val class="list-group-item list-group-item-action active")= index
      else
        a(href=val class="list-group-item list-group-item-action")= index
```

The pug template is built using the Bootstrap 4 CSS framework. The development also focused on making use of the responsive features of Bootstrap, which are reflected in the use of column sizing for various display widths.

```jade
extends layouts/default.pug

block content
  +page-header('Renewing', 'Services')

  div(class="container content-page")
    div(class="row")
      div(class="col-md-3 content-page__side-nav")        
        +side-nav('Renewing', navServices)

      div(class="col-md-9 col-sm-12 content-page__content")
        h4 Renewing

        h5 General Information
        p You can renew your library materials by signing into 
          a(href="#" target="_blank") your account 
          | and viewing your library record.
```

The developmental phase also employed use of Sass and was developed based on the BEM (Block - Element - Modifier) methodology for organizing CSS stylesheets. Although not extensive, some Javascript is also used for the website - including the tabbed search box on the home page and the 'current hours' feature that accepts customized hours display based on the date.