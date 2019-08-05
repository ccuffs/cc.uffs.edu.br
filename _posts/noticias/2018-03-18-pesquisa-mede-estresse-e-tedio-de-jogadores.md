---
title: "Pesquisa mede estresse e tédio de jogadores de jogos digitais"
layout: article
categories: noticias
last_modified_at: 2019-04-11T08:06:00-05:00
highlight: true
highlight_order: 2
share: false
image:
  teaser: posts/pesquisa-stress-teaser-400x250.jpg
  feature: /images/posts/pesquisa-stress-teaser-400x250.jpg
---



Medir o nível de estresse e tédio de jogadores durante a interação com jogos digitais utilizando sinais psicofisiológicos, como batimento cardíaco e ações faciais. Esse foi o objetivo principal da pesquisa de Doutorado do professor do curso de Ciência da Computação do Campus Chapecó, Fernando Bevilacqua. Tanto estresse quanto tédio são emoções importantes na interação com jogos, porque eles estão ligados ao divertimento e aproveitamento do jogo.

A pesquisa foi desenvolvida na Universidade de Skövde, na cidade de Skövde, na Suécia, e durou três anos e cinco meses. A cidade, que é um polo no desenvolvimento e pesquisa sobre jogos, fica localizada a aproximadamente 340 km de distância de Estocolmo. O trabalho também envolveu diversas instituições como UFFS, CNPq, HiS e União Européia (Interreg ÖKS Project Game Hub Scandinavia). Durante o tempo da pesquisa, Bevilacqua foi orientado por dois pesquisadores da HiS: Henrik Engström (Professor Associado em Informática) e Per Backlund (Professor Titular em Informática), ambos do grupo de pesquisa InGaMe.

De acordo com o professor, diferentemente da maioria dos métodos utilizados agora, que usam sensores físicos conectados aos jogadores, como um medidor de batimento cardíaco, a sua pesquisa coleta todas as informações do jogador utilizando apenas uma câmera. Dessa forma, o batimento cardíaco e as ações faciais usadas no processo são obtidos sem o contato com o jogador, o que não perturba a experiência de jogo.

Bevilacqua conta que, em seus primeiros passos na pesquisa, adaptou para o contexto de jogos digitais a técnica desenvolvida por pesquisadores do MIT para detecção do batimento cardíaco de pessoas a partir de uma câmera. “Essa técnica é bastante afetada pela movimentação do usuário, o que é comum na interação com jogos. Em seguida, eu desenvolvi um método de visão computacional para análise dos jogadores que é baseado no batimento cardíaco e nas ações faciais. Usando essas informações e um tipo especial de jogo digital, um software desenvolvido por mim consegue aprender sobre o perfil emocional do jogador em relação a estresse e tédio”, explicou.

O aprendizado do perfil emocional é baseado em uma técnica conhecida como redes neurais, um modelo matemático que imita o funcionamento do cérebro humano para aprender sobre padrões.

![Professor Fernando Bevilacqua](https://www.uffs.edu.br/campi/chapeco/noticias/imagens/pesquisa-de-doutorado-mede-emocoes-de-jogadores-de-jogos-digitais/@@images/d98c0e2f-2dbd-4a44-850f-019606503c11.jpeg)

### Importância

Segundo o professor, existe um campo de estudos chamado jogos sérios, que usa jogos para fins não exclusivamente de entretenimento. Um exemplo é um jogo que simula a evacuação de um prédio em caso de incêndio, no qual o jogador precisa evitar a fumaça, procurar um extintor de incêndio, etc. Esse jogo treina o usuário sobre incêndios de uma forma diferente que a leitura de um panfleto ou palestra, por exemplo. “Ele é mais interativo, o usuário pode experimentar com ações e ver os resultados dela. É uma forma eficiente de treinamento e simulação, especialmente quando a simulação em condições reais seria perigosa”, relatou.

Assim, a eficácia de um jogo sério está diretamente relacionada às emoções do jogador. “Um certo nível de estresse e tédio são esperados no jogo para estimular um ciclo de desafio e recompensa, ligado ao divertimento. Se um jogador não gosta do jogo, é improvável que invista energia para entendê-lo ou jogá-lo propriamente, o que invalidaria o treinamento, por exemplo”, complementa.

### Medição do comportamento

Bevilacqua explica que para realizar a medição do comportamento dos jogadores, primeiramente, o usuário é filmado enquanto joga, por aproximadamente 15 minutos, um conjunto de jogos especiais chamados jogos de calibração. O vídeo do jogador é analisado via visão computacional e uma rede neural aprende sobre o padrão emocional do jogador baseado nos sinais psico-fisiológicos, como o batimento cardíaco e ações faciais, coletados remotamente.

Em seguida, o jogador pode jogar qualquer outro jogo, como Super Mário, enquanto também é filmado por uma câmera. O vídeo produzido pela câmera é novamente analisado via visão computacional, porém dessa vez o método compara os sinais coletados com o perfil emocional previamente aprendido. O resultado é a estimativa do estado emocional do jogador. A vantagem dessa técnica é que o jogador não precisa ser interrompido com questionários ou sensores, que atrapalham a interação com o jogo.

### Resultados

No experimento final da pesquisa, a técnica para detecção remota de emoções foi testada com diversos participantes enquanto eles jogavam o jogo Super Mário. A taxa de acurácia do método foi de aproximadamente 62%, o que significa que o software acertou o estado emocional dos participantes em 62% dos casos. Embora esse número seja relativamente baixo para fins clínicos, ele é estatisticamente comprovado e assegura que o método é viável e pode ser melhorado no futuro.

Para Bevilacqua, o reconhecimento de emoções de um jogador pode ser usado, por exemplo, por empresas para testar se um jogo está corretamente balanceado em termos de desafio, pois um jogo muito difícil se torna estressante e um jogo muito fácil se torna tedioso. Em ambos os casos, o jogador se desinteressa e não compra o jogo. “Empresas podem usar a minha técnica para testar os jogos antes do lançamento, fazendo ajustes para maximizar as chances de venda. Por último, alguém pode integrar a minha técnica diretamente no jogo, o que permite que ele mesmo detecte o estado emocional do jogador. Nesse caso, o jogo se ajusta conforme o gosto da pessoa. Assim, a pessoa terá uma experiência mais personalizada e provavelmente mais engajadora”, afirmou.

Além disso, a medição de emoções de forma remota, como é o caso do método realizado pelo professor, pode ser usada como ferramenta por pesquisadores da área de jogos. Pesquisadores podem analisar jogadores sem interromper a interação do usuário com o jogo. Isso reduz o ruído na coleta de dados e melhora os resultados da pesquisa, por exemplo.

### Violência nos jogos

O questionamento se jogos violentos podem fazer com que o comportamento dos jogadores também fique violento sempre volta às discussões. Questionado se a sua pesquisa tratava também sobre o assunto, o professor afirmou que está indiretamente relacionada a esse tema. “Meu método pode ser usado como ferramenta por pesquisadores interessados em medir as emoções dos jogadores durante a interação com jogos e, se isso for um dos elementos da pesquisa sendo conduzida, os dados coletados podem elucidar determinada questão. Porém, como um pesquisador da área de jogos, gostaria de mencionar que os últimos estudos científicos que eu vi não indicam que há uma relação entre jogos violentos e o comportamento de jovens”, concluiu.

**Nota:** Essa notícia foi [originalmente postada](https://www.uffs.edu.br/campi/chapeco/noticias/pesquisa-mede-estresse-e-tedio-de-jogadores-de-jogos-digitais) no site da UFFS em 18 de março de 2018.
{: .notice-inverse}