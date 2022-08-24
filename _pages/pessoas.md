---
layout: hero
title: "Pessoas"
permalink: /pessoas/
---

<div class="row align-items-center pt-2 pt-lg-5">
    <div class="col-md-8">
        <h2>Pessoas</h2>
        <p class="lead">O curso de Ciência da Computação é formado por 12 professores do domínio específico, 2 técnico-administrativos em educação (TAE) e aproximadamente 400 alunos.</p>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-3">
        <p><img alt="image" class="img-fluid" src="{{ site.url }}/images/illustrations/team.svg"></p>
    </div>
</div>

<section class="fdb-block team-8 mt-5">
  <div class="container">
    <div class="row-50"></div>
    <div class="row">
        <div class="col-12">
            <h2>Professores</h2>
            <hr />
        </div>
    </div>
    <div class="row text-left">
      {% assign professors = site.data.people | where:"position","professor" | sort:"name" %}
      {% assign professors = professors | where:"inactive",nil | sort:"name" %}
      {% for person in professors %}
        {% include person-grid.html %}
      {% endfor %}
    </div>
    <div class="row-70 mt-5"></div>
    <div class="row">
        <div class="col-12">
            <h2>Técnico-Administrativos em Educação</h2>
            <hr />
        </div>
    </div>
    <div class="row">
      {% assign taes = site.data.people | where:"position","tae" | sort:"name" %}
      {% for person in taes  %}
        {% include person-grid.html %}
      {% endfor %}
    </div>
  </div>
</section>
