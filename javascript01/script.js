
console.log("Mi primer hola mundo en Javascript")

let numerouno = 8;
let numerodos = 9;
let suma = numerouno + numerodos;
let equal = numerouno == numerodos;

console.log(`La suma es ${suma}`)

let resta = numerouno - numerodos;
console.log(`La suma es ${resta}`)

let multi = numerouno * numerodos;
console.log(`La suma es ${multi}`)

let divi = numerouno / numerodos;
console.log(`La suma es ${divi}`)

console.log(`La suma es ${equal}`)


let nota = 67;
let estadoMateria = nota > 5 ? "Materia aprobada" : "Materia Reprobada"
console.log(estadoMateria)


let edad = 18
let Comprobacionedad = edad >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(Comprobacionedad)

let edadd = 18
let Comprobacionedadd = edad >= 18 ? 1 : 0
console.log(Comprobacionedadd)

let edaddd = 18
let Comprobacionedaddd = edad >= 18 ? true : false
console.log(Comprobacionedaddd)

let numeroCuatro ="500";
let segundonumero = 100;
let sumar = Number(numeroCuatro) + segundonumero
console.log(`El numero es ${sumar}`);

let Nedad = 25;
console.log(`La edad es ${edad.toString()}`)
console.log(typeof Nedad)
console.log(typeof edad.toString()) 

let  promedio = 8;
if(promedio > 6){
    console.log("Usted aprobó")
}else{
    console.log("Usted reprobó")
}

let Lunes = 1;
let Martes = 2;
let Miercoles = 3;
let Jueves = 4;
let viernes = 5;
let sabado = 6;
let domingo = 7;

let  diaSemana = 11;
if(diaSemana > 7){
    console.log(`El numero ${diaSemana} no es valido`)
}else{
    if(diaSemana == 1){
        console.log("El dia es Lunes")
    }else if(diaSemana ==2){
        console.log("El dia es Martes")
    }else if(diaSemana ==3){
        console.log("El dia es Miercoles")
    }else if(diaSemana ==4){
        console.log("El dia es Jueves")
    }else if(diaSemana ==5){
        console.log("El dia es Viernes")
    }else if(diaSemana ==6){
        console.log("El dia es Sabado")
    }else if(diaSemana ==7){
        console.log("El dia es Domingo")
    }

}

let diaSemanas = 2
switch(diaSemanas){
    case 1: console.log("Lunes");
    break;
    case 2: console.log("Martes");
    break;
    case 3: console.log("Miercoles");
    break;
    case 4: console.log("Jueves");
    break;
    case 5: console.log("Vienes");
    break;
    case 6: console.log("Sabado");
    break;
    case 7: console.log("Domingo");
    break;
    default: console.log("No exisrte un dia con dicho numero");
}

let numero = [1,2,3,5];
let nombres =["Hola","k","kace"];
console.log(numero);

numero.forEach(num => {
    console.log(`El numero es ${num}`);
});

nombres.forEach(nomb => {
    console.log(`El nombre es ${nomb}`);
});
