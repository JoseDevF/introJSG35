{

}


/* Función sin parametros y sin valor de retorno */
function miPrimerFuncion() {
    console.log("Hola mundo");
}

miPrimerFuncion();

/* Función con parámetros  */

function sumaSinRetorno(x, y) {
    console.log("La suma es:", x + y);
}

/* Función con parametros y con valor de retorno */


function sumaConRetorno(x, y) {
    let suma = x + y;
    return suma;
}


/* console.log("suma alt:", suma); */

let resultado = sumaConRetorno(5, 7);
console.log("Suma R:", resultado);



function operacionMatematica(op, x, y) {
    switch (op) {
        case "suma":
            return x + y;
        case "resta":
            return x - y;
        case "multiplicar":
            return x * y;
        case "dividir":
            return x / y;
        default:
            return 0;
    }
}

let res = operacionMatematica("multiplicar", 5, 120);
console.log("resultado operación:", res);
console.log("resultado operación:", res);
console.log("resultado operación:", res);
console.log("resultado operación:", res);
console.log("resultado operación:", res);

console.log("resultado oper:", operacionMatematica("dividir", 120, 5))
console.log("resultado oper:", operacionMatematica("dividir", 120, 5))
console.log("resultado oper:", operacionMatematica("dividir", 120, 5))
console.log("resultado oper:", operacionMatematica("dividir", 120, 5))
console.log("resultado oper:", operacionMatematica("dividir", 120, 5))
console.log("resultado oper:", operacionMatematica("dividir", 120, 5))

/* Ejemplo de función anidada */



function ObtenerMacador() {
    var partido1 = 3;
    var partido2 = 3;

    function Agregar() {
        var nombre = "juanito";
        return nombre + " anoto "
            + (partido1 + partido2) + " goles";

    }

    /* Ejecución de Agregar */
    let respuesta = Agregar();

    /* Return del padre */
    return respuesta;
}

/* Ejecución de Obtener marcador */
ObtenerMacador()


/* Ejemplo var let y const */

/* Primer caso */
{
    var nombre = "Joss"
    nombre = "joss alternativo"
}

console.log("Nombre", nombre);

nombre = "Alberto"

console.log("Nombre", nombre);

/* Segundo caso */

{
    let apellido = "hernandez";
    apellido = "castro";
}
/* console.log("Apellido", apellido); */

let apellido = "flores";

console.log("Apellido", apellido);

/* Tercer caso */

const apodo = "Chucho";
/* apodo = "pepe"; */

const ID = "HJDAHDJSJDKSJKDSJDKSHD";

console.log("apodo", apodo);

/* Como hacer que una constante se comporte como variable */

const arreglo = [2, 5, 8, 19, 52, 63, 7];

console.log("arreglo antes del cambio", arreglo);

arreglo.pop();
arreglo.pop();
arreglo.pop();
arreglo.pop();
arreglo.pop();
arreglo.pop();

arreglo.push(158);
arreglo.push(158);
arreglo.push(158);
arreglo.push(158);
arreglo.push(158);

arreglo[3] = 1;

console.log("arreglo despues del cambio", typeof arreglo);


const arreglo_desestruct = [1, 5, [50, 91], 8, 9, 15];

const [num1, num2, arreglo_interno] = arreglo_desestruct;

const [numA, numB] = arreglo_interno;


console.log(numA);

let mascota = {
    nombre: "mishi",
    edad: 10,
    macho: true,
    obj2: {
        vacunado: true,
    }
}

const { nombre: mi_perro, edad, macho } = mascota;

console.log(mi_perro);
console.log(edad);

let mascota2 = { ...mascota };

console.log("MASCOTA 2", mascota2.nombre.vacunado);

console.log(mascota.nombre);


/* Todo en js es tratado como un objeto */

const numero = 56;

console.log("Es un numero?", numero.toString());


/* ¿Qué resultado produce el uso del operador AND (&&) en la expresión console.log(10 === 10 && 5 > 10) */

console.log(10 === 10 && 5 > 10);





