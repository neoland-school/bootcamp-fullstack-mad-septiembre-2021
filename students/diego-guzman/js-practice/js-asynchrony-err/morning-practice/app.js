// 1- Obtener la información de la batería utilizando promesas y pintar en el HTML si está cargando y que porcentaje de batería queda
//checkear version ALEX 
function drawAcharging(charging){
    const isChargingDOM  = document.querySelector('.battery__charging');
    isChargingDOM.textContent = charging;
}

function drawBatteryLevel(batteryLevel){
    const percentageDOM = document.querySelector('.battery__percentage');
    percentageDOM.textContent = `${batteryLevel*100}`;
}

navigator.getBattery().then((batteryManager)=>{
    
    drawAcharging(batteryManager.charging);
    drawBatteryLevel(batteryManager.level);

    //escuchamos el evento de cambio de carga cuando enchufamos y desenchufamos el adaptador
    batteryManager.addEventListener('chargingchange', ()=>{
        drawAcharging(batteryManager.charging);
    });
    batteryManager.addEventListener('levelchange', ()=>{
        drawBatteryLevel(batteryManager.level);
    });
})


//Version async/await

async function drawBatteryStatus(){
    const batteryManager = await navigator.getBattery();
    drawAcharging(batteryManager.charging);
    drawBatteryLevel(batteryManager.level);
}

drawBatteryStatus();


//Version ALEX

// function drawCharging(charging) {
//     const chargingDOM = document.querySelector("[data-battery-charging]");
//     chargingDOM.textContent = charging;
//   }

//   function drawBatteryLevel(batteryLevel){
//     const percentDOM = document.querySelector("[data-battery-percent]");
//     percentDOM.textContent = `${batteryLevel * 100}%`;
//   }

//   navigator.getBattery().then((batteryManager) => {
//     drawBatteryLevel(batteryManager.level);
//     drawCharging(batteryManager.charging);

//     // escuchamos el evento de cambio de carga (cuando enchufamos y desenchufamos el adaptador)
//     batteryManager.addEventListener("chargingchange", () => {
//       drawCharging(batteryManager.charging);
//     });
//     // escuchamos cuando cambia el porcentaje de batería
//     batteryManager.addEventListener("levelchange", () => {
//         drawBatteryLevel(batteryManager.level);
//     });
//   });

//   // versión async/await
//   async function drawBatteryStatus(){
//     const batteryManager = await navigator.getBattery();
//     drawBatteryLevel(batteryManager.level);
//     drawCharging(batteryManager.charging);
//   }

//   drawBatteryStatus();