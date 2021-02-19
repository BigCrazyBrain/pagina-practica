const menu = document.querySelector('.icono_de_menu');
const menu_desplegado = document.querySelector('.menu-navegacion');


menu.addEventListener('click', ()=>{
    menu_desplegado.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if (menu_desplegado.classList.contains('spread') && e.target != menu_desplegado && e.target != menu){
        menu_desplegado.classList.toggle("spread")
    }
})