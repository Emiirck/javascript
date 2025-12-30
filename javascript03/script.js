console.log("A")

/* Función Declarada */

console.log(sumar(5,2))

function sumar(num1,num2){
    return num1 +  num2
}

console.log(sumar(3,3))


//console.log(suma); No se puede hacer
/* Función Expresada*/

const suma = function(a,b){

    return a + b;
}

console.log(suma(4,3));

//funcion flecha

const multiplicacion = (d,c) => {
    return d * c
}

console.log(multiplicacion(3,2))

const division = (x,y) => x/y
console.log(division(10,5))

const persona = {
    nombre : 'David',
    saludarNormal : function(){
        console.log("hola k ase " + this.nombre)
    },
    
    saludarFlecha: () => {
        console.log("Hola a todos xat " + this.nombre)
    }
}

console.log(persona.saludarNormal());
console.log(persona.saludarFlecha());


setTimeout(() => {
   console.log("Hola k ase despues de 9 segundos"); 
}, 1000);

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombrescompletos(){
        return this._nombre + ' ' + this._apellido
    }

    set nombres(nombre){
        this._nombre = nombre
    }
}



let person1 = new Persona('Pepito','Perez');
let person2 = new Persona('Juan','Perez');

console.log(person1.nombrescompletos);
person1._nombre = "Carlos";
console.log(person1)
console.log(person2);

try {
    let x = 10

} catch (error) {
    console.log(error)
}
finally{
    console.log('Termina la revision de errores');
}
console.log('Continuamos...')



let promesa = new Promise((resolve, reject) => {
    let todobien = false;

    if (todobien) {
        resolve("Todo ha salido bien");
    } else {
        reject("Lo sentimos, no salió nada bien");
    }
});

promesa.then(respuesta => console.log(respuesta)).catch(error => console.log(error))
