// 3. Crear un componente que tenga un input y un boton que cuando se pulse el botón llame al componente del punto 2 con el nombre que haya introducido el usuario en el input

function Nav() {
    const [greet, setGreet] = React.useState('Martín');

    const submitHandler = (e) => {
                    e.preventDefault();
                    setGreet(e.target.input.value)}
    return (
            <React.Fragment>
                <form onSubmit={submitHandler}>
                    <input type="text" name="input" placeholder='Escribe un nombre'/>
                    <button >Llamar componente</button>
                </form>
                <Greeting name={greet}></Greeting>
            </React.Fragment>
    )
}