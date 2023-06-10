// TOASTIFY

// INGRESO
document.addEventListener("DOMContentLoaded", function() {
  let btnIngreso = document.getElementsByClassName("btnIngreso")[0];

  btnIngreso.addEventListener("click", function(event) {
    event.preventDefault();

    Toastify({
      text: "ACCEDIENDO...",
      className: "toastifyIngreso",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #f95ebb, #BE478E)",
      }
    }).showToast();
  });
});


//RECUPERO
document.addEventListener("DOMContentLoaded", function() {
  let btnRecupero = document.getElementsByClassName("btnRecupero")[0];

  btnRecupero.addEventListener("click", function(event) {
    event.preventDefault();

    Toastify({
      text: "ENVIADO",
      className: "toastifyRecupero",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #f95ebb, #BE478E)",
      }
    }).showToast();
  });
});
