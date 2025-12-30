console.log("Hello TypeScript");
var a = 4;
var nombre = "Emirck";
var isActive = true;
var nada = null;
var sinDefinir = undefined;
var cualquiercosa = 4;
cualquiercosa = "Hola";
cualquiercosa = true;
var arreglocualquiercosa;
function datosUsuario(nombre, edad) {
    if (nombre === void 0) { nombre = "Emirckk"; }
    if (edad === void 0) { edad = 18; }
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}
datosUsuario("Emirck", 25);
datosUsuario("Ana");
datosUsuario();
function suma(a, b) {
    return a + b;
}
console.log("Resultado de la suma:", suma(5, 10));
function multiplicar(a, b) {
    return a * b;
}
console.log("Resultado de la multiplicación:", multiplicar(3, 7));
var esMayor = function (a, b) {
    return a > b;
};
console.log("Es mayor?", esMayor(10, 5));
var esMenor = function (a, b) {
    return a < b;
};
console.log("Es menor?", esMenor(3, 8));
var esIgual = function (a, b) {
    return a === b;
};
console.log("Es igual?", esIgual(6, 6));
var arregloPersonas = [
    {
        nombre: "Emirck",
        apellido: "Gonzalez",
        edad: 25,
        fechaNacimiento: new Date("1998-05-15")
    },
];
var persona = {
    nombre: "Ana",
    apellido: "Lopez",
    edad: 30,
    fechaNacimiento: new Date("1993-08-22")
};
/* Actividad 1 */
var arregloArray = [10, 20, 30, 40, 50];
arregloArray.forEach(function (element) {
    console.log("Elemento del arreglo:", element);
});
/* Actividad 2 */
var array1 = [5, 7, 6, 10, 13];
var found = array1.find(function (element) { return element % 2 === 0; });
console.log(found);
/* Actividad 3 */
var vacio = [];
vacio.push(1);
vacio.push(2);
vacio.push(3);
console.log(vacio);
/* Actividad 4 */
var ultimo = [4, 8, 12];
ultimo.pop();
console.log(ultimo);
/* Actividad 5 */
var reverse = [1, 2, 3, 4, 5];
reverse.reverse();
console.log(reverse);
