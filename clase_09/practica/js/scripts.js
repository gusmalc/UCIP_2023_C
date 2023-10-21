let visor = document.getElementById('visor');
let resultado = document.getElementById('resultado');
let teclado = document.getElementById('teclado');

let cont_visor = "";

teclado.addEventListener('click', function(ev){
    let x = ev.target;
    if(x.id != "teclado"){
        let y = x.dataset.val;
        cont_visor += y;
        visor.innerHTML = cont_visor;
    }
})