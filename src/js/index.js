/* 
    Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    1.1 - PEGAR O ELEMENTO BOTÃO QUE ESTÁ NO HTML

    1.2 - IDENTIFICAR O CLICK DO USUÁRIO NO BOTÃO

    1.3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOMENTE 

    1.4 - MARCAR O BOTÃO O SELECIONAR O BOTÃO DESEJADO

    1.5 - ESCONDER A IMAGEM ATIVA DE FUNDO ANTERIOR

    1.6 - FAZER APARECER A IMAGEM DE FUNDO CORRESPONDENTE AO BOTÃO CLICADO
*/

// 1.1 - PEGAR O ELEMENTO BOTÃO QUE ESTÁ NO HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// 1.2 - IDENTIFICAR O CLICK DO USUÁRIO NO BOTÃO
botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // 1.3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOMENTE 
        desativarBotaoSelecionado();

        // 1.4 - MARCAR O BOTÃO O SELECIONAR O BOTÃO DESEJADO
        botaoSelecionado(botao);

        // 1.5 - ESCONDER A IMAGEM ATIVA DE FUNDO ANTERIOR
        esconderImagemAtiva();

        // 1.6 - FAZER APARECER A IMAGEM DE FUNDO CORRESPONDENTE AO BOTÃO CLICADO
        mostrarImagemDeFundo(index);
    })
})

function mostrarImagemDeFundo(index) {
    imagens[index].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function botaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
