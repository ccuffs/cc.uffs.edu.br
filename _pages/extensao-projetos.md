---
layout: hero
title: "Projetos de extensão"
permalink: /extensao/projetos/
---

<div class="container">
    <div class="row align-items-center pt-2 pt-lg-5">
        <div class="col-md-7">
            <h2>Projetos de extensão</h2>
            <p class="lead">A extensão permite que o conhecimento e tecnologia produzidos no curso chegem à comunidade acadêmica e externa.</p>
        </div>

        <div class="col-md-5">
            <p><img alt="image" class="img-fluid" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/product-tour.svg"></p>
        </div>
    </div>
</div>


{% assign projects = site.data.projects | where: "type","project-extension" %}

<section class="mt-4 mb-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-left">
        <h3>Projetos em andamento</h3>
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
  <div class="container breath-top">
    <div class="row justify-content-center">
      <div class="col-12 text-left">
        <h3>Projetos finalizados</h3>
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