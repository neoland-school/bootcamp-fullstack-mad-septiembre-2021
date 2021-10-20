// 1- Obtener la información de la batería utilizando promesas y pintar en el HTML si está cargando y que porcentaje de batería queda

const myBattery = navigator.getBattery();

let isCharging = false;
let batteryPercent = '';

navigator.getBattery().then(function (battery) {
    const isChargingDOM = document.createElement('p');
    setInterval(function () {
        isCharging = battery.charging;
        isChargingDOM.innerHTML = isCharging;
        document.body.appendChild(isChargingDOM);
    }, 500)
})

navigator.getBattery().then(function (percentage) {
    const percentageDOM = document.createElement('p');
    setInterval(function () {
        batteryPercent = `${percentage.level}`*100 + '%';
        percentageDOM.innerHTML = batteryPercent;
        document.body.appendChild(percentageDOM);
    }, 500)
})