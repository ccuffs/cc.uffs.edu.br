---
layout: simple
title: "Inicial"
permalink: /
wide:
    size: big
    image: cc-bw-15fps-complete.jpg
    video_url: https://cdn.uffs.cc/cc.uffs.edu.br/videos/wide/cc-bw-15fps-complete.mp4
---

<section>
  <div class="container breath-top">
    <div class="row justify-content-center">
      <div class="col-12 text-left">
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

<section class="mt-5">
  <div class="container breath-top">
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs" id="sectionsTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="noticias-tab" data-toggle="tab" href="#noticias" role="tab" aria-controls="noticias" aria-selected="true">Notícias</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="postagens-tab" data-toggle="tab" href="#postagens" role="tab" aria-controls="postagens" aria-selected="false">Postagens</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="vagas-tab" data-toggle="tab" href="#vagas" role="tab" aria-controls="vagas" aria-selected="false">Vagas <!--<span class="badge badge-pill badge-primary">2</span>--></a>
            </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-left">
        <div class="tab-content" id="sectionsTabContent">
            <!-- noticias -->
            <div class="tab-pane fade show active" id="noticias" role="tabpanel" aria-labelledby="noticias-tab">
                {% for post in site.categories.noticias %}
                    {% if post.highlight == false %}
                        {% include post-row.html %}
                    {% endif %}
                {% endfor %}
                <p class="text-center"><a href="/noticias" class="btn btn-sm btn-outline-secondary">Ver mais notícias</a></p>
            </div>
            <!-- postagens -->
            <div class="tab-pane fade" id="postagens" role="tabpanel" aria-labelledby="postagens-tab">
                {% for post in site.categories.postagens %}
                    {% include post-row.html %}
                {% endfor %}
                <p class="text-center"><a href="/postagens" class="btn btn-sm btn-outline-secondary">Ver mais postagens</a></p>
            </div>
            <!-- vagas -->
            <div class="tab-pane fade" id="vagas" role="tabpanel" aria-labelledby="vagas-tab">
                {% for post in site.categories.vagas %}
                    {% include post-row.html %}
                {% endfor %}
                <p class="text-center"><a href="/vagas" class="btn btn-sm btn-outline-secondary">Ver mais vagas</a></p>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
