---
layout: simple
title: "Notícias"
permalink: /noticias
wide:
    size: small
    image: lock-1600x800.jpg
    video_url: https://cdn.uffs.cc/cc.uffs.edu.br/videos/wide/cc-bw-15fps.mp4
---

<section class="mt-5">
  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        {% for post in site.categories.noticias %}
            {% include post-row.html %}
        {% endfor %}
      </div>
    </div>
  </div>
</section>