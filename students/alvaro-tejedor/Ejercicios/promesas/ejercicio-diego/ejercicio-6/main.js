
// mostrar los paises cuyo dial number esté entre 20 y 600

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(r => r.json())
.then((d => {
    console.log(d);

    //definimos un contador que nos servira para contar cuantos paises se encuentran en ese rango
    let contador = 0;
    d.countries.forEach(element => {
        const number = element.dial_code.substring(1);
        if(number> 20 && number < 600){
            contador ++;
            const p = document.createElement('p');
            p.textContent = element.name_es;
            document.body.appendChild(p);
        }
    });
    const pContador = document.createElement('p');
    pContador.textContent = contador;
    document.body.appendChild(pContador);
}))

