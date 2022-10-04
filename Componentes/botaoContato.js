const secaoContato = document.querySelector('.secao__contato')

const posicaoContato = secaoContato.getBoundingClientRect()['y'];


function botaoContato(){
    posicaoContato.scrollIntoView();
}

