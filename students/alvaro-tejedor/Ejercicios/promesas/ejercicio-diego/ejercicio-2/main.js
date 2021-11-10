
const boton = document.querySelector('.button');
const formulario = document.querySelector('.form');
let inputValue;


fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    .then(r => r.json())
    .then((d => {
        console.log(d);
        formulario.addEventListener('submit', (e => {
            e.preventDefault();
            inputValue = e.target.pais.value;
            d.countries.forEach(element => {
                if (inputValue === element.name_es) {
                    const p = document.createElement('p');
                    p.textContent = `${element.code}, ${element.dial_code}`;
                    document.body.appendChild(p);
                }
                

            });

        }))
    }))
    inputValue =''; 
