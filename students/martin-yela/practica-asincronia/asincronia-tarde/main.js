// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) debe aparecer debajo la información completa de ese país.
// 5.- Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'


async function printCountry(pais) {
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    d.countries.forEach(element => {
        if (element.name_es.toLowerCase().substring(0, pais.length) === pais.toLowerCase()){
            let sentence = document.createElement('p');
            sentence.textContent = `País: ${element.name_es} ---------- Prefijo ${element.dial_code} ----------Código País: ${element.code} `;
            document.body.appendChild(sentence);
        }
    });
}
document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    printCountry(e.target.text.value);
})
