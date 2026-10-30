---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 2
display_categories: [Research, Open-source]
horizontal: false
---

<style>
  .projects .card figure {
    aspect-ratio: 16 / 9;
    margin: 0;
    overflow: hidden;
    background: var(--global-bg-color);
  }

  .projects .card figure picture,
  .projects .card figure img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .projects .card figure img {
    object-fit: contain;
  }

  .projects a[href$="/projects/synthrct/"] figure {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projects a[href$="/projects/synthrct/"] figure::after {
    content: "";
    background: var(--global-bg-color) url("{{ '/assets/img/projects/synthrct-phase-coronal.gif' | relative_url }}") center / contain no-repeat;
    border-left: 1px solid var(--global-divider-color);
  }

  @media (min-width: 768px) {
    .projects .card-text {
      min-height: 2lh;
    }
  }
</style>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
