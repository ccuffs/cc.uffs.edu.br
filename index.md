---
layout: hero
permalink: /
image:
  feature: wood-texture-1600x800.jpg
---

<div class="tiles">
  <div class="tile">
    <h2 class="post-title">Built for Jekyll 3</h2>
    <p class="post-excerpt">Takes advantage of native Sass support and data files to make customizing your site easier.</p>
  </div><!-- /.tile -->

  <div class="tile">
    <h2 class="post-title">Content First</h2>
    <p class="post-excerpt">Designed to put the focus on you and your writing. Headers, navigation, sidebars, and footers have been purposely deemphasized.</p>
  </div><!-- /.tile -->

  <div class="tile">
    <h2 class="post-title">Customizable</h2>
    <p class="post-excerpt">Packed with layouts and modules. Include Disqus comments, social sharing buttons, and table of contents on one or all pages.</p>
  </div><!-- /.tile -->

  <div class="tile">
    <h2 class="post-title">Extensible</h2>
    <p class="post-excerpt">Compatible with popular libraries like <a href="http://bourbon.io">Bourbon</a>, <a href="http://neat.bourbon.io/">Neat</a>, and <a href="http://github.com/octopress/octopress">Octopress</a> to help build and deploy your site with ease.</p>
  </div><!-- /.tile -->
</div><!-- /.tiles -->


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
