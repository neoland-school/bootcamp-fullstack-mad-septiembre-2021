const A = true;
const B = false;

function bool (param1, param2){
    return (param1 && param2);
}

const BOOLEANRESULT = bool(A, B);

document.write(`<h1> ${A} and ${B} = ${BOOLEANRESULT}</h1>`);