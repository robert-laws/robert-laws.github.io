---
layout: project
title: "Dog Daycare"
date: 2018-05-12
website_url: https://rails-dog-daycare.herokuapp.com/
repository_url: https://github.com/robert-laws/portfolio-project-rails-dog-daycare
process_order: 0
processes:
  - Introduction
  - UX Research
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---
{% assign dog_daycare_process = site.dog_daycare | where_exp:'dog_daycare_process','dog_daycare_process.process_order > 0' | sort: 'process_order' %}
{% for item in dog_daycare_process %}
  {{item.content | markdownify }}
{% endfor %}