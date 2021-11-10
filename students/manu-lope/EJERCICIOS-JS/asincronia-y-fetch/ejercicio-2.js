// 2.- Pintar en el HTML un listado de todos los paises estructurado como un "listín telefónico" 
// en que veamos pais (en español), codigo de pais, prefijo
// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) 
// debe aparecer debajo la información completa de ese país.
// 5.- Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca 
// un listado con la información de todos los paises que empiecen por 'arg'
// 6.- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. 
// Además debemos mostrar cuantos paises son en total.




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