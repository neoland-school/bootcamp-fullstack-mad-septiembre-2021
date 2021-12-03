// 1. Hola Mundo ReactJS y JSX. Crear un componente react utilizando JSX y devolver un H1 que tenga como texto `hola mundo`


// 4. Crear un componente que pinte 7 cards del componente del 3. Cambiarlo ahora para que pinte 1000.
let prueba;
if (localStorage.getItem('prueba') === null) {
    prueba = 0;
} else {
    prueba = localStorage.getItem('prueba');
};


class App extends React.Component{

    render(){
        return <React.Fragment>
                    { prueba === 0 ? <Boton></Boton>: <Boton2></Boton2> }
                    <Card></Card>                  
                </React.Fragment>
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));

document.querySelector('.elBoton').addEventListener('click', ()=>{
    prueba++;
    ReactDOM.render(<App/>, document.getElementById('container'));
})
localStorage.setItem('prueba', prueba);