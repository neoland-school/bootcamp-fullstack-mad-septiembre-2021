

for (let i = 0; i <= 100; i++) {

     if (i % 5 === 0 && i % 3 === 0) {
        document.write(`<p>${i} fizbuzz</p>`);
    } else if (i % 5 === 0) {
        document.write(`<p>${i} buzz</p>`);

    } else if (i % 3 === 0) {
        document.write(`<p>${i} fizz</p>`);
    } else {
        document.write(`<div>${i} no es nada</div>`)
    }
}


