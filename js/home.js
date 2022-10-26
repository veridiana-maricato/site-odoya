//Javascript puro

// let menuButton = document.querySelector('.menu-principal__btn')
// let menuPrincipal = document.querySelector(".menu-principal")

// menuButton.addEventListener('click', abreFechaMenu);

// function abreFechaMenu(){
// menuPrincipal.classList.toggle("menu-principal--fechado")
// }

// jquery
$(document).ready(function(){
  

    // Slide depoimentos
    $('.depoimentos__caixa').slick({
        autoplay:true,
        arrows: false,
        dots: true,
        autoplaySpeed: 3000,
    });
})


function teste(){
    alert('funciona')
}
