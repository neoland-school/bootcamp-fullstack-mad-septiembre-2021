function Login() {



    return (
        <div className='log-in__container'>
           
            <form onSubmit={submitHandler}>
                <input type='text' required name='nameInput' className='form__input' placeholder='input your name'></input>
                <input type='text' required name='nickInput' className='form__input' placeholder='input your nickname'></input>
                <input type='password' required name='passwordInput' className='form__input' placeholder='input your password'></input>
                <button type='submit'>Send data</button>
            </form>
        </div>

    )
}