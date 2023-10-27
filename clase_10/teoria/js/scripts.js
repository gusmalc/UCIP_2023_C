let app = document.getElementById('app');


let nombre = "Juan";
let apellido = "Gomez";

// app.innerHTML = "Tu nombre es: " + nombre + " " + apellido;

app.innerHTML = `
    <h1 class='color_rojo'>Tu nombre es: ${nombre} ${apellido}</h1>
    <h2>Buen día</h2>
    <p class='color_rojo'>aaaaaaaaaaaa</p>
`;

// el.style.cssText = "background-color: #000; color: #fff;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";

let titulo = document.getElementById('titulo');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');


btn1.addEventListener('click', function(){
    //titulo.style.color = "#f00";
    // titulo.style.cssText = "background-color: #000; color: #fff;";
    titulo.classList.add('color_verde');

})

btn2.addEventListener('click', function(){
   
    titulo.classList.remove('color_verde');

})

btn3.addEventListener('click', function(){
   
    titulo.classList.toggle('color_verde');

})


let estilos = document.getElementById('estilos');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');

btn4.addEventListener('click', function(){
   
   estilos.href = "css/oscuro.css";

})
btn5.addEventListener('click', function(){
   
    estilos.href = "css/estilos.css";
 
 })