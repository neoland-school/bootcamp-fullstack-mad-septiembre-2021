const speedLimit = prompt("Introduce un numero");
const airQuality = parseInt(speedLimit); 

if (airQuality > 65){
    document.write(`<h1>Velocidad máxima permitida: 70</h1>`);

    } else if (airQuality <= 65){
    document.write(`<h1>Velocidad máxima permitida: 120</h1>`);
}

