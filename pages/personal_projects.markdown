---
layout: default
title: Personal Projects
permalink: /personal-projects/
---

<section class="personal-projects-page" aria-labelledby="personal-projects-page-title">
    <div class="personal-projects-page-header">
        <h1 id="personal-projects-page-title">Personal Projects</h1>
        <p>Here are some of my personal projects.</p>
    </div>

    {% if site.personal-projects.size > 0 %}
        {% for project in site.personal-projects %}
            <article>
                <img class="project_image" src={{ project.image }} alt={{ project.imageAlt }}>
                <h3>{{ project.title }}</h3>
                <p class="company">{{ project.company }}</p>
                <p>{{ project.content | truncatewords: 20 }}</p>
            </article>
        {% endfor %}

    {% else %}
        <p>No personal projects posted yet. Check back soon!</p>
    {% endif %}

</section>
