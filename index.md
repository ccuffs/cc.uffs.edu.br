---
layout: hero
permalink: /
title: "Inicial"
image:
  feature: wood-texture-1600x800.jpg
---

<section>
  <div class="container breath-top">
    <div class="row justify-content-center">
      <div class="col-12 text-left">
        <h2>Destaques</h2>
        <hr />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="tiles">
          {% assign highlighted-posts = site.categories.noticias | where: "highlight","true" | sort:"highlight_order" %}
          {% for post in highlighted-posts limit: 4 %}
            {% include post-grid.html %}
          {% endfor %}
        </div><!-- /.tiles -->
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-10 text-left">
        <h2>Últimas notícias</h2>
      </div>
      <div class="col-2"></div>
    </div>
    
    <div class="row"><div class="col-12"><hr /></div></div>
    
    <div class="row">
      <div class="col-12 text-left">
        {% for post in site.categories.noticias %}
          {% if post.highlight == false %}
            {% include post-grid-mini.html %}
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-right">
        <a href="/noticias">Ver mais notícias</a>
      </div>
    </div>
  </div>
</section>
