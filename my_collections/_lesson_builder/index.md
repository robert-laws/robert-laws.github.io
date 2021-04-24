---
layout: project
title: 'Lesson Builder'
date: 2021-04-23
website_url: https://lesson-builder.guqlibrary.georgetown.domains/
repository_url: https://github.com/robert-laws/project-apr-2021-lesson-plan-builder
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---

{% assign lesson_builder_process = site.lesson_builder | where_exp:'lesson_builder_process','lesson_builder_process.process_order > 0' | sort: 'process_order' %}
{% for item in lesson_builder_process %}
{{item.content | markdownify }}
{% endfor %}
