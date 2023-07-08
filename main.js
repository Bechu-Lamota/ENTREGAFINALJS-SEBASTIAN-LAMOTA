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




  // FORMULARIO REGISTRO
document.addEventListener("DOMContentLoaded", function () {
    let pgPrincipal = document.getElementById("pgPrincipal");
	  let pgRegistro = document.getElementById("pgRegistro");
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
        let nuevoUsuario = {
            usuario: usuario,
            email: email,
            contraseña: contraseña,
            contraseñaRepetir: contraseñaRepetir
        };

        //Los carga agrupados
        localStorage.setItem("usuarios", JSON.stringify(nuevoUsuario));
        //Carga al JSON - FALTA

		//Aca visualizamos los datos cargados
		console.log(`Datos Almacenados en localStorage:`);
    console.log(nuevoUsuario);

    setTimeout(function (){
      verFormulario();
    }, 1000); 
    
    function verFormulario() {
      pgPrincipal.style.display = "block";
      pgRegistro.style.display = "none";
      formularioRegistro.reset();
        }
    });
});



// BOTON CIERRE REGISTRO
document.addEventListener("DOMContentLoaded", function () {
  let pgPrincipal = document.getElementById("pgPrincipal");
  let pgRegistro = document.getElementById("pgRegistro");
  let botonRegistro = document.querySelector(".cerrarBotonRegistro");

  botonRegistro.addEventListener("click", function (event) {
    event.preventDefault();
    pgPrincipal.style.display = "block";
    pgRegistro.style.display = "none";
  });
});


// BOTON CIERRE RECUPERO
document.addEventListener("DOMContentLoaded", function () {
  let pgPrincipal = document.getElementById("pgPrincipal");
  let pgRecupero = document.getElementById("pgRecupero");
  let botonRecupero = document.querySelector(".cerrarBotonRecupero");

  botonRecupero.addEventListener("click", function (event) {
    event.preventDefault();
    pgPrincipal.style.display = "block";
    pgRecupero.style.display = "none";
  });
});


// BOTON INGRESO
document.addEventListener("DOMContentLoaded", function() {
  //Armo las variables
  let formularioIngreso = document.getElementById("miForm1");
  let usuarioInput = document.getElementById("usuarioInicio");
  let claveInput = document.getElementById("claveInicio");

  //Agrego el evento
  let botonIngreso = document.getElementsByClassName("btnIngreso")[0];
  botonIngreso.addEventListener("click", async function(event) {
    event.preventDefault();

    let usuario = usuarioInput.value;
    let clave = claveInput.value;

    //  Verificamos que los campos se completaron
    if (usuario.trim() === [] || clave.trim() === []) {
          return;
          };
      
      // USAMOS FETCH PARA VERIFICAR QUE LOS USUARIOS CORRESPONDEN A NUESTRA DB
      let respuesta = await fetch("./db.json")
      let db = await respuesta.json();

      const pedirDatos = db.find(function(user) {
        return user.usuario === usuario && user.contraseña === clave;
      })

      // EXITO O ERROR
      if (pedirDatos) {
        Toastify({
          text: "Excelente",
          className: "toastifyFormato",
          duration: 800,
          style: {
          background: "linear-gradient(to right, #15a027, #077e17)",
          }
          }).showToast();
          formularioIngreso.reset();

          // Lo guarda en el local y podemos ver por consola el dato del usuario
          localStorage.setItem("usuario", usuario);
          console.log("Usuario:", usuario)

          } else {
          Toastify({
          text: "Error",
          className: "toastifyFormato",
          duration: 1500,
          style: {
          background: "linear-gradient(to right, #9e0202, #ca3838)",
          }
          }).showToast();
          formularioIngreso.reset();

          console.log("Usuario:", usuario)
        }     
      })
  })




  //  TOASTIFY RECUPERO
document.addEventListener("DOMContentLoaded", function() {
  let btnRecupero = document.getElementsByClassName("btnRecupero")[0];

  btnRecupero.addEventListener("click", function(event) {
    event.preventDefault();

    Toastify({
      text: "ENVIADO",
      className: "toastifyFormato",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #f95ebb, #BE478E)",
      }
    }).showToast();
  });
});