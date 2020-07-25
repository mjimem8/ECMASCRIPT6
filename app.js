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

//--------------- OBJETOS -----------------

var persona = {
    nombre: "Fernando",
    getNombre() {
        console.log(this.nombre);
    }
};

persona.getNombre();

//-------------------------- OBJECT.IS ---------------------

console.log(+0 == -0);
console.log(+0 === -0);
//compara literalmente objetos u otro valor
console.log(Object.is(+0, -0));

//------------------------- OBJECT.ASSIGN --------------------------

//funcion (forma antigua) para fusionar objectos
function mezclar(objReceptor, objDonador) {
    Object.keys(objDonador).forEach(function(key) {
        objReceptor[key] = objDonador[key];
    });

    return objReceptor;
}

var objReceptor = {};
var objDonador = { nombre: "mi-archivo.js" };

console.log(mezclar(objReceptor, objDonador));

//nueva forma
console.log(Object.assign(objDonador, objDonador));


//---------------------------------------------------------

//cambiar propiedades de un prototipo/objeto con setPrototypeOf
var gato = {
    sonido() {
        console.log("Miau!");
    },
    chillido() {
        console.log("MIAU!!!!");
    }
};

let perro = {
    sonido() {
        console.log("Guau!!!");
    }
};

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === true); //true

angora.sonido(); //Miau!

Object.setPrototypeOf(angora, perro);

angora.sonido(); //Guau!

//-------------- DESTRUCTURACION DE OBJETOS ------------------

let ajustes = {
    nombree: "Manuel Jimenez Molina",
    email: "correo@correo.com",
    direccion: "direcion 17",
    premium: true,
    google: "correogoogle@google.es",
    curso: {
        linea: 7,
        columna: 17,
        clase: {
            linea: 10,
            columna: 9
        }
    }
}

let { nombree: nombre1 = "inicializacion_nombre", email, premium: dePago } = ajustes;

console.log(nombre1, email, dePago);

//-------------- DESTRUCTURACION DE OBJETOS ANIDADOS ------------------

let { curso: { clase: { linea: l_ultimaClase, columna: c_ultimaClase } } } = ajustes;

console.log(l_ultimaClase, c_ultimaClase);

//-------------- DESCTRUCTURACION DE ARRAYS -------------------

let frutas = ["pera", "melocoton", "uva", ["manzana", "piña"]];

let [fruta1, fruta2] = frutas;
let [, , fruta3] = frutas;
//cada coma representa un elemento del array
console.log(fruta1, fruta2, fruta3);

let a = 1;
let b = 2;

//a y b obtiene el valor del primer y segundo elemento del array que es (b -> 2, a -> 1)
[a, b] = [b, a]
console.log(a, b); //2,1

let [, , , [, piña]] = frutas;
let [primeraFruta, ...demasFrutas] = frutas;

console.log(piña)
console.log(primeraFruta, demasFrutas);

//--------------- DESTRUCTURACION EN FUNCIONES -----------------

//inicializamos el objeto por si no le pasamos dicho dato
function crearJugador(nickname, { hp, sp, clase } = { hp: 100, sp: 50, clase: "mago" }) {
    console.log(nickname, hp, sp, clase);
}

crearJugador("Manuel");

//------------------ SIMBOLOS -----------------------------

//los simbolos es un dato primitivo que es imposible que su valor es unico
//los simbolos no es un String
let primerNombre = Symbol();
let segundoNombre = Symbol();

let persona3 = {
    [segundoNombre]: 'Herrera'
};

persona3[primerNombre] = 'Fernando';

console.log(persona3[primerNombre], persona3[segundoNombre]);


// for se utiliza para llamar el mismo simbolo con un alias para que pueda 
//ser utilizado varias veces

let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";
console.log(objeto[userID], userID); //12345, userID

let userID2 = Symbol.for("userID");
console.log(objeto[userID2]); //12345

let id = Symbol.for("id unico");
console.log(Symbol.keyFor(id)); //id unico


//------------------------------ RECORRER OBJETO CON SIMBOLOS ---------------------

let idd = Symbol.for("id");
let activo = Symbol.for("activo");

//con corchetes podemos meter un dato como clave de propiedad
let persona4 = {
    [idd]: "123",
    [activo]: true,
    ["codigo"]: "XY123",
    nombre: "Manuel",
    apellido: "Jimenez",
    edad: 24
};

console.log(Object.keys(persona4));

//con esta propiedad obtenemos los key symbols de un objeto
let simbolos = Object.getOwnPropertySymbols(persona4);
console.log(simbolos);

for (i in simbolos) {
    console.log(simbolos[i], Symbol.keyFor(simbolos[i]), persona4[simbolos[i]]);
}


//---------------------- SET ---------------------------
//Son una lista ordenada de valores sin duplicados de cualquier tipo (alternativa al array)

let items = new Set(); //{}
// let items = new Set([1,2,3,4,5,5,5,6]);

items.add(10);
items.add("10");
items.add(11);
items.add(12);
items.add(13);
items.add(13);

console.log(items.has(10)); //true
console.log(items, items.size); //{10, "10", 11, 12, 13}, 6
items.delete(3); //Elimina el elemento 3

// items.clear(); Borra todos los elementos

items.forEach(function(valor, llave, numeros) {
    console.log(valor, llave, numeros);
    //valor y llave son iguales
});

let arrayNumeros = [...items];
console.log(arrayNumeros);

//WeakSet() -> Es como un set() pero con la diferencia que solo se almacenan objetos

//----------------------------- MAP -------------------------

let mapa = new Map();

mapa.set("nombre", "Fernando");
mapa.set("edad", 31);
mapa.set({}, { nombre: "Nombre Apellidos" });

mapa.delete("edad");
//mapa.get("edad");
// mapa.has("edad"); true

console.log("mapa ", mapa);

// ----------------------- INCIALIZAR MAPA -------------------

let mapa1 = new Map([
    ["nombre", "Fernando"],
    ["edad", 31]
]);

console.log("mapa1 ", mapa1);

// ---------------------- FOREACH MAP --------------------------

mapa1.forEach(function(valor, llave, mapaOrigen) {
    console.log("foreach", llave, valor, mapaOrigen);
});

// --------------------- CLASES DE FOR -----------------------

for (let i in numeros) {
    console.log("numero ", numeros[i]);
}

for (let numero of numeros) {
    console.log("numero-of ", numero);
}


// --------------- CLASES ---------------------

let nombreMetodo = "gritarNombre";
class Persona {

    constructor(nombre) {
        this.nombre = nombre;
    }

    decirNombre() {
        console.log(this.nombre);
    }

    //metodo computados
    [nombreMetodo]() {
        console.log(this.nombre.toUpperCase());
    }

    //los metodos estaticos son metodos no re requieren anteriormente ningun tipo
    // de propiedad de la clase
    //solo funcionan cuando el objeto no está inicializado
    static crear(nombre) {
        return new Persona(nombre);
    }
}

//Si hay herencia y en el hijo ponemos una funcion que se llame igual que la del padre 
//se va a ejecutar la funcion del hijo
//Ademas podemos utilizar la funcion del padre desde el hijo con super.funcion()

let yo = Persona.crear("Manuel Jimenez");

console.log("clase persona", yo);