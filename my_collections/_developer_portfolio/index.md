---
layout: project
title: "Developer Portfolio"
date: 2018-10-14
process_order: 0
processes:
  - Introduction
  - UX Research
  - UX Design
  - Information Architecture
---
{% assign developer_portfolio_process = site.developer_portfolio | where_exp:'developer_portfolio_process','developer_portfolio_process.process_order > 0' | sort: 'process_order' %}
{% for item in developer_portfolio_process %}
  {{item.content | markdownify }}
{% endfor %}