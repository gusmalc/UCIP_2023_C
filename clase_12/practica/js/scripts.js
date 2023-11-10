let btn1 = document.getElementById('btn1');
let resultado = document.getElementById('resultado');

btn1.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json() )
        .then(obj =>{
            crear_tabla(obj);
        })
        .catch(err=>{
            console.log(err.message);
        });
})

function crear_tabla(obj){
    let tabla = `
    <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NOMBRE</th>
        <th scope="col">EMAIL</th>
        
      </tr>
    </thead>
    <tbody>
    `;

    obj.forEach((dato, index) => {
        tabla += `
        <tr onclick="cargar_ficha(${dato.id})">
            <td>${dato.id}</td>
            <td>${dato.name}</td>
            <td>${dato.email}</td>
            
          </tr>
        `;
    });

    tabla += `
    </tbody>
      </table>
    `;

    resultado.innerHTML = tabla;

}

function cargar_ficha(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> res.json() )
        .then(obj =>{
            crear_ficha(obj);
        })
        .catch(err=>{
            console.log(err.message);
        });
}

function crear_ficha(obj){
    let ficha = `
    <div class="ficha">
    <h1>${obj.name}</h1>
    <h2>${obj.email}</h2>
    <h2>${obj.address.street}</h2>
    </div>
    `;

    resultado.innerHTML = ficha;
}