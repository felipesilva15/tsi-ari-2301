let corFundo, corFonte, nome; 

const inputNome = document.getElementById('fnome');
const form = document.getElementById('fconf');
const painel = document.getElementById('painel');

function mostrarOpcoes(){
    form.style.display = 'block';
}

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

function iniciar(){
    if(localStorage.getItem('nome') && (localStorage.getItem('nome') ?? '') != ''){
        inputNome.value = localStorage.getItem('nome');
        painel.innerHTML = 'Seja bem-vindo ' + localStorage.getItem('nome');
    }

    defineCor(1, localStorage.getItem('corFundo') ?? '')
    defineCor(0, localStorage.getItem('corFonte') ?? '')
}

iniciar()