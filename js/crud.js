
const usuarios= [];

function registrarUsuario(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const contraConfi = document.getElementById('contra-confi').value;
    const termino = document.getElementById('termino');

    if(nombre === ''){
        alert ('El campo Nombre es obligatorio');
        return;
    }

    if(apellido === ''){
        alert ('El campo Apellido es obligatorio');
        return;
    }

    if(correo === ''){
        alert ('El campo Correo electrónico es obligatorio');
        return;
    }

    if(contraseña === ''){
        alert ('El campo Contraseña es obligatorio');
        return;
    }

    if(contraConfi === ''){
        alert ('El campo Confirmar Contraseña es obligatorio');
        return;
    }


    if(!termino.checked){
        alert("Debes aceptar los términos y condiciones");
        return;
    }


    if(contraseña !== contraConfi){
        alert ("Las contraseñas no coinciden");
        return;
    }


    const usuario = {
        nombre,
        apellido,
        correo,
        contraseña
    };

    usuarios.push(usuario);
    alert("Usuario Registrado");
    mostrarUsuarios();
   
}


function mostrarUsuarios() {
    console.log("Usuarios registrados");
    console.log("--------------------");
    
    usuarios.forEach((usuario, index) => {
        console.log(`Usuario: ${index + 1}`);
        console.log(`Nombre: ${usuario.nombre} ${usuario.apellido}`);
        console.log(`Email: ${usuario.correo}`);
        console.log("-------------------");
    });
}
