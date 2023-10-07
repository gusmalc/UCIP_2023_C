let resultado = document.getElementById('resultado');
let form_palabras = document.getElementById('form_palabras');
let miimput = document.querySelectorAll(".miinput");

let frase = "";

form_palabras.addEventListener('submit',(e)=>{
    e.preventDefault();   


    miimput.forEach((d, i) => {
      frase += d.value + " ";
    });
    
    
    
    resultado.innerHTML = `

    <h2>El usuario escribió:</h2>
    <p class="texto">${frase}</p>   
    
    `;  




    frase = "";  
})

form_palabras.addEventListener('reset', ()=>{
    resultado.innerHTML = "";
})