// validador DNIs

const inputId = prompt('Enter a valid ID');
let isValidId = false;

function idChecker(id){
    num = parseInt(id.substr(0,id.length));
    letter = id.charAt(id.length-1);
    idModule = (num%23);
    rest = parseInt(idModule.toString().slice(0,2));
    
    if(rest=== 0 && letter=== 'T'){
        isValidId=true;
    return isValidId 
    }
    if(rest=== 1 && letter=== 'R'){
        isValidId=true;
        return isValidId 
        }
    if(rest=== 2 && letter=== 'W'){
        isValidId=true;
        return isValidId 
        }
    if(rest=== 3 && letter=== 'A'){
        isValidId=true;
        return isValidId
    } 
    if(rest=== 4 && letter=== 'G'){
        isValidId=true;
        return isValidId
    } 
    if(rest=== 5 && letter=== 'M'){
        isValidId=true;
        return isValidId
    } 
    if(rest=== 6 && letter=== 'Y'){
        isValidId=true;
        return isValidId
    } 
    if(rest=== 7 && letter=== 'F'){
        isValidId=true;
        return isValidId
    } 
    if(rest=== 12 && letter=== 'N'){
        isValidId=true;
        return isValidId
    } 
    else{
        return isValidId 
    }
}

document.write(idChecker(inputId))

