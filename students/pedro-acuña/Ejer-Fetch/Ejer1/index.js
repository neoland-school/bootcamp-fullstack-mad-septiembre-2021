let button = document.getElementById('boton');

async function listadoTelef(){
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    d.countries.forEach(element => {

        button.addEventListener('click', () =>{
            
            pNombrePais.textContent = element.name_en;
            document.body.appendChild(pNombrePais);
    
            pPrefijoPais.textContent = element.dial_code;
            pNombrePais.appendChild(pPrefijoPais);
    
            pCodigoPais.textContent = element.code;
            pPrefijoPais.appendChild(pCodigoPais);
           
            });
        let pNombrePais = document.createElement('p');
        let pPrefijoPais = document.createElement('p');
        let pCodigoPais = document.createElement('p');

        pNombrePais.textContent = element.name_es;
        document.body.appendChild(pNombrePais);

        pPrefijoPais.textContent = element.dial_code;
        pNombrePais.appendChild(pPrefijoPais);

        pCodigoPais.textContent = element.code;
        pPrefijoPais.appendChild(pCodigoPais);

        
    });

   
}

listadoTelef();