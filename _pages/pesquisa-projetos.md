---
layout: hero
title: "Projetos de pesquisa"
image:
  feature: wood-texture-1600x800.jpg
permalink: /pesquisa/projetos/
---

<section class="fdb-block">
  <div class="container">
    <div class="row align-items-center pt-2 pt-lg-5">
      <div class="col-12 col-md-8 col-lg-7">
        <h2>Call to action</h2>
        <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p class="mt-4"><a class="btn btn-primary" href="https://www.froala.com">Take a Tour</a></p>
      </div>

      <div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5">
        <p><img alt="image" class="img-fluid" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/git.svg"></p>
      </div>
    </div>
  </div>
</section>

{% assign projects = site.data.projects | where: "type","research" %}

<section>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-left">
        <h2>Projetos em andamento</h2>
        <hr />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="tiles">
          {% assign active_projects = projects | where: "active",true %}
          {% for post in active_projects %}
            {% include post-grid-mini.html %}
          {% endfor %}
        </div><!-- /.tiles -->
      </div>
    </div>
  </div>
</section>

{% assign inactive_projects = projects | where: "active",false %}

<section>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-left">
        <h2>Projetos finalizados</h2>
        <hr />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="tiles">
          {% assign inactive_projects = projects | where: "active",false %}
          {% for post in inactive_projects %}
            {% include post-grid-mini.html %}
          {% endfor %}
        </div><!-- /.tiles -->
      </div>
    </div>
  </div>
</section>