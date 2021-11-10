// let form = document.querySelector('.form');

// async function infoPais(){
//     const r = await fetch ('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//    d.countries.forEach(element => {
//         form.addEventListener('submit',(e) => {
            
//             e.preventDefault();
           
            
//             if(e.target.Pais.value=== element.name_es){
//                 let pPais = document.createElement('p');
//                 let pPrefijo = document.createElement('p');
//                 let pCodigo = document.createElement('p');

//                 pPais.textContent = element.name_es;
//                 pPrefijo.textContent = element.dial_code;
//                 pCodigo.textContent = element.code;

//                 document.body.appendChild(pPais);
//                 pPais.appendChild(pPrefijo);
//                 pPrefijo.appendChild(pCodigo);
//             }

//         });
        
//     });

// }

// infoPais();


//REFACTORIZACION DEL EJERCICIO

let form = document.querySelector('.form');

async function infoPais(){  //Async function no deberia englobar el evento.
                            
    const r = await fetch ('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    //let countries = d.countries;
    //} cerramos la funcion async
   d.countries.forEach(element => {
        form.addEventListener('submit',(e) => {  // mejor con un .find
            
            e.preventDefault();
           
            
            if(e.target.Pais.value.toLowerCase() === element.name_es.substring(0,e.target.Pais.value.length).toLowerCase()){
                let pPais = document.createElement('p');
                let pPrefijo = document.createElement('p');
                let pCodigo = document.createElement('p');

                pPais.textContent = element.name_es;
                pPrefijo.textContent = element.dial_code;
                pCodigo.textContent = element.code;

                document.body.appendChild(pPais);
                pPais.appendChild(pPrefijo);
                pPrefijo.appendChild(pCodigo);
            }

        });
        
    });

}

infoPais();