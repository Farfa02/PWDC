function mayorigual(num1) {
    return 4 > 4;
}
let resultado = mayorigual(4, 4)
console.log(resultado)

function mostrarAlerta() {
    alert("!Hola, Mundo!");
  }

let nombre = "nahuel"

var nombre1 = "nahuel"

const nombre2 = "nahuel"

console.log(nombre)

console.log(nombre1)

console.log(nombre2)

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};