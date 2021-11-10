// 3.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres 
// de los paises a su versión en inglés.

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    .then(result => result.json())
    .then(data => {
        let newArray = data.countries
        newArray.forEach(element => {
            let ulHtml = document.createElement('ul');
            let name = document.createElement('li');
            let code = document.createElement('li');
            let telfCode = document.createElement('li');

            name.textContent = element.name_es;
            code.textContent = element.code;
            telfCode.textContent = element.dial_code;
            document.body.appendChild(ulHtml);
            ulHtml.appendChild(name);
            ulHtml.appendChild(code);
            ulHtml.appendChild(telfCode);

        });
    });

let button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'Pulse for EN';
button.style.cssText = "background-color:#000000; width:100px; height: 50px; color:#FFFFFF; font-size: 1rem;";


button.addEventListener('click', e=>{

    fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    .then(result => result.json())
    .then(data => {
        document.body.innerHTML = '';
        let newArray = data.countries
        newArray.forEach(element => {
            let ulHtml = document.createElement('ul');
            let name = document.createElement('li');
            let code = document.createElement('li');
            let telfCode = document.createElement('li');

            name.textContent = element.name_en;
            code.textContent = element.code;
            telfCode.textContent = element.dial_code;
            document.body.appendChild(ulHtml);
            ulHtml.appendChild(name);
            ulHtml.appendChild(code);
            ulHtml.appendChild(telfCode);
        });
    });
});
