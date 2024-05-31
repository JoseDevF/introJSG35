
const encabezado_byId = document.getElementById("title");
const encabezado_byQuery = document.querySelector("#title");

console.log("By ID:", encabezado_byId);
console.log("By Query:", encabezado_byQuery);

const contenedor = document.querySelector(".container");

/* Creando un parrafo desde 0 */

let parrafo = document.createElement("p")

parrafo.innerText = "hola mundo";
parrafo.style.color = "red";

contenedor.appendChild(parrafo);


/* const botonModal = document.querySelector("#boton_modal");

if (esUsuario) {
    botonModal.setAttribute("data-bs-target", "#modal_usuario");
} else {
    botonModal.setAttribute("data-bs-target", "#modal_empresa");
} */


/* Paso 1 ¿A quien quiero asociar el listener?*/
const botonModal = document.querySelector("#boton_modal");

/* Paso 2 Agregar un listener*/
/* Paso 3 Definir el evento que quiero cachar, o por el cual quiero estar pendiente */
/* Paso 4 Definir lo que haré cuando suceda el evento */
/* botonModal.addEventListener("click", ()=>{

}) */

botonModal.addEventListener("click", onClick)
botonModal.addEventListener("mouseover", onHover)
botonModal.setAttribute("data-bs-target", "#modal_usuario");

function onClick(e) {
    console.log("On click", e.target);
}

function onHover(e) {
    console.log("On hover", e.target);
    e.target.style.color = "red"
}

function miFuncion() {
    return "hola";
}

miFuncion();

const userInput = document.querySelector("#user_input");
const userPassword = document.querySelector("#user_password");
const sendButton = document.querySelector("#send_button");

sendButton.addEventListener("click", clickHandler);

function clickHandler() {
    console.log("usuario", userInput.value);
    console.log("password", userPassword.value);
}

const formulario = document.querySelector("#credenciales");

formulario.addEventListener("submit", submitHandler)

const users = [
    { name: "John", password: "4d5s6a4d5s6ad" },
    { name: "John", password: "4d5s6a4d5s6ad" },
    { name: "John", password: "4d5s6a4d5s6ad" }
]


function submitHandler(e) {
    e.preventDefault();
    console.log("Usuario:", e.target.user.value);
    //console.log("Password:", e.target.password.value);
}
