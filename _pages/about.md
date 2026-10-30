---
layout: about
title: About
permalink: /
subtitle: PhD Student @ <a href="http://promise.urjc.es/en/">PROMISE–LAIMBIO</a>, Universidad Rey Juan Carlos. Machine Learning, Computer Vision and Digital Twins. Open-Source Contributor.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info:

selected_papers: false # rendered below with a custom heading
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # rendered below with a custom heading
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 8 # show the complete current timeline

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Hi, and welcome to my personal website! My name is Tomás, and I am a PhD student at [PROMISE–LAIMBIO](http://promise.urjc.es/en/), Universidad Rey Juan Carlos. My background lies at the intersection of mathematics and computer science, which I studied at Universidad de Sevilla, before specializing in artificial intelligence through an MSc at Universidad Politécnica de Madrid.

My current research explores machine learning, computer vision and generative AI for longitudinal modeling, patient simulation and digital twins. I am particularly interested in developing generalizable methods that extend beyond medical imaging: I believe the field should not only benefit from advances in machine learning and computer vision, but also help drive them.

Alongside my research, I actively contribute to open-source scientific software. Through Google Summer of Code 2026 with the [Python Software Foundation](https://www.python.org/psf/), I contributed registration methods, performance improvements, bug fixes, tests and documentation to [DIPY](https://dipy.org), an open-source Python library for diffusion MRI and medical image analysis. During the project, I was mentored by [Serge Koudoro](https://sergekoudoro.com), [Atharva Shah](https://atharva-shah-2298.github.io) and [Jong Sung Park](https://pjsjongsung.github.io).

Since then, I have expanded my open-source collaborations through merged contributions to [Kornia](https://github.com/kornia/kornia/pulls?q=is%3Apr+author%3ATomasGuija), [Hugging Face PEFT](https://github.com/huggingface/peft/pull/3758), [timm](https://github.com/huggingface/pytorch-image-models/pull/2760) and [NVIDIA MedTech](https://github.com/NVIDIA-Medtech/NV-Generate-CTMR/pull/46), with ongoing work in [MONAI](https://github.com/Project-MONAI/MONAI/pull/9122).

## Latest news

<div class="news">
  <div class="table-responsive" style="max-height: 60vw">
    <table class="table table-sm table-borderless">
      {% assign latest_news = site.news | reverse %}
      {% for item in latest_news limit: page.announcements.limit %}
        <tr>
          <th scope="row" style="width: 20%">{{ item.date | date: "%B %Y" }}</th>
          <td>{{ item.content | remove: "<p>" | remove: "</p>" | emojify }}</td>
        </tr>
      {% endfor %}
    </table>
  </div>
</div>

## Selected Publications

{% include selected_papers.liquid %}
