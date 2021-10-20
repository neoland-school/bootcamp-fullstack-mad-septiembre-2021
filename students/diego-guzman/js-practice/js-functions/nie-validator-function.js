// Validar NIE extranjero 

const nieInput = prompt('Enter your NIE');
let isValidNie = false;
function nieChecker(nie){
    nieNum = parseInt(nie.substr(0,nie.length));
    nieLetter = nie.charAt(nie.length-1);
    nieModule = (nieNum%7);
    nieRest = parseInt(nieModule.toString().slice(0,2));
    
    if(nieRest=== 0 && nieLetter=== 'X'){
        isValidNie=true;
        return isValidNie
    } 
    if(nieRest=== 1 && nieLetter=== 'Y'){
        isValidNie=true;
        return isValidNie
    } 
    if(nieRest=== 2 && nieLetter=== 'Z'){
        isValidNie=true;
        return isValidNie
    } 
}
document.write(nieChecker(nieInput))