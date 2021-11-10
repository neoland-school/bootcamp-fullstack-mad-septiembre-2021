

//obtener datos de bateria

let batteryIsCharging = false;
let batteryLevel;
function drawBatteryCharge(battery){
  const pCharging = document.createElement('p');
  pCharging.textContent = `charging = ${battery}`;
  document.body.appendChild(pCharging);
}

function drawBatteryLevel(battery){
  const pLevel = document.createElement('p');
  pLevel.textContent = `Nivel de batería = ${(battery)*100 + '%'}`;
  document.body.appendChild(pLevel);
}

navigator.getBattery().then(function(battery) {
  drawBatteryCharge(battery.charging);
  drawBatteryLevel(battery.level);
  battery.addEventListener('levelchange', ()=> {
   
  })
  
});



// lo mismo pero con async await

const bateriaPromise = navigator.getBattery();

async function batteryFn(){
    const battery = await bateriaPromise;
    drawBatteryCharge(battery.charging);
    drawBatteryLevel(battery.level);
    

}

batteryFn();




