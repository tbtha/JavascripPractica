const form = document.querySelector("#formulario");
    form.addEventListener("submit", login)

    function login (event){
        event.preventDefault();

        const nombre = document.querySelector("#nombre");
        const asunto = document.querySelector("#asunto");
        const mensaje = document.querySelector("#mensaje");
        const errorN = document.querySelector(".errorNombre")
        const errorA = document.querySelector(".errorAsunto")
        const errorM = document.querySelector(".errorMensaje")
        const resultado = document.querySelector(".resultado")
        const expresiones =document.querySelector(".expresiones")

        const regExpLetras = /^[a-zA-Z]+$/gi
        
        if(!nombre.value.trim()){
            errorN.innerHTML = "El nombre es requerido."
            return;
        }
        if (!asunto.value.trim()){
            errorA.innerHTML = "El asunto es requerido"
            return;
        }
        if(!mensaje.value.trim()){
            errorM.innerHTML = "El mensaje es requerido"
            return;
        }else {
            resultado.innerHTML = "Mensaje enviado con éxito !!!"
            
        }

        if(!regExpLetras.test(nombre.value) || !regExpLetras.test(asunto.value) || !regExpLetras.test(mensaje.value)) {
            return (expresiones.innerHTML = "Ingrese solo letras no números");
            }
           
}