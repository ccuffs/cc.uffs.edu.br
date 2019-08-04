---
layout: hero
title: "Pessoas"
permalink: /pessoas/
---

<div class="row align-items-center pt-2 pt-lg-5">
    <div class="col-md-7">
        <h2>Pessoas</h2>
        <p class="lead">O curso de Ciência da Computação é formado por 14 professores do domínio específico, 2 técnico-administrativos em educação (TAE) e aproximadamente 400 alunos.</p>
    </div>

    <div class="col-md-1"></div>

    <div class="col-md-4">
        <p><img alt="image" class="img-fluid" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs/draws/tabs.svg"></p>
    </div>
</div>

<section class="fdb-block team-8">
  <div class="container">
    <div class="row-50"></div>
    <div class="row"><div class="col-12"><h2>Professores</h2><hr /></div></div>

    <div class="row text-left">
      {% assign professors = site.data.people | where:"position","professor" | sort:"name" %}
      {% for person in professors %}
        {% include person-grid.html %}
      {% endfor %}
    </div>

    <div class="row-70"></div>
    <div class="row"><div class="col-12"><h2>Técnico-Administrativos em Educação</h2><hr /></div></div>

    <div class="row">
      {% assign professors = site.data.people | where:"position","tae" | sort:"name" %}
      {% for person in professors  %}
        {% include person-grid.html %}
      {% endfor %}
    </div>
  </div>
  </section>