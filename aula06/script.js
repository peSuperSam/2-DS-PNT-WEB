const contactForm = document.getElementById('contact-form');
const feedbackElement = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('assunto').value;
    const message = document.getElementById('mensagem').value.trim();

    // Validação
    if (!name || !email || !subject || !message) {
        showFeedback('Por favor, preencha todos os campos.', 'msg-error');
        return;
    }

    if (!email.includes('@')) {
        showFeedback('Insira um endereço de e-mail válido.', 'msg-error');
        return;
    }

    // Sucesso
    showFeedback(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada.`, 'msg-success');
    contactForm.reset();
});

// Helper para exibição de mensagens DRY
function showFeedback(message, cssClass) {
    feedbackElement.textContent = message;
    feedbackElement.className = cssClass;
}
