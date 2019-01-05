---
layout: project
title: "Developer Portfolio"
date: 2018-12-14
website_url: https://robert-laws.com
repository_url: https://github.com/robert-laws/robert-laws.github.io
process_order: 0
processes:
  - Introduction
  - UX Research
  - UX Exploration
  - Information Architecture
  - UX Design
  - Development
---
{% assign developer_portfolio_process = site.developer_portfolio | where_exp:'developer_portfolio_process','developer_portfolio_process.process_order > 0' | sort: 'process_order' %}
{% for item in developer_portfolio_process %}
  {{item.content | markdownify }}
{% endfor %}