---
layout: project
title: 'Data Viz Portal'
date: 2022-02-15
website_url: https://data-viz-portal.web.app/
repository_url: https://github.com/robert-laws/project-jan-2022-data-viz-portal
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Content Development
  - Development
  - Conclusion
---

{% assign data_viz_portal_process = site.data_viz_portal | where_exp:'data_viz_portal_process','data_viz_portal_process.process_order > 0' | sort: 'process_order' %}
{% for item in data_viz_portal_process %}
{{item.content | markdownify }}
{% endfor %}
