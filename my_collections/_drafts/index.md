---
layout: project
title: 'Data Viz Cafe'
date: 2020-12-29
website_url: https://datavizcafe.libtech.georgetown.domains
repository_url: https://github.com/robert-laws/project-dec-2020-data-viz-cafe
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
