// async function printBiggestCountry(){

//     const r = await      fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.sort((a,b) => a.name_en.length - b.name_en.length);
//     const p = document.createElement('p');
//     p.textContent = d.countries.shift().name_en;
//     document.body.appendChild(p);
//   }

// printBiggestCountry();

// async function printBiggestCountry(){

//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.forEach(element => {
//         if (element.name_en.length === 4) {
//             const p = document.createElement('p');
//             p.textContent = element.name_en;
//             document.body.appendChild(p);
//         }
//     });

//   }

// printBiggestCountry();


async function fetchear(idioma) {
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();

    if (idioma === 0) {             // 0 es inglés   1 en español
        d.countries.forEach(element => {
            makeHtml(`Country: ${element.name_en} ---------- Prefix: ${element.dial_code} ---------- Country code: ${element.code}`);
        })
    } else {
        d.countries.forEach(element => {
            makeHtml(`País: ${element.name_es} ---------- Prefijo: ${element.dial_code} ---------- Código País: ${element.code}`);
        })
    }
}


let counter = 0;
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    counter++;
    if ((counter%2) === 0) {
        document.querySelector('div').innerHTML = '';
        fetchear(0);
    } else {
        document.querySelector('div').innerHTML = '';
        fetchear(1);
    }
})

function makeHtml(a){
    let sentence = document.createElement('p');
    sentence.textContent = a;
    document.querySelector('div').appendChild(sentence);
}