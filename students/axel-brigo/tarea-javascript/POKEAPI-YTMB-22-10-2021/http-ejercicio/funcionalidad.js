/*fetch('https://run.mocky.io/v3/8b998f43-b658-4575-838b-7d3a28057c64')
.then(result => result.json())
    .then(data => {
        let madrid = data.image;
        let creoImg = document.createElement('img')
        creoImg.src = madrid
        document.body.appendChild(creoImg);
}) 


2. Crear un endpoint de tipo PUT (con la página de beeceptor) con el siguinete pah (/primer-put) que no responda nada en el body y mandarle la siguiente información: 

{
  status: 'Encantado con lo que aprendo'
}

2.1 En un HTML tener un botón que cuando se haga click se envíe el PUT del ejercicio 2 */


const firstPostReq = {
    method: 'PUT',
    body: JSON.stringify({status: 'Encantado con lo que aprendo'})
}


fetch('https://laprueba.free.beeceptor.com/segundoPut', firstPostReq)
    .then(r => r.json())
    .then(d => console.log(d));

