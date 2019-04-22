---
layout: project
title: "Library Instruction Menu"
date: 2019-04-22
website_url: https://menu.guqlibrary.georgetown.domains
repository_url: https://github.com/robert-laws/project-instruction-menu-documentation
process_order: 0
processes:
  - Introduction
  - UX Research
---
{% assign instruction_menu_process = site.instruction_menu | where_exp:'instruction_menu_process','instruction_menu_process.process_order > 0' | sort: 'process_order' %}
{% for item in instruction_menu_process %}
  {{item.content | markdownify }}
{% endfor %}