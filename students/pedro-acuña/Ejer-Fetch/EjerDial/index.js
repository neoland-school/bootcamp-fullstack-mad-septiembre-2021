

async function dialCode(){
    let cont = 0;
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();

    d.countries.forEach(element => {
        
       let prefijo =  parseInt(element.dial_code);
        if (prefijo > 20 && prefijo < 600){
            cont++;
            let pInfor = document.createElement('p');
            pInfor.textContent = `Nombre del pais: ${element.name_es}, 
            prefijo del pais:  ${element.dial_code}, codigo del pais: ${element.code}`;
            document.body.appendChild(pInfor); 

        }
        
        
    });
    let pCont = document.createElement('p');
        pCont.textContent = `El numero de paises con el prefijo entre 20 y 600 son: ${cont}`;
        document.body.appendChild(pCont);
}


dialCode();