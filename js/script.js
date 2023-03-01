let pesoTotal = 0;

function allowDrop(e){
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}  

function drop(e){
    e.preventDefault();

    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));

    if(e.target.id == 'div2'){
        pesoTotal += parseInt(document.getElementById(data).getAttribute('data-peso'));
    } else if(e.target.id == 'div1'){
        pesoTotal -= parseInt(document.getElementById(data).getAttribute('data-peso'));
    }

    document.getElementById('pesoTotal').innerHTML = pesoTotal + 'Kg';
}

function dragEnd(e){
    // if(e.target.parentNode.id != 'div2'){
    //     pesoTotal -= parseInt(e.target.getAttribute('data-peso'));

    //     document.getElementById('pesoTotal').innerHTML = pesoTotal + 'Kg';
    // }
}