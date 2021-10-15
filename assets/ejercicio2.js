const rojo = document.querySelector("#btn-1");
const naranjo = document.querySelector("#btn-2");
const amarillo = document.querySelector("#btn-3");
const verde = document.querySelector("#btn-4");
const celeste = document.querySelector("#btn-5");
const rosa = document.querySelector("#btn-6");
const caja = document.querySelector("#caja");


    rojo.addEventListener('click' , function (){
        caja.style.backgroundColor = "#e53e3e" ;
    })

    naranjo.addEventListener('click' , function(){
        caja.style.backgroundColor = "#dd6b20";
    })

    amarillo.addEventListener('click', function(){
        caja.style.backgroundColor = "#faf089";
    })

    verde.addEventListener('click', function(){
        caja.style.backgroundColor = "#48bb78";
    })

    celeste.addEventListener('click', function(){
        caja.style.backgroundColor = "#81e6d9";
    })

    rosa.addEventListener('click', function(){
        caja.style.backgroundColor = "#d53f8c";
    })
