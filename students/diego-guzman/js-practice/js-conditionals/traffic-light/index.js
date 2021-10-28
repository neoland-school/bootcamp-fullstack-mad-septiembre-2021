let trafficLight = Math.floor(Math.random() * 5).toString();

switch(trafficLight) {
    case '1':
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container interAmb"><div class="traffic-light__light"><p class="traffic-light--text">You may continue carefully</p></div></div>');
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        break;

    case '2':
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container amb"><div class="traffic-light__light"><p class="traffic-light--text">It will soon be red</p></div></div>');
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        break;
   
    case '3':
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container red"><div class="traffic-light__light"><p class="traffic-light--text">Stop</p></div></div>');
        break;

    case '4':
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container broken"><div class="traffic-light__light"><p class="traffic-light--broken">The trafficlight is broken. Continue at your own risk</p><div><img class="img--stop" src="/stop.png"></div></div></div>');
        break;
    default:
        document.write('<div class="traffic-light__container green"><div class="traffic-light__light"><p class="traffic-light--text">You may continue</p></div></div>');
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
        document.write('<div class="traffic-light__container"><div class="traffic-light__light"></div></div>');
}
