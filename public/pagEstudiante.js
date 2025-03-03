import { postData } from "./servicios/llamados.js"
const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputCorreo = document.getElementById("inputCorreo")
const consulta = document.getElementById("consulta")
const btnEnviar = document.getElementById("btnEnviar")

let fecha = new Date()

btnEnviar.addEventListener("click",async function() {
    let consultas = {
        "nombreCompletoConsultor":inputNombre.value + " "+inputApellido.value,
        "correoConsultor":inputCorreo.value,
        "consulta":consulta.value,
        "horaConsulta": fecha.getHours() + ":"+fecha.getMinutes(),
        "fechaConsulta": fecha.getDate() + "/" + fecha.getMonth()+1 + "/" + fecha.getFullYear()
    }
    await postData(consultas,"admin")

const input = document.getElementById('ghost-input');
const bubble = document.getElementById('ghost-bubble');

const mouth = document.querySelector('.ghost__mouth');

input.onkeydown = (e) => {
  if (e.keyCode == 13) {
    bubble.innerText = e.target.value;
    e.target.value = '';
    
    // mouth chatter
    let i = 0;
    if (mouthChatter) clearInterval(mouthChatter);
    
    const mouthChatter = setInterval(() => {
        mouth.classList.toggle('ghost__mouth--open');
        if (i === 6) clearInterval(mouthChatter);
        i++;
    }, 300);
  }
};

})