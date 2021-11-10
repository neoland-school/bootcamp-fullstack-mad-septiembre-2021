const nota = prompt("Dime tu nota");
const notaInt = parseInt(nota); 

switch (notaInt) {
    case 0: alert ("SUSPENSO"); break;
    case 1: alert ("SUSPENSO"); break;
    case 2: alert ("SUSPENSO"); break;
    case 3: alert ("SUSPENSO"); break;
    case 4: alert ("SUSPENSO"); break;
    case 5: alert ("APROBADO"); break;
    case 6: alert ("APROBADO"); break;
    case 7: alert ("APROBADO/ NOTABLE"); break;  
    case 8: alert ("NOTABLE"); break;   
    case 9: alert ("SOBRESALIENTE"); break;
    case 10: alert ("SOBRESALIENTE"); break;
    default: alert ("HA OCURRIDO UN ERROR, CONTACTE CON EL PROFESOR"); break;
}