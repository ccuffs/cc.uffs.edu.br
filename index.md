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
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card-deck">
          {% assign highlighted-posts = site.categories.noticias | where: "highlight","true" | sort:"highlight_order" %}
          {% for post in highlighted-posts limit: 3 %}
            {% include post-card.html %}
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container breath-top">
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Notícias</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Artigos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Empregos <span class="badge badge-pill badge-info">2</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Estágios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Vagas em projetos</a>
            </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-left">
        {% for post in site.categories.noticias %}
          {% if post.highlight == false %}
            {% include post-row.html %}
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
