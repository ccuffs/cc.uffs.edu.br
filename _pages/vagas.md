---
layout: simple
title: "Notícias"
permalink: /vagas/
wide:
    size: small
    image: cc-bw-15fps-complete.jpg
---

<section class="mt-5">
  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        {% for post in site.categories.vagas %}
            {% include post-row.html %}
        {% endfor %}
      </div>
    </div>
  </div>
</section>