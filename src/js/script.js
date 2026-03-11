// Aguarda o carregamento completo do DOM antes de executar qualquer script
document.addEventListener('DOMContentLoaded', () => {

    // --- Alternância de Tema (Claro / Escuro) ---
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no body
        document.body.classList.toggle('dark-mode');

        // Atualiza o texto do botão de acordo com o tema atual
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? "Modo Claro" : "Modo Escuro";
    });

    // --- Menu Hamburguer Responsivo ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        // Alterna a visibilidade do menu ao clicar no ícone
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });

        // Fecha o menu ao clicar em qualquer link
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // --- Validação do Formulário de Contato ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Expressão regular para validar o formato básico de e-mail (ex: exemplo@dominio.com)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verifica se algum campo obrigatório está vazio
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Valida o formato do e-mail
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // Simula envio bem-sucedido da mensagem
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

        // Limpa o formulário após o envio
        contactForm.reset();
    });
});