let paramString = prompt('Dime algo: ');
let paramNumber = 3;
let paramBoolean = true;



function verType(var1) {
    return typeof(var1);
}
document.write(`<p>La variable introducida es: ${verType(paramString)}</p><p>El número ${paramNumber} es: ${verType(paramNumber)}</p><p> La expresión ${paramBoolean} es: ${verType(paramBoolean)}`);