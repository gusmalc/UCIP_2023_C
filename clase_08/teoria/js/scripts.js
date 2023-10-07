



let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];


dias.forEach((d, i) => {

    //let x = d + " - " + i; 
    let x = `${d} -- ${i} -ccc ${d}`;
  console.log(x);
});

let n = [1,2,3];

n.forEach((d, i) => {
    console.log(d + 10);
  });


//let caja1 = document.getElementById('caja1');
//let caja1 = document.querySelector('#caja1');

let cajas = document.querySelectorAll('.cajas');
let frase = "";
// cajas.forEach((d, i) => {
//     // frase = frase + d.innerHTML + " ";
//     frase += d.innerHTML + " ";  
// });
// console.log(frase);

// function suma(a,b){
//     return a+b;
// }

// let c = suma(5,4);

// alert(c);

// let suma = (a,b)=>{
//     alert(a+b);
// }

// suma(9,5);

// let suma = (a,b)=>{
//     return a+b;
// }

let f = a =>  a+2;

let suma = (a,b) =>  a+b;


let c = suma(9,5);

alert(c);