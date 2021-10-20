let speedLimit = '';
let airQuality = parseInt(prompt('Enter the value of the Air Quality'));

const speedToday = airQuality > 65 ? 'Limit' : 'NoLimit';
const Limit = '70km/h';
const NoLimit = '120Km/h';
const allowedSpeed = speedToday === 'Limit' ? Limit : NoLimit;

document.write(`<div class="text ${speedToday}">Allowed speed today: ${allowedSpeed} </div>`);
