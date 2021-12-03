function Film(){

React.useEffect(()=>{
    fetch('https://swapi.dev/api/films/')
    .then(r => r.json())
    .then(d => set)
})


    
}