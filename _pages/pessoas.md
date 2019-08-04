---
layout: hero
title: "Pessoas"
image:
  feature: wood-texture-1600x800.jpg
permalink: /pessoas/
---

<section class="fdb-block team-8">
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="col-8">
        <p class="lead">O curso de Ciência da Computação é formado por 14 professores do domínio específico, 2 técnico-administrativos em educação (TAE) e aproximadamente 400 alunos.</p>
      </div>
    </div>

    <div class="row-50"></div>
    <div class="row"><div class="col-12"><h2>Professores</h2><hr /></div></div>

    <div class="row justify-content-center text-left">
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