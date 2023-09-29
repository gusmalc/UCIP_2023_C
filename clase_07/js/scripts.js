let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');
let btn_sumar = document.getElementById('btn_sumar');
let btn_borrar = document.getElementById('btn_borrar');

// console.log(num1);

// alert(num1.value);

btn_sumar.addEventListener('click',sumar);

function sumar(e){
    e.preventDefault();
    let a = parseInt(num1.value) ;
    let b = parseInt(num2.value) ;

    let r = a + b;

    if (isNaN(r)) {
        resultado.innerHTML = "Ingresar números";
    } else {
        resultado.innerHTML = r;
    }

    
}

btn_borrar.addEventListener('click',function(){
    num1.value = 0;
    num2.value = 0;
    resultado.innerHTML = 0;
});

num1.addEventListener("click", () => {
    num1.value = "";
});
num2.addEventListener("click", () => {
    num2.value = "";
});
