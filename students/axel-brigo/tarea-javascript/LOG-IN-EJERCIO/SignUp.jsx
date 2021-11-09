function SignUp() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.firstName.value)
        let myData = []
        let userData = {
            name: e.target.firstName.value,
            nick: e.target.nick.value,
            password: e.target.password.value
        }

        myData.push(userData);
        localStorage.setItem("myData", JSON.stringify(userData));
        e.target.firstName.value = '';
        e.target.nick.value = '';
        e.target.password.value = '';
    }



    return (

        <div className="theMain">
            <h3>REGISTER</h3>
            <form className="theForm" onSubmit={handleSubmit}>

                <label htmlFor="FirstName">Name and Lastname:</label>
                <input type="text" id="firstName" required></input>

                <label htmlFor="Nick">Nick:</label>
                <input type="text" id="nick" required></input>

                <label htmlFor="Password">Password:</label>
                <input type="password" id="password" required></input>

                <button type="submit" >Sumbit</button>
            </form>
        </div>

    )

}
