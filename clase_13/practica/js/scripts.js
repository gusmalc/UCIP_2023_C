let botones = document.getElementById('botones');
let ficha = document.getElementById('ficha');
// let cantidad = document.getElementById('cantidad');

botones.addEventListener('click', (ev)=>{
    let elem = ev.target;
    if(elem.id != 'botones'){
        let d = elem.dataset.tipo;
        let c = elem.dataset.cantidad;
        let e = elem.dataset.edad;
        carga_ficha(d,c,e);
    }
    
})

function carga_ficha(tipo,x, edad){
    let url = `animales/${tipo}.html`;
    fetch(url)
    .then(res => res.text() )
    .then(aa =>{
        
        let cc = `<h1>Cantidad: ${x}</h1>`;
        let ee = `<h1>Edad humana: ${parseFloat(edad)+3}</h1>`;

        ficha.innerHTML = aa + cc + ee;
        // cantidad.innerHTML = `<h1>Cantidad: ${x}</h1>`;
    })
    .catch(err=>{ console.log(err.message) });
}