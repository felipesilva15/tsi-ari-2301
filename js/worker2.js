addEventListener('message', (e) => {
    let fatorial = 1;
    
    for (let i = 1; i <= e.data; i++) {
        fatorial *= i;
    }

    postMessage(fatorial);
});