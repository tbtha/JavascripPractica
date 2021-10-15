const valorUno = document.querySelector("#valor1");
const valorDos = document.querySelector("#valor2");
const resultado = document.querySelector(".resultado");

const botonSuma = document.querySelector("#btn-sumar");
const botonResta = document.querySelector("#btn-restar");

botonSuma.addEventListener('click' , function(){
    const resultadoSuma = parseInt(valorUno.value) + parseInt(valorDos.value);
  resultado.innerHTML = resultadoSuma
})

botonResta.addEventListener('click' , function(){
    const resultadoSuma = parseInt(valorUno.value) - parseInt(valorDos.value);
        if(resultadoSuma >= 0){
            resultado.innerHTML = resultadoSuma
        }else{
            resultado.innerHTML = 0
        }
})
