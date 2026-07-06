# Aula 04 - Introdução ao CSS (Estilização)

▶️ **[Assistir vídeo da Aula 04](https://youtu.be/Lx2AjGnqLrQ)**

Nesta aula, daremos vida às páginas HTML, introduzindo cores, fontes e formatação visual separando a estrutura (HTML) do estilo (CSS).

## 🎯 Desafio da Aula
**Dê estilo ao seu perfil:**
1. Crie um arquivo `style.css` e faça o link dele no `index.html`.
2. Mude a cor de fundo (`background-color`) da página inteira e a fonte (`font-family`) para Arial ou sans-serif.
3. Centralize o título principal e mude a cor dele.
4. Deixe sua imagem de perfil perfeitamente redonda usando CSS.
5. Altere a cor do botão de envio e faça com que ele mude de cor ao passar o mouse por cima (`:hover`).

---

## 🏷️ Dicionário de CSS e Conceitos

* `<link rel="stylesheet" href="...">`: Tag colocada no `<head>` do HTML para importar um arquivo CSS externo. É a melhor prática (Clean Code) para separar responsabilidades.
* **Seletor de Tag (ex: `body { ... }`)**: Aplica o estilo a todas as tags com aquele nome no HTML.
* **Seletor de Classe (ex: `.btn-enviar { ... }`)**: Aplica o estilo a elementos que possuem `class="btn-enviar"`. É reutilizável em vários elementos.
* **Seletor de ID (ex: `#foto { ... }`)**: Aplica o estilo a um único elemento com `id="foto"`. Deve ser único na página.
* `color`: Altera a cor do texto.
* `background-color`: Altera a cor de fundo de um elemento.
* `font-family`: Define a fonte (tipografia) do texto.
* `border-radius`: Arredonda os cantos de um elemento. `50%` em imagens quadradas transforma-as em círculos perfeitos.
* `:hover`: Pseudo-classe que aplica um estilo somente quando o usuário passa o cursor do mouse sobre o elemento.