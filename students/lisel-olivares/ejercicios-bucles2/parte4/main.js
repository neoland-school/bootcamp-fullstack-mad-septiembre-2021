for(let i=1; i<100; i++){
    if (i%3===0 && i%5===0){
        document.write (`<p>${i} Fizz</p>`);
    }else if (i%3===0){
        document.write (`<p>${i} Buzz</p>`);
    }else if (i%5===0){
        document.write (`<p>${i} FizzBuzz`);
    }
}