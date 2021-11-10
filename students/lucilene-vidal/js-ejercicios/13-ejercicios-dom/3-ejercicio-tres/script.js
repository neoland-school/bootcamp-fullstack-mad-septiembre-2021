const div = document.createElement("div");

div.textContent = "hola hola hola";
div.innerHTML = "<a href='https://developer.mozilla.org/es/docs/Web/JavaScript'></a>"
div.innerHTML = "<ul><li>a</li><li>b</li><li>c</li></ul>"
console.log(div);