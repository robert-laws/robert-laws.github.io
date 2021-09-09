---
layout: project
title: 'Primary Sources'
date: 2021-09-09
website_url: https://primary-sources.libtech.georgetown.domains/
repository_url: https://github.com/robert-laws/project-aug-2021-primary-sources
process_order: 0
processes:
  - Introduction
  - UX Design
  - Information Architecture
  - Development
  - Conclusion
---

{% assign primary_sources_process = site.primary_sources | where_exp:'primary_sources_process','primary_sources_process.process_order > 0' | sort: 'process_order' %}
{% for item in primary_sources_process %}
{{item.content | markdownify }}
{% endfor %}
