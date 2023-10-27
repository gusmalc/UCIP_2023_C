let visor = document.getElementById('visor');
let resultado = document.getElementById('resultado');
let teclado = document.getElementById('teclado');

let cont_visor = "";
let nc = 0;

teclado.addEventListener('click', function(ev){
    let x = ev.target;
    
    if(x.id != "teclado"){
        console.log(nc)
        if(nc == 7){
            //alert('ok')
            nc = 0;
            visor.innerHTML = "";
            cont_visor = "";
        }
        let y = x.dataset.val;
        cont_visor += y;
        visor.innerHTML = cont_visor;
        nc++;
        console.log(nc)
    }    
    // if(cont_visor.length == 6){
    //     resultado.style.background = `#${cont_visor}`;
    //     visor.innerHTML = "";
    //     cont_visor = "";
    // }

    if(nc == 6){
        resultado.style.background = `#${cont_visor}`;
        nc++;
    }

})