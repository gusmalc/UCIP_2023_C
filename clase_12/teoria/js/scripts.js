
let arr = [1,2,3];

let persona = {
    nombre: "Maria",
    edad: 25
}

let d = 'nombre';

// console.log(arr[0]);
// console.log(persona.nombre);
// console.log(persona['nombre']);
// console.log(persona[d]);



// let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// dias.forEach((dato, index) => {
//   // let x = index + ": " + dato; 
//   let x = `${index} : ${dato}`;
//   console.log(x);
// });

let personas = [
    {nombre: "Pedro", edad: 30},
    {nombre: "Juan", edad: 25},
    {nombre: "Maria", edad: 22}
]

//console.log(personas[0].nombre);

// personas.forEach((dato, index) => {
//   // let x = index + ": " + dato; 
//   let x = `Nombre: ${dato.nombre} - Edad: ${dato.edad}`;
//   console.log(dato);
// });

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json() )
.then(obj =>{
    console.log(obj);
})
.catch(err=>{
    console.log(err.message);
});