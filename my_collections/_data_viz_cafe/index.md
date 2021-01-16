---
layout: project
title: 'Data Viz Cafe'
date: 2021-01-15
website_url: https://data-viz-cafe.libtech.georgetown.domains/
repository_url: https://github.com/robert-laws/project-jan-2021-data-viz-cafe
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---

{% assign data_viz_cafe_process = site.data_viz_cafe | where_exp:'data_viz_cafe_process','data_viz_cafe_process.process_order > 0' | sort: 'process_order' %}
{% for item in data_viz_cafe_process %}
{{item.content | markdownify }}
{% endfor %}
