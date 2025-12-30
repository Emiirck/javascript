
    function guardarPersona(){
        let formularioHtml1 = document.forms
        ['Formularios'];

        let nombre = formularioHtml1['idNombre'].value;
        let apellido = formularioHtml1['idApellido'].value;
        let edad = formularioHtml1['idEdad'].value;

        document.getElementById("respuesta").innerHTML = `<h1>El estudiante es: ${nombre + ' ' + apellido + '' + edad }</h1>`;
        console.log(`El estudiante es ${nombre + '' + apellido + '' + edad}`);
        mostrarPersona(nombre,apellido,edad)
    }

    function mostrarPersona(nombre,apellido,edad){
        let bodyElement = document.getElementById("detalle")
        console.log(bodyElement);

        bodyElement.innerHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${edad}</td>
            </tr>
        `;
    }


    if (nombre === "" || apellido === "" || edad === "") {
        document.getElementById("respuesta").innerHTML =
            "<p style='color:red'>Por favor llena todos los campos.</p>";
        return;
    }

    document.getElementById("respuesta").innerHTML = 
        `<h1>El estudiante es: ${nombre} ${apellido} ${edad}</h1>`;
    console.log(`El estudiante es ${nombre} ${apellido} ${edad}`);


    mostrarPersona(nombre,apellido,edad);


    formularioHtml1.reset();

