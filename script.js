// Adiciona um evento de submit ao formulário
$('form').on('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página

    // Obtém o valor do campo de entrada com o ID 'nova-tarefa'
    const adicionarTarefa = $('#nova-tarefa').val().trim(); // O método .trim() remove espaços em branco no início e no fim

    if (adicionarTarefa) { //Verifica se o campo está vazio

        //Cria um novo item de lista (<li>) e adiciona um <span> contendo o texto da nova tarefa
        const novaTarefa = $('<li></li>').append($('<span></span>').text(adicionarTarefa)).hide() 
    novaTarefa.appendTo('#lista-tarefas').fadeIn(1000) //Adicona à lista e exibe com animação
    $('#nova-tarefa').val('') //Limpa o campo de entrada

    novaTarefa.find('span').on('click', function(e) { //Adiciona a classe 'completo' apenas ao clicar no texto
        e.stopPropagation() //Impede que o click se propaque ao li
        
        // Alterna a classe 'completo' ao clicar no texto da tarefa, aplicando o efeito de risco
        $(this).toggleClass('completo')
    })
    } else { //Se estiver vazio exibe uma mensagem de alerta
        alert("Preencha o campo de tarefas para adicionar!")
    }
    
})

//Limpa a lista ao clicar no botão de limpar lista
$('#apagar-lista').on('click', function() {
    $('#lista-tarefas').empty()
})