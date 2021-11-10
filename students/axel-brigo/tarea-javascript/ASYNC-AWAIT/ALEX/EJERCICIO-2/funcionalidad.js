
/*fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(r => r.json())
.then(d => {
   d.countries.sort((a,b) => b.name_en.length - a.name_en.length);
   const p = document.createElement('p');
   p.textContent = d.countries.pop().name_en;
   document.body.appendChild(p);
}); */





/*
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json()) // me traigo el resultado de la lista y lo paso a json
.then(data => { //aca adentro es que va el bloque de codigo a ejecutar
  const imprimir = data.countries.filter((a) => a.name_en.length <= 4);
   imprimir.forEach(element => {
       const p = document.createElement('p');
       p.textContent = element.name_en;
       document.body.appendChild(p)
   });
});*/







/*fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json()) // me traigo el resultado de la lista y lo paso a json
    .then(data => { //aca adentro es que va el bloque de codigo a ejecutar
        const listaPaises = data.countries;
        listaPaises.forEach(element => {
            
            let traigoLaUl = document.createElement('ul');
            let elPais = document.createElement('li');
            let elCodigo = document.createElement('li');
            let elPrefijo = document.createElement('li');


            elPais.textContent = element.name_es;
            elCodigo.textContent = element.dial_code;
            elPrefijo.textContent = element.code;

            document.body.appendChild(traigoLaUl);
            document.body.appendChild(elPais);
            document.body.appendChild(elCodigo);
            document.body.appendChild(elPrefijo);

        });
  
});*/



/*
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json()) // me traigo el resultado de la lista y lo paso a json
    .then(data => { //aca adentro es que va el bloque de codigo a ejecutar
        const listaPaises = data.countries;
        listaPaises.forEach(element => {
            
            let traigoLaUl = document.createElement('ul');
            let elPais = document.createElement('li');
            let elCodigo = document.createElement('li');
            let elPrefijo = document.createElement('li');


            elPais.textContent = element.name_es;
            elCodigo.textContent = element.dial_code;
            elPrefijo.textContent = element.code;

            document.body.appendChild(traigoLaUl);
            document.body.appendChild(elPais);
            document.body.appendChild(elCodigo);
            document.body.appendChild(elPrefijo);

        });
    });


        let boton = document.getElementById('botonsito');

        boton.addEventListener('click', e => {
            document.body.innerHTML = '';
            fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(result => result.json()) // me traigo el resultado de la lista y lo paso a json
                .then(data => { //aca adentro es que va el bloque de codigo a ejecutar
                    const listaPaises = data.countries;
                    listaPaises.forEach(element => {
                        
                        let traigoLaUl = document.createElement('ul');
                        let elPais = document.createElement('li');
                        let elCodigo = document.createElement('li');
                        let elPrefijo = document.createElement('li');
            
            
                        elPais.textContent = element.name_en;
                        elCodigo.textContent = element.dial_code;
                        elPrefijo.textContent = element.code;
            
                        document.body.appendChild(traigoLaUl);
                        document.body.appendChild(elPais);
                        document.body.appendChild(elCodigo);
                        document.body.appendChild(elPrefijo);
            
                    });
                });
           
      
    });
*/





fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    .then(result => result.json()) // me traigo el resultado de la lista y lo paso a json
    .then(data => countries = data.countries); //aca adentro es que va el bloque de codigo a ejecutar



    //escucho el submit del formulario para actualizar el resultado
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const userSearch = e.target.search.value; // guardo el valor del input
    const country = countries.find(c => c.name_es === userSearch);
    const pDOM = document.querySelector('p');
            pDOM.textContent = country !== undefined
                 ? `Nombre (EN): ${country.name_en}, Nombre(ES): ${country.name_es}, Prefijo: ${country.dial_code}, Código: ${country.code}`
                 : 'No se ha encontrado el país';
        })
