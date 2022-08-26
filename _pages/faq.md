---
layout: simple
title: "Faq"
permalink: /faq/

---
<div class="container">
    <div class="row align-items-center pt-2 pt-lg-2 mb-5">
        <div class="col-md-10">
            <h2>Perguntas Frequentes - FAQ</h2>            
        </div>       
        <div class="col-md-2">
            <p><img alt="faq" class="object-scale-down" src="{{ site.url }}/images/illustrations/faq.jpg"></p>
        </div>
    </div>

  <div class="row align-items-center pt-2 pt-lg-1 mb-1">   
    <section class="mt-5">
      <div class="container">
          <div class="row">
            <div class="row text-left">
              {% assign professors = site.data.faq  %}            
              {% for person in professors %}
                {% include faq-grid.html %}
              {% endfor %}
            </div>
          </div>
      </div>
    </section>
  </div>

</div>



    