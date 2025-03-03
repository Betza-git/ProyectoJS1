import { getData,postData,patchData } from "./servicios/llamados.js"

const Nombre = document.getElementById("id")
const contraseña = document.getElementById("contraseña")
const mostrarLista = document.getElementById("mostrarLista")
const loginForm = document.getElementById("loginForm")

const estuId = document.getElementById("estuId")
const contraestu = document.getElementById("contraestu")
const ingresarestu = document.getElementById("ingresarestu")

ingresarestu.addEventListener("click", async (e) => {
    e.preventDefault()
      const usuarios = await getData("usuarios")
      const usuarioEstudiante = usuarios.find(usuario => usuario.nombreUsuario === estuId.value && usuario.contrasena === contraestu.value && usuario.cargo === "estudiante")
      const usuarioAdmin = usuarios.find(usuario => usuario.nombreUsuario === estuId.value && usuario.contrasena === contraestu.value && usuario.cargo === "admin")
      if(usuarioEstudiante){
          window.location.href = "pagEstudiante.html" 
          localStorage.setItem("usuario", usuarioEstudiante.nombreUsuario)
        }else if(usuarioAdmin){
            window.location.href = "pagAdmin.html"
          localStorage.setItem("usuario", usuarioAdmin.nombreUsuario)
      }else{
          Swal.fire({
              title: 'Error!',
              text: 'Usuario incorrecto',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
      }
  
  
  console.log("hola")	;
  e.preventDefault()
  let usuario = {
  "nombreUsuario": estuId.value,
  "password": contraestu.value,
   "cargo": "estudiante"
  }
  await postData(usuario,"usuarios")

})