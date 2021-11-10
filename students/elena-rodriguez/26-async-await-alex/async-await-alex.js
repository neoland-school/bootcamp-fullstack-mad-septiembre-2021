//1- Obtener la información de la batería utilizando promesas y pintar en el HTML si está cargando y que porcentaje de batería queda
//2- Repetir el ejercicio 1 pero utilizando async/Await


navigator.getBattery()
    .then((batteryManager) => {
      
        const parrafo = document.createElement('p');
        parrafo.textContent = e.target.charging;
        const parrafo2 = document.createElement('p');
        parrafo2.textContent = e.target.charging; 
        document.body.appendChild(parrafo);

    })