---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-list">
  {% for post in site.posts %}
    <article class="blog-post-preview">
      <h2>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      
      <div class="post-meta">
        <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
        {% if post.categories %}
          <span class="categories">
            {% for category in post.categories %}
              <a href="#">{{ category }}</a>
            {% endfor %}
          </span>
        {% endif %}
      </div>
      
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
      
      <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
    </article>
  {% endfor %}
</div>
