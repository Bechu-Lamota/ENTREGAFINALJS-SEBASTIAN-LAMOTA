//Primero el BOTON que lleve a crear el registro
document.addEventListener("DOMContentLoaded", function () {
	let pgPrincipal = document.getElementById("pgPrincipal");
	let pgRegistro = document.getElementById("pgRegistro");
	let botonRegistro = document.querySelector(".btnRegistro");
  
	// Mantenemos oculto el registro al cargar la página
	pgRegistro.style.display = "none";
  
	botonRegistro.addEventListener("click", function (event) {
	  event.preventDefault();
	  pgPrincipal.style.display = "none";
	  pgRegistro.style.display = "block";
	});
});


  //Primero el BOTON que lleva a recupero
document.addEventListener("DOMContentLoaded", function () {
	let pgPrincipal = document.getElementById("pgPrincipal");
	let pgRecupero = document.getElementById("pgRecupero");
	let botonRecupero = document.querySelector(".recuperoContraseña");
  
	// Mantenemos oculto el registro al cargar la página
	pgRecupero.style.display = "none";
  
	botonRecupero.addEventListener("click", function (event) {
	  event.preventDefault();
	  pgPrincipal.style.display = "none";
	  pgRecupero.style.display = "block";
	});
});




  // FORMULARIO
document.addEventListener("DOMContentLoaded", function () {
    let formularioRegistro = document.getElementById("miForm2");

    formularioRegistro.addEventListener("submit", function (event) {
        event.preventDefault();
        // Evito que se envíen los datos automáticamente.

        // Obtengo los valores de los campos del formulario
        let usuario = document.getElementById("usuarioRegistro").value;
        let email = document.getElementById("emailRegistro").value;
        let contraseña = document.getElementById("contraseñaRegistro").value;
        let contraseñaRepetir = document.getElementById("clave2").value;

        //Los unifico
        let usuarios = {
            usuario: usuario,
            email: email,
            contraseña: contraseña,
            contraseñaRepetir: contraseñaRepetir
        };

        //Los carga agrupados
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

		//Aca visualizamos los datos cargados
		console.log(`Datos Almacenados en localStorage:`);
        console.log(usuarios);

       	formularioRegistro.reset();
    });
});



