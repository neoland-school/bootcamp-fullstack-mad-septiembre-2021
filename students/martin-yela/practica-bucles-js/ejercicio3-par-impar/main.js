let number = parseInt(prompt('Dime un número: '));

for (let i=1; i<=number; i++){
    if (i % 2 === 0) {
        document.write('<p>'+i + ' es par</p>');
        console.log('<p>' + i + ' es par</p>');
    }else {
        document.write('<p>'+i + ' es impar</p>');
        console.log('<p>' + i + ' es impar</p>');
    }
}