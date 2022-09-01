---
layout: hero
title: "Centro Acadêmico"
permalink: /ca/
---

<div class="row align-items-center pt-2 pt-lg-5">
    <div class="col-md-8">
        <h2>Centro Acadêmico</h2>
        <p class="lead">O Centro Acadêmico de Ciência da Computação (CACC) organiza atividades em prol dos estudantes do curso, e também os representa nas reuniões de colegiado. Se você tem alguma demanda estudantil (dúvida, sugestão, crítica, elogio, etc), fale com um representante do CACC ou entre em contato através de nossos meios de comunicação.</p>
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
                <h2>Membros</h2>
                <hr />
            </div>
        </div>
        <div class="row text-left">
        {% assign ca = site.data.ca %}
        {% for person in ca %}
            {% include person-grid-ca.html %}
        {% endfor %}
        </div>
        <div class="row">
            <div class="col-12">
                <h2>Comunicação</h2>
                <hr />
            </div>
        </div>
        <div class="row" >
            <div class="col-11">
                <h4 class="font-semibold text-lg text-white block" >Instragram</h4>
                <p>Siga o nosso perfil oficial no instagram  <a href="https://www.instagram.com/caccuffs/" target="_blank">@caccuffs</a>.</p> 
            </div>
            <div class="col-11">
                <h4 class="font-semibold text-lg text-white block">Telegram</h4>
                <p>Entre para a nossa comunidade <a href="https://telegram.me/computacaouffs" target="_blank">CC UFFS</a></p> 
            </div>
            <div class="col-11">
                <h4 class="font-semibold text-lg text-white block" >Email</h4>
                <p>Dúvidas e demandas envie em <a href="mailto:cacomputacaouffs@gmail.com" target="_blank">cacomputacaouffs@gmail.com</a>.</p> 
            </div>
            <div class="col-11">
                <h4 class="font-semibold text-lg text-white block" >Linktree</h4>
                <p>Acesse nosso <a href="https://linktr.ee/cacomputacao" target="_blank">LinkTree</a>.</p> 
            </div>    
        </div>
    </div>
</section>