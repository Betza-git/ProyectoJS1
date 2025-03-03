import { postData } from "./servicios/llamados.js"
const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputCorreo = document.getElementById("inputCorreo")
const inputContrasena = document.getElementById("inputContrasena")
const inputRepContrasena = document.getElementById("inputRepContrasena")
const btnRegistrar = document.getElementById("btnRegistrar")


btnRegistrar.addEventListener("click", async (e) => {
    const usuario = {
        "nombreUsuario": inputNombre.value,
        "apellido": inputApellido.value,
        "correo": inputCorreo.value,
        "contrasena": inputContrasena.value,
        "cargo": "estudiante"
    }
    if (inputContrasena.value != inputRepContrasena.value) {
        Swal.fire({
            title: 'Error!',
            text: 'Las contraseñas no coinciden',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else{
        await postData(usuario, "usuarios")
        Swal.fire({
            title: 'Registro exitoso!',
            text: 'Usuario registrado con éxito',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
})