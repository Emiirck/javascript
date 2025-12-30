let botonPagar = document.getElementById("idBotonPagar")
console.log(botonPagar.disabled);

document.getElementById("menuPegajoso").style.position="sticky";
document.getElementById("menuPegajoso").style.top = "0px";

let CodigoBarrasInput = document.getElementById("idProducto");

let producto = [
  { codigo: "1010", producto: "Manzana", precio: 0.25 },
  { codigo: "1011", producto: "Pasta", precio: 1.25 },
  { codigo: "1012", producto: "Cola", precio: 0.5 },
  { codigo: "1013", producto: "Papas", precio: 0.75 },
  { codigo: "4902778030783", producto: "Caramelo", precio: 0.05 },
];

let arregloAgregadoProducto = [];

function buscarAgregarProducto() {
  let obtenerCodigoProducto = document.getElementById("idProducto").value;
  console.log(obtenerCodigoProducto);

  if (
    obtenerCodigoProducto == null ||
    obtenerCodigoProducto == "" ||
    obtenerCodigoProducto == undefined
  ) {
    enviarAlerta(
      "alert",
      "alert-warning",
      "Estimado Usuario debe ingresaer un codigo de producto para realizar la busqueda."
    );
  } else {
    let productoEncontrado = producto.find(
      (x) => x.codigo == obtenerCodigoProducto
    );
    console.log(productoEncontrado);

    if (productoEncontrado == null || productoEncontrado == undefined) {
    enviarAlerta("alert","alert-danger","Estimado Usuario producto no existe en bodega.")
    } else {
    arregloAgregadoProducto.push(productoEncontrado);
    renderizarTabla();
    calcularValores();
    vuelto();
    }
  }
}

function renderizarTabla() {
  document.getElementById("Detalle").innerHTML = "";
  arregloAgregadoProducto.forEach((element, index) => {
    document.getElementById("Detalle").innerHTML += `
         <tr>
                <td>${element.codigo}</td>
                <td>${element.producto}</td>
                <td>1</td>
                <td>${element.precio.toFixed(2)}</td>
                <td><span onclick='eliminarProducto(${index})' class="material-symbols-outlined">delete</span></td>
        </tr>
        `;
  });
}

//Subtotal
//idIva
//idTotal

function calcularValores() {
  let sumaSubtotal = 0;
  arregloAgregadoProducto.forEach((element) => {
    sumaSubtotal += element.precio;
  });
  document.getElementById("idSubtotal").value = "$ " + sumaSubtotal.toFixed(2);
  let ivaCobrado = sumaSubtotal * 0.12;
  document.getElementById("idIva").value = "$ " + ivaCobrado.toFixed(2);
  let sumatotal = sumaSubtotal + ivaCobrado;
  document.getElementById("idTotalapagar").value = "$ " + sumatotal.toFixed(2);

  return sumatotal;
}

function eliminarProducto(index) {
  arregloAgregadoProducto.splice(index, 1);
  renderizarTabla();
  calcularValores();
  vuelto();
}

function enviarAlerta(primeraClase, segundaClase, mensaje) {
  let alerta = document.getElementById("idAlerta");
  alerta.classList.add(`${primeraClase}`, `${segundaClase}`); //alert alert-danger
  alerta.innerHTML = mensaje;

  setTimeout(() => {
    alerta.classList.remove(`${primeraClase}`, `${segundaClase}`);
    alerta.innerHTML = "";
    }, 3000);

}

document.getElementById("idValorRecibido").addEventListener('input', function(){
vuelto();
});

function vuelto(){
    let valorRecibido = document.getElementById("idValorRecibido").value;
    let valorTotal = calcularValores();
    let cambio = valorRecibido - valorTotal;
    console.log(`valorRecibido: ${valorRecibido}`)
    console.log(`Cambio: ${cambio}`)
    document.getElementById("idCambio").value = "$ "+cambio.toFixed(2);
    
    if(cambio < 0){
        document.getElementById("idCambio").style.color = "red"
    }else{
        botonPagar.disabled = false
        document.getElementById("idCambio").style.color = "greenyellow"
    }
}

CodigoBarrasInput.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        buscarAgregarProducto();
        CodigoBarrasInput.value = "";
        CodigoBarrasInput.focus();
    }
});

