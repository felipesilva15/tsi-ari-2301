let nome = window.prompt('Digite o seu nome:');
let endereco = window.prompt('Digite o seu endereço:');
let cpf = window.prompt('Digite o seu CPF:');
let dependentes = window.prompt('Digite o número de dependentes:');

localStorage.setItem('nome', nome);
localStorage.setItem('endereco', endereco);
localStorage.setItem('cpf', cpf);
localStorage.setItem('dependentes', dependentes);

alert(localStorage.getItem(''));