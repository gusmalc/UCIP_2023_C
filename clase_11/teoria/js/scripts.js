// function saludar(){
//     alert('HOLA');
// }

// let saludar = ()=>{
//     alert('ok');
// }



// saludar();

let btn1 = document.getElementById('btn1');

btn1.onclick = ()=>{
    alert('ok');
}

// btn1.addEventListener('click',saludar);

window.onload = ()=>{
    alert('pagina cargada');
}

//saludar();


// let sumar = (a,b)=>{
   
//     return a+b;
// }

let sumar = (a,b)=> a+b;

let duplicar = a => a*2;

let x = sumar(5,10);

let y = duplicar(10);

//alert(y)
//sumar(5,6);

