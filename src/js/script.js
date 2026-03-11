// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternância de Tema (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Salva a preferência no navegador (opcional, mas profissional)
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? "Modo Claro" : "Modo Escuro";
    });

    // 2. Validação do Formulário de Contato
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // RegEx simples para validação de e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verificação de campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Validação do formato do e-mail
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // Simulação de envio bem-sucedido
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Limpa o formulário após o envio
        contactForm.reset();
    });

    // Comentário: A navegação suave já é tratada pelo CSS (scroll-behavior)
    // mas o menu poderia ser fechado aqui em dispositivos móveis se necessário.
});