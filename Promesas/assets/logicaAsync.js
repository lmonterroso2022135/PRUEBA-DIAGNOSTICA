
async function enviarDatos(){
    const nombre = document.getElementById('nombre').value;
    try{
        const resultado = await enviarDatosAlServidor(nombre);
        mostrarMensajeBienvenida(resultado);
    }catch(mensaje){
        mostrarMensajeError(mensaje);

    }
}


function enviarDatosAlServidor(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            const autorizado = (nombre.toLowerCase() == 'papavictor');
            const resultado = autorizado ? 'Yo soy el cordil': 'Acceso no autorizado';
            resultado ? resolve(resultado) : rejact(resultado);
        }, 2000);
    });
}
function mostrarMensajeBienvenida(mensaje){
    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}
function mostrarMensajeError(mensaje){
    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}