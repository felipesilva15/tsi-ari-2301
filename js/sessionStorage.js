if(sessionStorage.visitas){
    sessionStorage.visitas = parseInt(sessionStorage.visitas) + 1;
} else{
    sessionStorage.setItem('visitas', '1')
}