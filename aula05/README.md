# Aula 05 - Box Model e Estrutura de Layout

▶️ **[Assistir vídeo da Aula 05](#)**

Focaremos na estrutura espacial dos elementos e no posicionamento na tela, organizando a página como um sistema real usando tags semânticas e Flexbox.

## 🎯 Desafio da Aula
**Estruture o layout em Cartões (Cards):**
1. Substitua as separações antigas do seu HTML por tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`).
2. Aplique propriedades de Box Model (`padding`, `border`, `box-shadow`, `background`) para transformar suas seções (Perfil, Habilidades, Contato) em "cartões" visuais.
3. Use o `display: flex` no seu container principal para colocar os cartões lado a lado em telas grandes.
4. Use Flexbox no `body` para garantir que o rodapé (`footer`) fique sempre colado no final da tela, independente do tamanho do conteúdo.

---

## 🏷️ Dicionário de Tags e CSS (Box Model/Flexbox)

### Tags Semânticas de Layout
* `<header>`: Representa o cabeçalho da página ou de uma seção.
* `<main>`: Representa o conteúdo principal e único do documento.
* `<section>`: Representa uma seção genérica de conteúdo agrupado tematicamente (ex: nossos "cartões").
* `<footer>`: Representa o rodapé da página.

### CSS Box Model
* `padding`: Preenchimento interno. É o espaço entre o conteúdo do elemento e a sua borda.
* `margin`: Margem externa. É o espaço entre a borda do elemento e os outros elementos ao redor.
* `border`: Borda do elemento.
* `box-shadow`: Adiciona sombra aos elementos, criando uma sensação de profundidade e elevação (ótimo para "cards").

### CSS Flexbox
* `display: flex`: Transforma o elemento pai em um container flexível, e seus filhos diretos em itens flexíveis.
* `flex-direction: column`: Alinha os filhos do container em uma coluna (de cima para baixo).
* `justify-content: center`: Centraliza os itens no eixo principal (horizontal, por padrão).
* `flex-wrap: wrap`: Permite que os itens quebrem para a linha de baixo se não houver espaço suficiente na tela (essencial para responsividade).
* `gap`: Define o espaçamento entre os itens dentro de um container flexível.