function UserGreeting() {

    let [greetValue, setGreet] = React.useState('');
    const submitHandler = e=>{
        e.preventDefault();
       setGreet(e.target.greet.value)
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input name='greet' type='text' placeholder='Who do you want to greet?'></input>
                <button type='submit'>Greet me</button>
            </form>
            <Greeting name={greetValue}></Greeting>
        </React.Fragment>
    )
}