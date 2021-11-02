const numInput = prompt('Enter a number');
let num ='';

const toReverse = strNum =>{
    for(let i=strNum.length-1; i>=0; i--){
        num += strNum.charAt(i);
    }
    return num
}
document.write(`<h1>${toReverse(numInput)}</h1>`)