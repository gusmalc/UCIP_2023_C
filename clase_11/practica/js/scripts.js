let btn_hamb = document.getElementById('btn_hamb');
let menu = document.getElementById('menu');


btn_hamb.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar_menu');
})