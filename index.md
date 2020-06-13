---
layout: simple
title: "Inicial"
permalink: /
wide:
    size: big
    image: lock-1600x800.jpg
    image_url: https://via.placeholder.com/1600x250
    video: snow.mp4
    video_url: https://cdn.uffs.cc/cc.uffs.edu.br/videos/wide/cc-bw-15fps.mp4
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
                <a class="nav-link" id="artigos-tab" data-toggle="tab" href="#artigos" role="tab" aria-controls="artigos" aria-selected="false">Artigos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="empregos-tab" data-toggle="tab" href="#empregos" role="tab" aria-controls="empregos" aria-selected="false">Empregos <!--<span class="badge badge-pill badge-primary">2</span>--></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="estagios-tab" data-toggle="tab" href="#estagios" role="tab" aria-controls="estagios" aria-selected="false">Estágios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="vagas-tab" data-toggle="tab" href="#vagas" role="tab" aria-controls="vagas" aria-selected="false">Vagas em projetos</a>
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
            
            <!-- artigos -->
            <div class="tab-pane fade" id="artigos" role="tabpanel" aria-labelledby="artigos-tab">
                {% for post in site.categories.artigos %}
                    {% include post-row.html %}
                {% endfor %}
            </div>
            
            <!-- empregos -->
            <div class="tab-pane fade" id="empregos" role="tabpanel" aria-labelledby="empregos-tab">
                {% for post in site.categories.empregos %}
                    {% include post-row.html %}
                {% endfor %}
            </div>
            
            <!-- estagios -->
            <div class="tab-pane fade" id="estagios" role="tabpanel" aria-labelledby="estagios-tab">
                {% for post in site.categories.estagios %}
                    {% include post-row.html %}
                {% endfor %}
            </div>
            
            <!-- vagas -->
            <div class="tab-pane fade" id="vagas" role="tabpanel" aria-labelledby="vagas-tab">
                {% for post in site.categories.empregos %}
                    {% include post-row.html %}
                {% endfor %}
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
