
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(r => r.json())
.then((d => {
    console.log(d);
    d.countries.forEach(element => {
        
        const ul = document.createElement('ul');
        ul.textContent = `País: ${element.name_es}`;
        document.body.appendChild(ul);
        const li = document.createElement('li');
        li.textContent = `código país: ${element.code}`
        ul.appendChild(li);
        const li2 = document.createElement('li');
        li2.textContent = `prefijo: ${element.dial_code}`
        ul.appendChild(li2);
        
        //seleccionamos el boton y añadimos un event 
        const boton = document.querySelector('.button');
        boton.addEventListener('click', (e => {
        ul.textContent = `País: ${element.name_en}`;
        li.textContent = `código país: ${element.code}`
        ul.appendChild(li);
        li2.textContent = `prefijo: ${element.dial_code}`
        ul.appendChild(li2);
        }))

        const botonEsp = document.querySelector('.button--español');
        botonEsp.addEventListener('click', (e => {
        ul.textContent = `País: ${element.name_es}`;
        li.textContent = `código país: ${element.code}`
        ul.appendChild(li);
        li2.textContent = `prefijo: ${element.dial_code}`
        ul.appendChild(li2);
        }))
    })
    
}))




// código país: ${element.code}, prefijo: ${element.dial_code}`