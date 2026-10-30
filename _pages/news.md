---
layout: page
title: News
permalink: /news/
---

<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
      {% assign all_news = site.news | reverse %}
      {% for item in all_news %}
        <tr>
          <th scope="row" style="width: 20%">{{ item.date | date: "%B %Y" }}</th>
          <td>{{ item.content | remove: "<p>" | remove: "</p>" | emojify }}</td>
        </tr>
      {% endfor %}
    </table>
  </div>
</div>
