document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar dados do formulário
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Criar um novo elemento para exibir o feedback
    const feedbackItem = document.createElement('div');
    feedbackItem.innerHTML = <strong>${nome}</strong><p>${mensagem}</p>;
    document.getElementById('feedback-list').appendChild(feedbackItem);

    // Limpar o formulário
    this.reset();
});