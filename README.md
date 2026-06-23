# Site do curso de Ciência da Computação (UFFS)

Esse repositório contém o site do curso de [Ciência da Computação](https://www.uffs.edu.br/campi/chapeco/cursos/graduacao/ciencia-da-computacao/perfil-do-curso) da [Universidade Federal da Fronteira Sul](https://www.uffs.edu.br), disponível em [cc.uffs.edu.br](https://cc.uffs.edu.br). O site não é patrimônio do curso, é da sua comunidade de alunos, professores e TAEs. Sinta-se convidado(a) a contribuir com o melhoramento desse site, sua ajuda é mais que bem-vinda!

> **Link para o site oficial:** [https://cc.uffs.edu.br](https://cc.uffs.edu.br)

> **Dúvidas gerais:** fale com os professores do curso ou através do e-mail da Coordenação do Curso ([computacao.ch@uffs.edu.br](mailto:computacao.ch@uffs.edu.br)).

## Sumário

- [Começando](#começando)
- [Manuseio do site](#manuseio-do-site)
- [Licença](#licença)
- [Contribuindo com o site](#contribuindo-com-o-site)
- [Histórico de alterações](#histórico-de-alterações)
- [Links importantes](#links-importantes)

## Começando

Para testar o site localmente na sua máquina, você precisa ter algumas ferramentas instaladas que dependem do sistema operacional em uso. Siga o guia correspondente ao seu sistema operacional.

---

<details>
<summary><strong>Windows</strong></summary>

### Pré-requisitos

Você precisa ter o [git](https://gitforwindows.org/) instalado e um editor de código qualquer, ex.: [Visual Studio Code](https://code.visualstudio.com), disponíveis. Se você estiver usando Windows 10, é recomendado utilizar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) para rodar o site.

> **IMPORTANTE:** se você está no _Windows 10_, use o WSL e siga as instruções da seção _Linux (Ubuntu)_ abaixo. Se estiver usando Windows 8, 7 ou inferior (atualize isso agora, por favor!), continue lendo.

### Instale o Ruby

Instale a última versão do [Ruby](https://www.ruby-lang.org) através do [RubyInstaller](https://rubyinstaller.org/downloads/). Baixe uma das versões **Ruby+Devkit** disponíveis, como o [rubyinstaller-devkit-2.6.3-1-x64.exe](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.6.3-1/rubyinstaller-devkit-2.6.3-1-x64.exe), rode, e no último passo do instalador, escolha `ridk install` (para instalar gems com extensões nativas).

### Instale o bundler

Abra um terminal novo (para garantir que o `PATH` está atualizado depois de instalar o Ruby), e rode:

```sh
gem install bundler
```

</details>

---

<details>
<summary><strong>Linux (Ubuntu)</strong></summary>

### Pré-requisitos

Você precisa ter o [git](https://gitforwindows.org/) e um editor de código qualquer, ex.: [Visual Studio Code](https://code.visualstudio.com), disponíveis:

```sh
sudo apt-get install git code
```

### Instale o Ruby

Instale a última versão do [Ruby](https://www.ruby-lang.org):

```sh
sudo apt-get install ruby-full build-essential zlib1g-dev
```

A partir desse ponto, não é recomendado a utilização de uma conta _root_. Use a sua própria conta de usuário.

Configure o ambiente para a instalação do Ruby Gems:

```sh
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Instale o bundler

```sh
gem install bundler
```

</details>

---

<details>
<summary><strong>Linux (Fedora)</strong></summary>

### Pré-requisitos

Você precisa ter o [git](https://git-scm.com/) e um editor de código qualquer, ex.: [Visual Studio Code](https://code.visualstudio.com), disponíveis:

```sh
sudo dnf install git code
```

### Instale o Ruby

```sh
sudo dnf install ruby ruby-devel
sudo dnf install rubygem-{irb,rake,rbs,rexml,typeprof,test-unit} ruby-bundled-gems
```

A partir desse ponto, não é recomendado a utilização de uma conta _root_. Use a sua própria conta de usuário.

Configure o ambiente para a instalação do Ruby Gems (substitua `~/.bashrc` por `~/.zshrc` ou o arquivo do seu shell):

```sh
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Instale o bundler

```sh
gem install bundler
```

</details>

---

## Manuseio do site

Se você seguiu os pré-requisitos de instalação, a partir desse ponto você pode testar o site localmente na sua máquina.

### 1. Clone esse repositório

Clone esse repositório em uma pasta qualquer da sua máquina, ex.: `c:\` ou `/tmp/`:

```sh
git clone https://github.com/ccuffs/cc.uffs.edu.br cc.uffs.edu.br && cd cc.uffs.edu.br
```

Instale todas as dependências:

```sh
bundle update
```

Copie o arquivo do Google Analytics:

```sh
cp _includes/analytics.html.ex _includes/analytics.html
```

### 2. Testando o site

Para testar o site, entre na pasta onde você clonou esse repositório, e rode:

```sh
bundle exec jekyll serve
```

Opcionalmente, use `--livereload` para o navegador atualizar automaticamente ao salvar um arquivo:

```sh
bundle exec jekyll serve --livereload
```

Após alguns segundos, o site estará disponível através da URL [http://127.0.0.1:4000](http://127.0.0.1:4000).
Depois de rodar o comando, você deve ver algo similar ao seguinte:

```
Configuration file: /mnt/c/cc.uffs.edu.br/_config.yml
            Source: /mnt/c/cc.uffs.edu.br
       Destination: /mnt/c/cc.uffs.edu.br/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 6.255 seconds.
                    Auto-regeneration may not work on some Windows versions.
                    Please see: https://github.com/Microsoft/BashOnWindows/issues/216
                    If it does not work, please upgrade Bash on Windows or run Jekyll with --no-watch.
 Auto-regeneration: enabled for '/mnt/c/cc.uffs.edu.br'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

### 3. Fazendo alterações

Você pode alterar qualquer um dos arquivos do site enquanto o jekyll estiver rodando. Ele vai detectar que arquivos foram modificados e automaticamente atualizará o conteúdo servido na URL [http://127.0.0.1:4000](http://127.0.0.1:4000).

Se você estiver fazendo alterações no site, é recomendado que tenha as _Ferramentas de Desenvolvimento Web_ do seu navegador ativas enquanto você navega [http://127.0.0.1:4000](http://127.0.0.1:4000). Para fazer isso, basta abrir essa URL e pressionar `F12`.

### 4. Enviando suas alterações para o site oficial do curso (opcional)

Veja o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para saber como contribuir conteúdo ou alterações para o site oficial do curso.

## Licença

O código-fonte desse site está disponível através da licença [MIT](https://opensource.org/licenses/MIT). O seu conteúdo, como textos e imagens, são licenciadas como [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Contribuindo com o site

Sua ajuda é muito bem-vinda! Sinta-se convidado(a) a corrigir problemas no site, alterar conteúdos imprecisos, ou adicionar novos conteúdos como notícias e páginas. Siga as instruções do arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para saber como contribuir.

## Histórico de alterações

Todas as alterações importantes no site são relatadas no arquivo [CHANGELOG](CHANGELOG.md).

## Links importantes

- [Página oficial do curso de Ciência da Computação](http://cc.uffs.edu.br)
- [Página institucional do curso de Ciência da Computação](https://www.uffs.edu.br/campi/chapeco/cursos/graduacao/ciencia-da-computacao/perfil-do-curso)
- [Site da Universidade Federal da Fronteira Sul](https://www.uffs.edu.br)
