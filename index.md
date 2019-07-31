---
layout: hero
permalink: /
title: "Inicial"
image:
  feature: wood-texture-1600x800.jpg
---

<section class="fdb-block fp-active" data-block-type="call_to_action" data-id="8">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center" style="z-index: 10000;"><h1>Froala Design Blocks</h1><p class="h2">Far far away, behind the word mountains, far from.</p></div>
    </div>

    <div class="row align-items-center pt-2 pt-lg-5">
      <div class="col-12 col-md-8 col-lg-7" style="z-index: 10000;"><h2>Call to action</h2><p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p><p class="mt-4"><a class="btn btn-primary" href="https://www.froala.com">Take a Tour</a></p></div>

      <div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5" style="z-index: 10000;"><p><img alt="image" class="img-fluid" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/git.svg"></p></div>
    </div>
  </div>
</section>

<section class="fdb-block" data-block-type="features" data-id="2">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-left" style="z-index: 10000;"><h1>Froala Design Blocks</h1><p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text.</p></div>
    </div>

    <div class="row text-left pt-5">
      <div class="col-12 col-sm-6 col-md-5" style="z-index: 10000;"><p><img alt="image" class="fdb-icon" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//icons/layers.svg"></p><h3><strong>Feature One</strong></h3><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></div>

      <div class="col-12 col-sm-6 col-md-5 ml-sm-auto pt-5 pt-sm-0" style="z-index: 10000;"><p><img alt="image" class="fdb-icon" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//icons/package.svg"></p><h3><strong>Feature Two</strong></h3><p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div>
    </div>
  </div>
</section>

<section>
  <h2>Destaques</h2>
  <div class="tiles">
    {% assign highlighted-posts = site.categories.noticias | where: "highlight","true" | sort:"highlight_order" %}
    {% for post in highlighted-posts limit: 4 %}
      {% include post-grid.html %}
    {% endfor %}
  </div><!-- /.tiles -->
</section>

<section style="clear: both;">
  <h2>Notícias</h2>
  <ul>
    {% for post in site.categories.noticias %}
      {% if post.highlight == nil %}
        {% include post-list.html %}
      {% endif %}
    {% endfor %}
  </ul>
</section>
