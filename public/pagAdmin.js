import { getData } from "./servicios/llamados.js"

const tablaDatos = document.getElementById("tablaDatos")
const cerrar = document.getElementById("cerrar")
async function mostrarDatos() {
    const consultas = await getData("admin")


    const thNombre = document.createElement("th")
    thNombre.textContent = "Nombre consultor"
    const thCorreo = document.createElement("th")
    thCorreo.textContent = "Correo"
    const thConsulta = document.createElement("th")
    thConsulta.textContent = "Consulta"
    const thHoraConsulta = document.createElement("th")
    thHoraConsulta.textContent = "Hora consulta"
    const thFechaConsulta = document.createElement("th")
    thFechaConsulta.textContent = "Fecha consulta"
    const trEncabezado = document.createElement("tr")

    trEncabezado.appendChild(thNombre)   
    trEncabezado.appendChild(thCorreo)   
    trEncabezado.appendChild(thConsulta)   
    trEncabezado.appendChild(thHoraConsulta)   
    trEncabezado.appendChild(thFechaConsulta)   

    tablaDatos.appendChild(trEncabezado)

    consultas.forEach(element => {
        const tdNombre = document.createElement("td")
        tdNombre.textContent = element.nombreCompletoConsultor
        const tdCorreo = document.createElement("td")
        tdCorreo.textContent = element.correoConsultor
        const tdConsulta = document.createElement("td")
        tdConsulta.textContent = element.consulta
        const tdFecha = document.createElement("td")
        tdFecha.textContent = element.fechaConsulta
        const tdHora = document.createElement("td")
        tdHora.textContent = element.horaConsulta   

        const trConsulta = document.createElement("tr")

        trConsulta.appendChild(tdNombre)
        trConsulta.appendChild(tdCorreo)
        trConsulta.appendChild(tdConsulta)
        trConsulta.appendChild(tdFecha)
        trConsulta.appendChild(tdHora)

        tablaDatos.appendChild(trConsulta)
    });
}

mostrarDatos()

cerrar.addEventListener("click",()=>{
    setTimeout(() => {
        Swal.fire({
            title: 'info!',
            text: 'Cerrando sesión',
            icon: 'info',
            confirmButtonText: 'Cool'
          })
          window.location.href = "index.html"
          localStorage.clear()
    }, 1000);
})