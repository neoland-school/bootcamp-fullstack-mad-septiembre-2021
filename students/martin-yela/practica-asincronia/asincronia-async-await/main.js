// 1- Obtener la información de la batería utilizando promesas y pintar en el HTML si está cargando y que porcentaje de batería queda
// 2- Repetir el ejercicio 1 pero utilizando async/Await

console.log(navigator.getBattery());
navigator.getBattery().then((batteryManager) =>{
    pintarDatos(batteryManager);

    batteryManager.addEventListener('chargingchange', (e) => {
        pintarDatos(batteryManager);
    })
});

async function battery(){
    const batteryManager = await navigator.getBattery();
    pintarDatos(batteryManager);

    batteryManager.addEventListener('levelchange', (e) => {
        pintarDatos(batteryManager);
    })
}
battery();


function pintarDatos(v) {
    let nivel = document.createElement('p');
    nivel.innerText = `El nivel de la batería es de:  ${v.level*100}% y su estado de carga es: ${v.charging}`;
    document.querySelector('body').appendChild(nivel);
}