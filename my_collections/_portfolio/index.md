---
layout: default
title: "Developer Portfolio"
process_order: 0
---
Project Details

---

{% assign portfolio_process = site.dog_daycare | where_exp:'portfolio_process','portfolio_process.process_order > 0' | sort: 'process_order' %}

{% for item in portfolio_process %}

{{item.content}}

{% endfor %}