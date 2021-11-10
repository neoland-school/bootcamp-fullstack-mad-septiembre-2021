
// imprimir los paises que tengan un nombre con cuatro letras
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(r => r.json())
.then((d) =>{
    d.countries.forEach(element => {
        if(element.name_en.length === 4){
            const p = document.createElement('p');
            p.textContent = element.name_en;
            document.body.appendChild(p);
        }
    });
})

// imprimir los paises que tengan cuatro letras pero usando async y await

// async function printBiggestCountry(){

//     const r = await      fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.sort((a,b) => a.name_en.length - b.name_en.length);
//     const p = document.createElement('p');
//     p.textContent = d.countries.pop().name_en;
//     document.body.appendChild(p);
//   }
  
//   printBiggestCountry();
   