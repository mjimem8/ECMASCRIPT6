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

//es lo mismo
var miFuncion2 = function(valor) { return valor; }
let miFuncion1 = valor => valor;

var sumar2 = function(num1, num2) { return num1 + num2; }
let sumar1 = (num1, num2) => num1 + num2;

var saludar2 = function() { return "Hola mundo"; }
let saludar1 = () => "Hola mundo";

//Funciones anonimas

var saludo1 = function(nombre) {
    return "Hola " + nombre;
}("Manuel");

var saludo2 = (nombre => `Hola ${nombre}`)("Melissa");

console.log(saludo1, saludo2);

//Ejemplo practico de utilizar this

//tenemos que utilizar bind para hacer referencia con this al propio objeto
//con la funcion arrow ahorramos codigo y es mas util porque el this ya hace referencia al objeto
//las funciones flecha no tienen constructor por lo cual no se puede instanciar con new, ni se pueden utilizar sus paremetros con arguments
var manejador = {
    id: "123",
    init: function() {
        document.addEventListener("click", event => this.clickEnPagina(event.type));

        // document.addEventListener("click", (function(event) {
        //     this.clickEnPagina(event.type);
        // }).bind(this), false);
    },
    clickEnPagina: function(type) {
        console.log("Maneja " + type + " para el id: " + this.id);
    }
};

manejador.init();