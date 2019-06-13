---
layout: project
title: "Restaurant Explorer"
date: 2019-06-12
website_url: https://rails-js-restaurant-explorer.herokuapp.com/
repository_url: https://github.com/robert-laws/portfolio-project-rails-javascript-restaurant-explorer
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---
{% assign restaurant_explorer_process = site.restaurant_explorer | where_exp:'restaurant_explorer_process','restaurant_explorer_process.process_order > 0' | sort: 'process_order' %}
{% for item in restaurant_explorer_process %}
  {{item.content | markdownify }}
{% endfor %}