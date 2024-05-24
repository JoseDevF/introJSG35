console.log("Hola mundo desde archivo");

/* Tipos de variables */
var sumav = 0;

/* Solo estas dos se utilizan */
let sumal = 0;
const suma = 5 + 8;

console.log("SUMA:", suma);

/* Reglas para nombrar variables 

*No debe haber espacios
*No pueden iniciar con un número
*No deben contener caracteres especiales como operadores, comparadores, etc...

*Se recomienda que solo tenga caracteres alfanuméricos
*Para frases o varias palabras se puede utilziar _ ó -

*/

/* Tipos de dato */
let numero = 150; //Números
let lista_de_precios = [50, 45, 22, 36];
let texto = "hola mundo"; //Texto
let texto_alt = 'hola mundo'; //Texto
let verdadero = true;//boolean
let falso = false;//boolean
let objetos = {
    nombre: "Raul",
    apellido: "Hernández",
    estatura: 1.80
}
let arreglo = [150, 200, 58, 96, 410, 6];

console.log("Longitud de arreglo:", arreglo.length);

/* Operadores básicos */
/* aritmeticos */
numero + 5;
numero - 5;
numero * 5;
numero / 5;
numero % 5;
numero ** 5;

/* Operadores lógicos */

numero && 5;//AND
numero || 5;//OR
!numero //NOT

/* Condicional */

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");

console.log(5 != 5);
console.log(5 != "5");
console.log(5 !== "5");


let condicion = true;//Evalua si un recurso esta disponible

if (condicion) {
    console.log("Se cumplen los requisitos")//Muestra imagen
} else {
    console.log("No se cumplen los requisitos :(")
}


let usuario = "Joss";
let pass = "1234567";
let codigo = "GEEK2024"

if (usuario === "Joss" && pass === "123456") {
    //Simulamos que mandamos un código de verificación (2FA)
    if (codigo === "GEEK2024") {
        console.log("Bienvenido")//Muestra imagen
    }
} else {
    console.log("No se cumplen los requisitos :(")
}


let opA = null;
let opB = 50;

console.log("OpA tiene: ", opA);
console.log("OpB tiene: ", opB);

if (opA !== undefined && opB !== undefined) {
    console.log("SUMA ->", opA + opB);
}

let variable_nula = null;

console.log("El nulo es: ", variable_nula);

/* Entrada de datos desde alert o ventana emergente */
//let color = prompt("Ingresa un color: ");
let color = "verde";

switch (color) {
    case "verde":
        console.log("avanza");
        break;
    case "amarillo":
        console.log("ve frenando");
        break;
    case "rojo":
        console.log("detente");
        break;
    default:
        console.log("No es un color válido");
        break;
}

/* Estructuras de control de repetición */

/* WHILE */

let conde = 0;

while (conde < 10) {
    console.log("El valor del conde: ", conde);

    /*  conde = conde + 1;
     conde += 1; */
    conde++;
}

/* DO WHILE */

let condeAlt = 0;

console.log("DO WHILE")

do {
    console.log("El valor del conde: ", condeAlt);
    condeAlt = condeAlt + 1;
} while (condeAlt < 10)

/* FOR */

for (let index = 0; index < 10; index++) {
    console.log("Valor de index:", index);
}

console.log("FOR IN:")

let objeto = {
    nombre: "Raul",
    apellido: "Hernández",
    estatura: 1.80
}

for (let propiedad in objeto) {
    console.log("Propiedad:", propiedad);
    console.log("Valor:", objeto[propiedad]);
}

console.log("FOR OF:")

let arregloAlt = [150, 200, 58, 96, 410, 6];

for (let elemento of arregloAlt) {
    console.log("Elemento:", elemento);
}

console.log("FOR EACH:")

arreglo.forEach(elemento => console.log("Elemento:", elemento));


/* Ejemplo acumulador */


let precios = [100, 95, 62, 25, 30];

/* ¿Cuanto es el total de la compra? */

let subtotal = 0;

/* Como funciona un acumulador */
/* Como recorro un arreglo o lista con un for clásico */

for (let i = 0; i < precios.length; i++) {
    subtotal = subtotal + precios[i];
}

console.log("subtotal:", subtotal);


miPrimerFuncion();


