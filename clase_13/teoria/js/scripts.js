let btn_cargar = document.getElementById('btn_cargar');
let respuesta = document.getElementById('respuesta');


btn_cargar.addEventListener('click', ()=>{
    fetch('texto.html')
    .then(res => res.text() )
    .then(ficha =>{
        respuesta.innerHTML = ficha;
    })
    .catch(err=>{ console.log(err.message) });
})








