const number = parseInt(prompt ('Introduce un numero'));

for (let i = 0; i <= number; i++){
    if (i%2===0){
        document.write (`<p>${i} es par</p>`);
    }else {
        document.write (`<p>${i} es impar</p>`);
    }
}