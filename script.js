//alert("Hola este es mi Javascript");
//let nombre = "Maria"; //variable modificable
//var nombre1 = "Alejandra";
//const apellido = "Gaviria"; //variable no modificable

//console.log("Maria");
//console.log("Alejandra");
//console.log("Gaviria");

//Condicionales
//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".logo")
//titulo.innerHTML = contenidoTitulo;

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//if (textoTitulo == "Nombre") {
   // titulo.innerHTML = "Otro";
//} else {
    //console.log("no se cumple");
//}

//Funciones
let nombre = "Maria";
let ciudad = "Barranca";
let gusto = "chocolate";

let parrafo = document.querySelector(".destacado");

parrafo.innerHTML = cambiarTexto(nombre, ciudad, gusto)

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, tengo 28 años, estoy viendo en ${ciudad}, me gusta el ${gusto}`;
    return contenido;
};

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};

//Formulario
const form = document.getElementById("form");
const nombres = document.getElementById("nombres");
const alerta = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  alerta.innerHTML = "";

  if (nombres.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    alerta.innerHTML = warnings;
  } else {
    alerta.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});