---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-list">
    <div class="blog-list-header">
        <h1>Blog</h1>
        <p>Thoughts on software engineering, game development, and technology</p>
    </div>

    {% if site.posts.size > 0 %}
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
                    <a href="/blog/?category={{ category | slugify }}">{{ category }}</a>
                    {% endfor %}
                </span>
            {% endif %}
        </div>

        <div class="post-excerpt">
            {% if post.excerpt %}
                {{ post.excerpt }}
            {% else %}
                {{ post.content | strip_html | truncatewords: 50 }}
            {% endif %}
        </div>

        <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
    </article>
    {% endfor %}

    {% else %}

    <p>No blog posts yet. Check back soon!</p>
    {% endif %}

</div>
