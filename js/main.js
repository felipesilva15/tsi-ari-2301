worker1 = new Worker('js/worker1.js');

function calcularQuadrado(){
    worker1.postMessage(document.querySelector('#inputNumber1').value);
}

worker1.addEventListener('message', (e) => {
    document.querySelector('#resultado1').textContent = "O quadrado do número digitado é " + e.data; 
});

worker2 = new Worker('js/worker2.js');

function calcularFatorial(){
    worker2.postMessage(document.querySelector('#inputNumber2').value);
}

worker2.addEventListener('message', (e) => {
    document.querySelector('#resultado2').textContent = "O fatorial do número digitado é " + e.data; 
});