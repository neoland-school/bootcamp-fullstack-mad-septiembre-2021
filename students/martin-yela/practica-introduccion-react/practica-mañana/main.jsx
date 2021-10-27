// 1- Hacer un componente que tenga un div de 100px por 100px de color rojo, y un botón. Cuando se pulse el botón, elcolor de fondo del div cambiará a verde

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <NewDiv></NewDiv>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));