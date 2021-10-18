
const form = document.querySelector("#formulario");
const regExpLetras = /^[a-zA-Z]+$/gi
const nombre = document.querySelector("#nombre");
const errorN = document.querySelector(".errorNombre")
const asunto = document.querySelector("#asunto");
const errorA = document.querySelector(".errorAsunto")
const mensaje = document.querySelector("#mensaje");
const errorM = document.querySelector(".errorMensaje")
const resultado = document.querySelector(".resultado")

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(!regExpLetras.test(nombre.value)){
        errorN.innerHTML = "El nombre es requerido. Ingrese solo caracteres alfabeticos"
    }
    if(!regExpLetras.test(asunto.value)){
        errorA.innerHTML = "El asunto es requerido. Ingrese solo caracteres alfabeticos"
    }
    if(!regExpLetras.test(mensaje.value)){
        errorM.innerHTML = "El mensaje es requerido. Ingrese solo caracteres alfabeticos"
    }else{
        resultado.innerHTML = "Mensaje enviado con exito"
        errorN.innerHTML = " "
        errorA.innerHTML = " "
        errorM.innerHTML = " "
    
    }
})
