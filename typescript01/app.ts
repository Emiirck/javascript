console.log("Hello TypeScript");

let a:number = 4;

let nombre:string = "Emirck";

let isActive:boolean = true;

let nada:null = null;


let sinDefinir:undefined = undefined;

let cualquiercosa:any = 4;
cualquiercosa = "Hola";
cualquiercosa = true;

var arreglocualquiercosa;

function datosUsuario(nombre:string="Emirckk", edad:number=18):void {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

datosUsuario("Emirck", 25);
datosUsuario("Ana");
datosUsuario();

function suma(a:number, b:number):number {
    return a + b;
}
console.log("Resultado de la suma:", suma(5, 10));

function multiplicar(a:number, b:number):number {
    return a * b;
}
console.log("Resultado de la multiplicación:", multiplicar(3, 7));

let esMayor = (a:number, b:number):boolean => {
    return a > b;
}
console.log("Es mayor?", esMayor(10, 5));

let esMenor = (a:number, b:number):boolean => {
    return a < b;
}
console.log("Es menor?", esMenor(3, 8));

let esIgual = function(a:number, b:number):boolean {
    return a === b;
}   
console.log("Es igual?", esIgual(6, 6));


interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: Date;
}

let arregloPersonas: Persona[] = [
    {
        nombre: "Emirck",
        apellido: "Gonzalez",
        edad: 25,
        fechaNacimiento: new Date("1998-05-15")
    },

];

let persona: Persona = {
    nombre: "Ana",
    apellido: "Lopez",
    edad: 30,
    fechaNacimiento: new Date("1993-08-22")
};

/* Actividad 1 */

let arregloArray = [10, 20, 30, 40, 50];

arregloArray.forEach((element) => {
    console.log("Elemento del arreglo:", element);
});

/* Actividad 2 */

const array1 = [5, 7, 6, 10, 13];

const found = array1.find((element) => element % 2 === 0);

console.log(found);

/* Actividad 3 */

let vacio =[];
vacio.push(1);
vacio.push(2);
vacio.push(3);
console.log(vacio);


/* Actividad 4 */

let ultimo = [4,8,12];
ultimo.pop();
console.log(ultimo);

/* Actividad 5 */

let reverse = [1,2,3,4,5];
reverse.reverse();
console.log(reverse);
