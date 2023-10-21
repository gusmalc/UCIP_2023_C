// let caja1 = document.getElementById('caja1');
// let caja2 = document.getElementById('caja2');

// caja1.addEventListener('click', ()=>{
//     alert('Soy caja 1');
// })
// caja2.addEventListener('click', ()=>{
//     alert('Soy caja 2');
// })

let caja1 = document.getElementById('caja1');

caja1.addEventListener('click', function(ev){
    let elemento = ev.target;
    if(elemento.id != "caja1"){
        alert(elemento.dataset.n);
    }
   
   

   
})