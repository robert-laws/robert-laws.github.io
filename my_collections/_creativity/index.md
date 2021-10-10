---
layout: project
title: 'Creativity'
date: 2021-10-10
website_url: https://creativity-launchpad.libtech.georgetown.domains/index.html
repository_url: https://github.com/robert-laws/project-sep-2021-creativity-launchpad
process_order: 0
processes:
  - Introduction
  - UX Research
  - UX Exploration
  - Information Architecture
  - UX Design
  - Content Development
  - Development
  - Conclusion
---

{% assign creativity_process = site.creativity | where_exp:'creativity_process','creativity_process.process_order > 0' | sort: 'process_order' %}
{% for item in creativity_process %}
{{item.content | markdownify }}
{% endfor %}
