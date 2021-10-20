for (i=1;i<= 100;i++){
    if (i%3 === 0 && i%5 === 0){
        document.write(`<p>El número ${i} es FizzBuzz`);
    } else if (i%3 === 0) {
        document.write(`<p>El número ${i} es Fizz`);
    }else if (i%5 ===0){
        document.write(`<p>El número ${i} es Buzz`);
    }else {
        document.write(`<p>El número ${i} no es multiplo de 3 ni de 5`);
    }
}