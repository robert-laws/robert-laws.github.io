---
layout: project
title: 'Creativity Launchpad'
date: 2021-10-10
website_url: https://creativity-launchpad.guqlibrary.georgetown.domains
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

{% assign creativity_launchpad_process = site.creativity_launchpad | where_exp:'creativity_launchpad_process','creativity_launchpad_process.process_order > 0' | sort: 'process_order' %}
{% for item in creativity_launchpad_process %}
{{item.content | markdownify }}
{% endfor %}
