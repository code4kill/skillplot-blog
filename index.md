---
layout: home
title: Skillplot Blog
---

# Open Ecosystem for Deep Tech Research

Exploring generative AI, learning systems, and the future of open knowledge.

This is where Skillplot shares insights, opportunities, and collaborative initiatives in deep tech research and applied learning.

## Latest Posts

{% for post in site.posts limit:6 %}

  <div class="post-card">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}" class="read-more">Read more →</a>
  </div>
{% endfor %}

---

## Get Involved

**Interested in opportunities with Skillplot?** Check out our [internship openings](#posts) and join our community.

Follow us at [skillplot.org](https://skillplot.org)
