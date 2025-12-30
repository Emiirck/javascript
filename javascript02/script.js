
let arregloAutos = ['BMW','Toyota','Chevrolet','Mazda','Lada'];

console.log(arregloAutos);
console.log(arregloAutos[0])
console.log(arregloAutos[1])
console.log(arregloAutos[2])
console.log(arregloAutos[3])
console.log(arregloAutos[4])

arregloAutos.push('VolksWagen');
console.log(arregloAutos)

arregloAutos.pop();
console.log(arregloAutos)

arregloAutos.shift();
console.log(arregloAutos)

arregloAutos.splice(1);
console.log(arregloAutos);

arregloAutos.splice(1,0,67,'Hola');
console.log(arregloAutos);

arregloAutos.forEach(element => {
  if(element.nombre == 'Emirck')
  console.log(`El vehículo es ${element}`);
});


let arreglonumerico = [1,2,3,4,5]

arreglonumerico.push(6);
console.log(arreglonumerico)
arreglonumerico.pop();
console.log(arreglonumerico);
arreglonumerico.shift()
console.log(arreglonumerico)
arreglonumerico.splice(2,3);
console.log(arreglonumerico);
arreglonumerico.splice(1,0,'Hola');
console.log(arreglonumerico);
console.log(arreglonumerico[0])
console.log(arreglonumerico[1])
console.log(arreglonumerico[2])
console.log(arreglonumerico[3])
console.log(arreglonumerico[4])



let  estudiante = {
    nombre : '',
    apellido : '',
    edad : 0,
    soltero : true,
}

estudiante.nombre = 'Juan';
estudiante.apellido = 'Perez';
estudiante.edad = 25;
estudiante.soltero = true;


console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.edad);
console.log(estudiante.soltero);

let arregloEstudiante = [

{id: 0, nombre : 'Emirck', apellido : 'Candelo', edad : 23, soltero : true},
{id: 1, nombre : 'Carlos', apellido : 'Mantilla', edad : 22, soltero : true},
{id: 2, nombre : 'Alfredo', apellido : 'Ordoñez', edad : 21, soltero : true},
{id: 3, nombre : 'Carlos', apellido : 'Ramirez', edad : 24, soltero : true},
{id: 4,nombre : 'Ruben', apellido : 'Cobos', edad : 25, soltero : true},
{id: 5, nombre : 'Abel', apellido : 'Gomez', edad : 25, soltero : true},

];

console.log(arregloEstudiante);
console.log(arregloEstudiante[0]);
console.log(arregloEstudiante[1].nombre);
console.log(arregloEstudiante[2].apellido);
console.log(arregloEstudiante[3].edad);
console.log(arregloEstudiante[4].soltero);

/* console.log(arregloEstudiante);
arregloEstudiante.pop();
console.log(arregloEstudiante);
arregloEstudiante.shift()
console.log(arregloEstudiante);
arregloEstudiante.splice(1);
console.log(arregloEstudiante);
arregloEstudiante.splice(1,0,'Hola');
console.log(arregloEstudiante);

console.log(arregloEstudiante);
*/

for (let x = 0; x < arregloEstudiante.length, x++;){
    console.log(arregloEstudiante[x]);
}

console.log(arregloEstudiante);
arregloEstudiante.forEach(element => {
    if(element.id == 3)
        console.log(`El estudiante es ${JSON.stringify(element)}`);
        console.log(`El estudiante es ${element.nombre + '' + element.apellido}`);

});


let y = 0;

do {
  console.log(arregloEstudiante[y]);
  y++;
} while (y < arregloEstudiante.length);


let estudianteEncontrar = arregloEstudiante.find(x => x.id == 0)
if(estudianteEncontrar == null){
    console.log('Estudiante no encontrado')
}else{
    console.log(estudianteEncontrar);
}

console.log(arregloEstudiante);
for (let x = 0; x < arregloEstudiante.length; x++){
    console.log(arregloEstudiante[x].edad)
}

let arregloMixto = [1,2,'Luis','Marcos',3]
console.log(arregloMixto);

arregloMixto.forEach(element => {
    console.log([`El ${element} es ${typeof element}`]);
    
});

arregloMixto.forEach(element => {

  if (typeof element === 'number') {
    console.log(`El elemento ${element} es un número`);

  } else if (typeof element === 'string') {
    console.log(`El elemento "${element}" es un string`);

  } else if (element === null) {
    console.log('El elemento es null');

  } else {
    console.log(`El elemento ${element} es de tipo ${typeof element}`);
  }

});




let indentifacion = '0956540215';

if(typeof indentifacion != 'string'){
    console.log('Digite correctamente su identificacion');
}