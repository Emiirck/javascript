
console.log("Mi primer hola mundo ")

let titulo = document.getElementById("titulo");
console.log(titulo.innerHTML)

let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML)
titulo.innerHTML = " El mejor titulo del mundo"
console.log(titulo.innerHTML )

let titulo = document.getElementsByTagName("h1");
console.log(`no de titulos: ${titulo.length}`)
for (let element of titulo){
    console.log(element.innerHTML);
}console.log("FOREACH")

Array.from(titulo).forEach(element => {
    console.log(element.innerHTML);
});

let elementoporclases = document.getElementsByClassName("Azul");
console.log(`No de clases de css  ${elementoporclases.length}`);
for (let element of elementoporclases)
{
    console.log(element.innerHTML)
}


let elementoQuerySelector = document.querySelectorAll("h1.Azul");
console.log(`No de clases de css: ${elementoQuerySelector.length}`);
for (let element of elementoQuerySelector)
{
    console.log(element.innerHTML)
}