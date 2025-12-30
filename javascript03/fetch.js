

const url = "https://crudcrud.com/api/e68f8ad4146f4810b6e38a6b0041d895";

function obtenerpersonas() {
  fetch("https://crudcrud.com/api/e68f8ad4146f4810b6e38a6b0041d895/persona")
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

obtenerpersonas();

function obtenerpersonasPorid(id) {
  fetch(
    `https://crudcrud.com/api/e68f8ad4146f4810b6e38a6b0041d895/persona/${id}`
  )
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

obtenerpersonasPorid("693430bbe9794a03e851e1b0");

let persona3 = {
  nombre: "juan",
  apellido: "Perez",
  edad: 10,
};

function guardarPersona(persona) {
  fetch("https://crudcrud.com/api/e68f8ad4146f4810b6e38a6b0041d895/persona", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

let personaporactualizar = {
  nombre: "juan",
  apellido: "Perez",
  edad: 10,
};

function actualizarPersona(id, personaporactualizar) {
  fetch(`${url}/persona/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaporactualizar),
  })
    .then((data) => {
      console.log("HTTP status:", data.status);
      if (data.status == 200) {
        console.log("Su información ha sido actualizado con éxito");
      } else {
        console.log("Su informacion no se pudo actualizar");
      }
    })
    .catch((error) => console.log(error));
}

actualizarPersona("69343dbae9794a03e851e20f", personaporactualizar);

function eliminarPersona(id) {
  fetch(`${url}/persona/${id}`, {
    method: "DELETE"
  })
  .then((respuesta) => {
    if (respuesta.ok) {        
      console.log("Eliminado correctamente");
    } else {
      console.log("No se pudo eliminar. Status:", respuesta.status);
    }
  })
  .catch(error => console.log(error));
}


