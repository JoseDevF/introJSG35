
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

const accounts = [
    { mail: "mali@gmail.com", balance: 900, password: "123456" },
    { mail: "joss@hotmail.com", balance: 350, password: "password" },
    { mail: "alex@outlook.com.mx", balance: 700, password: "jkhkl" },
    { mail: "andrea@gmail.com", balance: 700, password: "123456" },
];


function submitHandler(e) {
    e.preventDefault();

    const loginSection = document.querySelector("#login_sec")
    const homeSection = document.querySelector("#home_sec")
    const balanceContainer = document.querySelector("#saldo")
    const user = e.target.user.value;
    const password = e.target.password.value;
    //let loginFlag = false;
    let loginFlag = null; //falsy

    /* componente funcional */

    function renderingBalance(obj) {
        let template = `
        <div class="mt-5">
            <h1>Bienvenido de nuevo ${obj.mail}</h1>
            <h2>Saldo ${obj.balance}</h2>

            <div class="my-3 col-4">
                <label for="usuario" class="form-label">Incrementar saldo</label>
                <input id="input_balance" name="saldo" type="number" min="0" class="form-control" id="input_saldo">
            </div>
            
            <button id="add_balance_btn" class="btn btn-primary mt-5">agregar saldo</button>

            <button id="number_1" class="btn btn-primary mt-5">1</button>
        </div>
        `


        homeSection.innerHTML = template;

        const addBalanceButton = document.querySelector("#add_balance_btn");
        /* Manipulación del input value */
        const number1 = document.querySelector("#number_1");
        const inputBalance = document.querySelector("#input_balance");

        /* Manipulación del input value */
        number1.addEventListener("click", () => {
            const valor_previo = inputBalance.value.toString();
            inputBalance.value = valor_previo + 1;
        })

        addBalanceButton.addEventListener("click", addBalanceHandler);
        inputBalance.addEventListener("input", (e) => {
            console.log("Balance:", e.target.value);
        });

    }

    function addBalanceHandler(e) {

        const addBalanceInput = document.querySelector("#input_saldo");
        const current = localStorage.getItem("balance");

        let newBalance = parseInt(current) + parseInt(addBalanceInput.value);

        localStorage.setItem("balance", newBalance);

        const mail = localStorage.getItem("mail");
        const balance = localStorage.getItem("balance");

        renderingBalance({ mail: mail, balance: balance });

    }

    function loginSuccessfully(obj) {
        console.log("Login Successfully");

        /* for in */
        localStorage.setItem("mail", obj.mail);
        localStorage.setItem("password", obj.password);
        localStorage.setItem("balance", obj.balance);

        /* Lo ideal es hacer el redireccionamiento */

        console.log(localStorage.getItem("mail"));

        loginSection.style.display = "none";//ocultate
        homeSection.classList = "";//muestraste

        /* Renderizado clásico */
        let parrafo = document.createElement("h2")

        parrafo.innerText = "Saldo: " + obj.balance;
        parrafo.style.color = "black";

        balanceContainer.appendChild(parrafo);

        /* Renderizado con string templates */
        renderingBalance(obj);
    }

    for (let i = 0; i < accounts.length; i++) {

        /* Sintaxis  */
        accounts[i].mail === user && accounts[i].password === password ?
            loginFlag = accounts[i]
            : null;

        /* Son equivalentes */
        /* accounts[i].mail === user && accounts[i].password === password ? loginFlag = true : null; */

        /*  if (accounts[i].mail === user && accounts[i].password) {
             loginSuccessfully()
         } else {
             alert("Usuario o contraseña incorrecto");
         } */
    }

    loginFlag !== null ? loginSuccessfully(loginFlag) : alert("Usuario o contraseña incorrecto");
}