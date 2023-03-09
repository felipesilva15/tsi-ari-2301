let corFundo, corFonte, nome; 

const inputNome = document.getElementById('fnome');

function defineCor(op, cor) {
    if(op == 1){
        document.body.style.backgroundColor = cor;
        corFundo = cor
    } else{
        document.body.style.color = cor;
        corFonte = cor;
    }
}

function gravar() {
    localStorage.setItem('nome', inputNome.value);
    localStorage.setItem('corFundo', corFundo);
    localStorage.setItem('corFonte', corFonte);
}

inputNome.value = localStorage.getItem('nome') ?? '';
defineCor(1, localStorage.getItem('corFundo') ?? '')
defineCor(0, localStorage.getItem('corFonte') ?? '')