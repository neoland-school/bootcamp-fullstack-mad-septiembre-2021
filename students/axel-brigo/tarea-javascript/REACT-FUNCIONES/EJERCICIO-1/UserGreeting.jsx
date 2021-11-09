

function UserGreeting() {
    let [greetValue, setGreet] = React.useState('');
    const submitHandler = e => {
        e.preventDefault(); // para evitar que el submit haga su comportamiento por defecto
        setGreet(e.target.greet.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input name="greet" type="text" placeholder="A quien quieres saludar?" />
                <button type="submit">Apretame</button>
            </form>
            <Greeting name={greetValue}></Greeting>

        </React.Fragment>
    )
}