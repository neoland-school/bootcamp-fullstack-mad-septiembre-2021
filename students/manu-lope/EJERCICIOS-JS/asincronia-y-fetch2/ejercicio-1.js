
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json())
.then(data => {
  let newArray = data.countries.filter((a)=> a.name_es.length <= 4);
  newArray.forEach(element => {
    const p = document.createElement('p');
    p.textContent = element.name_es;
    document.body.appendChild(p);

  });
});


// 1- Pintar en el HTML los paises que tengan 4 letras en su nombre en castellano

async function fourLetters() {

  const getFile = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
  const data = await getFile.json();
  const toHTML = data.countries.filter((a) => a.name_es.length <= 4);
  toHTML.forEach(e=>{
    const p = document.createElement('p');
    p.textContent = e.name_es;
    document.body.appendChild(p);
  })
}
fourLetters()