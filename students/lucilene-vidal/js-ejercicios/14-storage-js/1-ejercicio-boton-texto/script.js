var valor = true
function FbotonOn() {
  var uno = document.getElementById('botonOn');
  valor?uno.innerText = "añadido desde JS":uno.innerText = " ";
  valor=!valor 
}