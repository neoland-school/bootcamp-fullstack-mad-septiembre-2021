// 1- Crear un componente de función que pinte un h1 que ponga hello functional componentsv
// 2- Crear un componente de función llamado Greeting, que reciba por props el nombre al que hay que saludo y pinte un p diciendo Hello, y el nombre de las props
// 3. Crear un componente que tenga un input y un boton que cuando se pulse el botón llame al componente del punto 2 con el nombre que haya introducido el usuario en el input

function App(){
    return (
        <React.Fragment>
            <Hello ></Hello>
            {/* <Greeting name='Martín'></Greeting> */}
            <Nav></Nav>
        </React.Fragment>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));