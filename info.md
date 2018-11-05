---
layout: page
title: Site Information
permalink: /info
date: 2018-10-16
---
Some content goes here.

{% include image.html url="http://www.google.com" max-width="230px" file="/assets/img/photo78.jpg" caption="coffee mug" %}

**{{site.title}}**

{{site.time}}

---

{% capture note_value %}
The website name is {{site.title}}.
{% endcapture %}

{% include note.html note_content=note_value %}

---

{{site.posts.size}}

---

{% assign items = site.collections | where: "label", "dog_daycare" %}
{% for item in items %}
{{item.label}}
{% endfor %}

---

{% for post in site.tags.jekyll %}

{{post.title}}

{% if forloop.last %}{% else %}---{% endif %}

{% endfor %}

---

{{page.title}}

---