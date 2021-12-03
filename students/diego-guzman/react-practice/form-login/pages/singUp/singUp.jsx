function SingUp() {

    let userInfo = [];

    if (localStorage.getItem('userData') !== null) {
        JSON.parse(localStorage.getItem('userData')).forEach(e=> userInfo.push(e))
    }
    else{
        userInfo=[]
    }

    function submitHandler(e) {
        e.preventDefault();
        userInfo.push({
            userName: e.target.nameInput.value,
            userNickname: e.target.nickInput.value,
            userPassword: e.target.passwordInput.value,
        })

        localStorage.setItem('userData', JSON.stringify(userInfo))
    }

    return (
        <div className='sign-up__container'>
            <h3>REGISTER FORM</h3>
            <p>Please fill in the following information</p>
            <form className='register__form form' onSubmit={submitHandler}>
                <input type='text' required name='nameInput' className='form__input' placeholder='input your name'></input>
                <input type='text' required name='nickInput' className='form__input' placeholder='input your nickname'></input>
                <input type='password' required name='passwordInput' className='form__input' placeholder='input your password'></input>
                <button type='submit'>Send data</button>
            </form>
        </div>

    )
}