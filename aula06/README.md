# Aula 06 - Introdução ao JavaScript (Interatividade)

▶️ **[Assistir vídeo da Aula 06](#)**

Avançaremos para a camada de comportamento (JavaScript), tornando a página dinâmica, capturando interações e fazendo validações sem precisar recarregar o navegador.

## 🎯 Desafio da Aula
**Valide seu formulário de contato:**
1. Crie o arquivo `script.js` e importe-o no final do `<body>` do seu HTML.
2. Capture o evento de envio (`submit`) do formulário.
3. Evite que a página recarregue ao clicar em enviar.
4. Valide se todos os campos foram preenchidos e se o e-mail possui um "@".
5. Exiba uma mensagem de erro na cor vermelha se algo estiver errado, ou uma mensagem verde de sucesso limpando o formulário se tudo estiver correto.

---

## 🏷️ Dicionário de JavaScript e DOM

* `<script src="..."></script>`: Tag usada no HTML para importar o arquivo JavaScript externo. Fica geralmente no final do `<body>` para garantir que o HTML carregue antes do script.
* `document.getElementById('id')`: Função que busca e retorna um elemento do HTML que possua o `id` especificado.
* `addEventListener('evento', funcao)`: Fica "escutando" um elemento. Quando o evento (como `submit` ou `click`) ocorre, ele executa a função associada.
* `event.preventDefault()`: Previne o comportamento padrão de um evento. No caso de formulários, evita que a página recarregue ao tentar enviar os dados.
* `.value`: Propriedade usada para pegar o que o usuário digitou dentro de um `<input>`, `<select>` ou `<textarea>`.
* `.trim()`: Função que remove espaços em branco acidentais do início e do final de um texto digitado.
* `if (!variavel)`: Estrutura condicional (SE). O sinal de exclamação (`!`) significa "NÃO". Ou seja, verifica se a variável está vazia, nula ou indefinida.
* `.textContent`: Propriedade usada para alterar o texto interno de uma tag HTML (como um `<p>`).
* `.className`: Propriedade usada para reescrever as classes CSS aplicadas a um elemento via JavaScript. Útil para trocar o estilo dinamicamente (ex: de `.msg-error` para `.msg-success`).
* `.reset()`: Função nativa de formulários que limpa todos os campos, voltando ao estado original.