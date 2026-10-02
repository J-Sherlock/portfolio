---
layout: default
title: Professional Projects
permalink: /professional-projects/
---

<section class="projects-page" aria-labelledby="professional-projects-page-title">
    <div class="projects-page__header">
        <h1 id="professional-projects-page-title">Professional Projects</h1>
        <p>Here are some of my professional projects.</p>
    </div>

    {% assign projects = site.professional-projects | sort: "year" | reverse %}
    {% if projects.size > 0 %}
        <div class="projects-grid">
            {% for project in projects %}
                {% include project-card.html project=project %}
            {% endfor %}
        </div>
    {% else %}
        <p>No professional projects posted yet. Check back soon!</p>
    {% endif %}

</section>
