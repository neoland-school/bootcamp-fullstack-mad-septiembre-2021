// 6.- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.

async function printCountry() {
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    let counter = 0;
    d.countries.forEach(element => {
        if ((parseInt(element.dial_code.substring(1, element.dial_code.length)) > 20) && (parseInt(element.dial_code.substring(1, element.dial_code.length)) < 600)) {
            
            let sentence = document.createElement('p');
            sentence.textContent = `País: ${element.name_es} ---------- Prefijo ${element.dial_code} ----------Código País: ${element.code} `;
            document.body.appendChild(sentence);
            counter++;
        }

    });
    let cantidad = document.createElement('p');
    cantidad.setAttribute('style', 'font-size:2rem; background-color:blue;')
    cantidad.textContent = 'Hay en total ' + counter + ' paises';
    document.body.appendChild(cantidad);
    
}

printCountry();
