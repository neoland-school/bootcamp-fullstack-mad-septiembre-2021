function Login() {
    const History = ReactRouterDOM.useHistory();
    console.log(JSON.parse(localStorage.getItem('userData')))
    const loginInfo = JSON.parse(localStorage.getItem('userData'))

    

    function submitHandler(e) {
        e.preventDefault();

        let loginNickInput = e.target.nickInput.value;
        let loginNickPassword = e.target.passwordInput.value;


        // loginInfo.forEach(e =>console.log(e.userNickname, e.userPassword))
        // console.log(loginNickInput, loginNickPassword)

        if (loginInfo.userNickname === loginInfo.some(loginNickInput) 
            && loginInfo.userPassword === loginInfo.forEach(() => loginInfo.includes(loginNickPassword))) {
            localStorage.setItem('sessionToken', JSON.stringify(loginNickInput));
            History.push('/home')
        }
        else {
            History.push('/home')
        }
    }

    return (
        <React.Fragment>
            <div className='log-in__container'>
                <h3>LOGIN</h3>
                <form className='register__form form' onSubmit={submitHandler}>
                    <input type='text' required name='nickInput' className='form__input' placeholder='input your nickname'></input>
                    <input type='password' required name='passwordInput' className='form__input' placeholder='input your password'></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </React.Fragment>
    )
}
