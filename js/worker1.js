addEventListener('message', (e) => {
    postMessage(e.data ** 2);
});