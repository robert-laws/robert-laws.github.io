---
layout: project
title: "Library Website"
date: 2019-06-12
website_url: https://qatar.library.georgetown.edu/
repository_url: https://github.com/robert-laws/project-june-2019-library-website-redevelopment
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---
{% assign library_website_process = site.library_website | where_exp:'library_website_process','library_website_process.process_order > 0' | sort: 'process_order' %}
{% for item in library_website_process %}
  {{item.content | markdownify }}
{% endfor %}