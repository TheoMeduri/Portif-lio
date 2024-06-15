document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const progressBar = document.getElementById('progress-bar');
    const inputs = form.querySelectorAll('input');

    // Função para atualizar a barra de progresso e salvar no localStorage
    function updateFieldData(input) {
        localStorage.setItem(input.name, input.value.trim());

        // Atualiza a barra de progresso
        const filledFields = Array.from(inputs).filter(input => input.value.trim() !== '');
        const progress = (filledFields.length / inputs.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Adiciona evento de input para cada campo do formulário
    inputs.forEach(input => {
        // Carrega o valor salvo no localStorage, se existir
        if (localStorage.getItem(input.name)) {
            input.value = localStorage.getItem(input.name);
            updateFieldData(input); // Atualiza a barra de progresso ao carregar os dados
        }

        // Adiciona evento de input para salvar no localStorage e atualizar a barra de progresso
        input.addEventListener('input', () => {
            updateFieldData(input);
        });
    });

    // Submissão do formulário
    form.addEventListener('submit', event => {
        event.preventDefault();
        
        // Realiza qualquer processamento adicional necessário
        
        // Resetar o formulário e a barra de progresso após a submissão
        form.reset();
        progressBar.style.width = '0%';

        // Redirecionar para page.html após a submissão
        window.location.href = 'page.html';
    });
});

// Seleciona o formulário pelo ID
const form = document.getElementById('registration-form');

// Adiciona um listener para o evento de submit do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Cria um objeto com os dados do formulário
    const formData = {
        name: name,
        email: email,
        password: password
    };

    // Converte o objeto para JSON
    const formDataJSON = JSON.stringify(formData);

    // Salva os dados no localStorage
    localStorage.setItem('formData', formDataJSON);

    // Exemplo de como você pode exibir uma mensagem ou redirecionar após salvar os dados

    // Pode redirecionar para outra página ou fazer outra ação após salvar os dados
    // window.location.href = 'outra_pagina.html';
});

