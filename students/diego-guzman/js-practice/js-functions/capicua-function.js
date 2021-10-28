const numInput = prompt('Enter a number');
let num ='';

const toReverse = strNum =>{
    for(let i=strNum.length-1; i>=0; i--){
        num += strNum.charAt(i);
    }
    return num
}

const isCapicua = (numOne, numTwo)=>{
    return numOne===numTwo
}

if(isCapicua(numInput, toReverse(numInput))){
    document.write(`<h1>los números son capicua</h1>`)
}
else{
    document.write(`<h1>los números no son capicua</h1>`)
}

