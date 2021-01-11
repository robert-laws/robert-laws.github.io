---
layout: project
title: 'Checkmark List'
date: 2020-09-15
website_url: https://project-sep-2020-todo-app.netlify.app/
repository_url: https://github.com/robert-laws/project-sep-2020-checkmark-list-app
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---

{% assign checkmark_list_process = site.checkmark_list | where_exp:'checkmark_list_process','checkmark_list_process.process_order > 0' | sort: 'process_order' %}
{% for item in checkmark_list_process %}
{{item.content | markdownify }}
{% endfor %}
