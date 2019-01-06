---
title: Learning Jekyll - Front Matter
date: 2018-10-02 09:37:27
author: Robert Laws
categories: [jekyll]
tags: [jekyll, web design, liquid]
featured-image: stock-4.jpg
---
Of the many Static Site Generators out there, [Jekyll](https://jekyllrb.com/) is one of the most popular.<!-- more --> There are many reasons why, but what stands out to me is the easy integration of Jekyll into GitHub Pages. Building a site with Jekyll and deploying it to a master branch on GitHub is almost all it takes to get a website up-and-running. There's a bit more to it than that, but not much.

My experience learning Jekyll has been one of iterations. The approach I took with Jekyll, and with software generally, is to begin with a simple version - master the basics - and build complexity going forward with progressive iterations.

## Essential Jekyll

#### Front Matter

Perhaps the foundational concept of Jekyll is the use of front matter with [yaml syntax](https://yaml.org/spec/1.2/spec.html). Yaml is a data serialization language - which is meant to be straight forward and accessible. Jekyll with interpret yaml and process it before outputting static files. To that end, writing front matter at the beginning of files that make up the source code of a Jekyll website will expose that information for use throughout the application.

> "Any file that contains a YAML front matter block will be processed by Jekyll as a special file."
> <cite>-- Jekyll Documentation</cite>

A simple example of using front matter would be including it in an about page - about.md. To make use of it, Jekyll expects triple-dashed lines to open and close the yaml data.

```yaml
---
layout: default
title: About Me
---
```

Yaml front matter can be used for more complex purposes than setting basic values. It can be used for creating lists using the yaml list syntax. That is accomplished many different syntactical ways. Here's just one example:

```yaml
---
tech_stack:
  - Jekyll
  - Sass
  - BEM
  - HTML5
---
```

Now, the list can be accessed as a list and iterated over by using liquid syntax such as `{{ "{% for tech in project.tech_stack " }}%}`, which will allow each value of the list to be accessed and processed for use on a webpage. One way to use this is to create a html list of the content and link it to pages using the same tags.

