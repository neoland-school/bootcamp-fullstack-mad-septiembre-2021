/*const myPromise = new Promise((resolve)=> {
    
    const body1 = document.getElementById('elBody')
    const parrafo = document.createElement('p')
    body1.appendChild(parrafo);
    parrafo.textContent = navigator.getBattery;
  

resolve

})
*/
function drawCharging(charging) {
    const chargingDOM = document.querySelector("[data-battery-charging]");
    chargingDOM.textContent = charging;
  }

  function drawBatteryLevel(batteryLevel){
    const percentDOM = document.querySelector("[data-battery-percent]");
    percentDOM.textContent = `${batteryLevel * 100}%`;
  }

  navigator.getBattery().then((batteryManager) => {
    drawBatteryLevel(batteryManager.level);
    drawCharging(batteryManager.charging);

    // escuchamos el evento de cambio de carga (cuando enchufamos y desenchufamos el adaptador)
    batteryManager.addEventListener("chargingchange", () => {
      drawCharging(batteryManager.charging);
    });
    // escuchamos cuando cambia el porcentaje de batería
    batteryManager.addEventListener("levelchange", () => {
        drawBatteryLevel(batteryManager.level);
    });
  });

  // versión async/await
  async function drawBatteryStatus(){
    const batteryManager = await navigator.getBattery();
    drawBatteryLevel(batteryManager.level);
    drawCharging(batteryManager.charging);
  }

  drawBatteryStatus();
