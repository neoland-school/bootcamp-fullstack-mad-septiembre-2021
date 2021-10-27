// 2- Modificar el componente anterior para que intercambie el texto del p. si ponia hola pondrá adios y si ponía adios, pondrá hola

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <ButtonHola ></ButtonHola>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));