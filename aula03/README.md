# Aula 03 - Formulários HTML

▶️ **[Assistir vídeo da Aula 03](https://youtu.be/RMUz5P2Cgk0)**

A aula 03 uniu todo o conhecimento anterior e introduziu a criação de um formulário de contato para captura de dados dos usuários.

## 🎯 Desafio da Aula
**Crie uma seção de Contato:**
1. Crie um formulário no final do seu perfil.
2. Adicione campos para o visitante digitar: Nome e E-mail.
3. Crie um menu dropdown (caixa de seleção) para o visitante escolher o "Assunto" (Ex: Freela, Dúvida, Outros).
4. Adicione uma área grande de texto para a "Mensagem".
5. Crie um botão de envio.

---

## 🏷️ Dicionário de Tags e Atributos

* `<form>`: O container principal do formulário. Ele agrupa os dados que serão enviados ao servidor (ou capturados via JS).
* `<label>`: Rótulo de texto para um campo de entrada.
    * `for="..."`: Conecta o label ao `id` de um input. Permite que o usuário clique no texto para focar no campo.
* `<input>`: O campo de entrada de dados mais comum. Seu comportamento muda de acordo com o atributo `type`.
    * `type="text"`: Campo de texto livre de uma linha.
    * `type="email"`: Campo de texto que exige a formatação de um e-mail válido (exige o @).
    * `id="..."`: Identificador único do elemento na página.
    * `name="..."`: O nome da variável que será enviada para o backend ou lida no formulário.
* `<select>`: Cria um menu dropdown (caixa de seleção).
* `<option>`: Cada uma das opções clicáveis dentro de um `<select>`. O atributo `value` guarda o valor real enviado pelo formulário.
* `<textarea>`: Campo de entrada de texto com múltiplas linhas (útil para mensagens longas). Usa os atributos `rows` e `cols` para definir o tamanho inicial.
* `<button type="submit">`: Botão que, ao ser clicado, dispara o evento de envio (submit) do formulário em que está contido.