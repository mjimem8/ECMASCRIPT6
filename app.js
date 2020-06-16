//-------------------- STRINGS ----------------------- 

var saludo = "Hola Mundo!";

saludo.startsWith("Hola");
saludo.startsWith("Mundo", 5); //true
saludo.endsWith("!");
saludo.includes("x");
saludo.includes("a", 5); //false

var texto = "Hola";
console.log(texto.repeat(3)); //HolaHolaHola

//----------------------------

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto);

//--------------------

let mensaje = String.raw `prueba /n intro`;
console.log(mensaje);


//-------------------- FUNCIONES ---------------------

function saludo2(mensaje = "Hola mundo", tiempo = 1500) {

    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);

}
saludo2();

//---------------

//------------------- Parametro REST -------------------------

//parámetros rest nos permiten representar un número indefinido de argumentos como un array
function agregar_alumno(arr_alumnos, ...alumnos) {
    //console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;
}

var alumnos_arr = ["Fernando"];
var alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro");

console.log(alumnos_arr2);

//---------

//------------ OPERADOR SPREAD -----------------

//Tiene la misma sintaxis que el parametro REST pero con la diferencia que este aplana un array en elementos separados
let numeros = [1, 10, 50, 100];

let max = Math.max(...numeros);

console.log(max);

//--------------

let persona1 = {
    nombre: "manuel",
    edad: 22
};

let persona2 = {...persona1 };
persona2.nombre = "juan";

//guarda en persona2 las propiedades del primero objeto y con ello cuando cambiamos su nombre a persona2 no cambia también el de persona1
//que esto si hubiera pasado si hubieramos hecho esto -> persona2 = persona1;
console.log(persona1, persona2);

//--------------

//fusionar objetos de forma simple con SPREAD
let persona11 = {
    nombre: "manuel",
    edad: 22
};

let persona22 = {
    nombre: "juan",
    edad: 18,
    conduce: true,
    coche: true,
    direccion: "Calle la cueva"
};

persona11 = {
    ...persona22,
    ...persona11
};

console.log(persona11);


//--------------------- FUNCIONES FLECHA ----------------------