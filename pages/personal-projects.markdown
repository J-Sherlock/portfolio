---
layout: default
title: Personal Projects
permalink: /personal-projects/
---

<section class="projects-page" aria-labelledby="personal-projects-page-title">
    <div class="projects-page__header">
        <h1 id="personal-projects-page-title">Personal Projects</h1>
        <p>Here are some of my personal projects.</p>
    </div>

    {% assign projects = site.personal-projects | sort: "year" | reverse %}
    {% if projects.size > 0 %}
        <div class="projects-grid">
            {% for project in projects %}
                {% include project-card.html project=project %}
            {% endfor %}
        </div>
    {% else %}
        <p>No personal projects posted yet. Check back soon!</p>
    {% endif %}

</section>
