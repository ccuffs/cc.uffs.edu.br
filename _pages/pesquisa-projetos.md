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
        <h2>Projetos de pesquisa</h2>
        <p class="lead">O curso de Ciência da Computação e seus integrantes estão constantemente envolvidos em projetos de pesquisa nas mais diversas áreas.</p>
        <p class="mt-4"><a class="btn btn-primary" href="/pesquisa/grupos">Ver grupos de pesquisa</a></p>
      </div>

      <div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5">
        <p><img alt="image" class="img-fluid" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/rocket.svg"></p>
      </div>
    </div>
  </div>
</section>

{% assign projects = site.data.projects | where: "type","project-research" %}

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
          {% assign active_projects = projects | where: "active",true | sort:"date_start" | reverse %}
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
          {% assign inactive_projects = projects | where: "active",false | sort:"date_end" | reverse %}
          {% for post in inactive_projects %}
            {% include post-grid-mini.html %}
          {% endfor %}
        </div><!-- /.tiles -->
      </div>
    </div>
  </div>
</section>