// 4.-Crear un componente SignIn que tenga un <h3>LOGIN</h3> y un formulario que acepte nick y contraseña. Cuando se haga click para entrar leeremos el localStorage para comprobar que el usuario y contraseña existen registrados previamente; en caso positivo se guardará el nick del usuario en localStorage con el key "sessionToken" y se mostrará la página Home que se define en el punto 5.
function SignIn() {

    

    let logearse = (e) =>{
        e.preventDefault();
        const usuario = JSON.parse(localStorage.getItem('userData'));
        // let history = useHistory();
        
        
        if (usuario.password === e.target.password.value && usuario.nick === e.target.nick.value){
            localStorage.setItem('sessionToken', e.target.nick.value);
            localStorage.setItem('access', true);
            location.href ="/";
        } else {
            localStorage.setItem('access', false);
            location.href ="/";
        }
    }

    return (
        <main className='main_container'>
            <h3>LOGIN</h3>
                <form className='form_container' onSubmit={logearse}>
                    <div>
                    <label htmlFor="nick">Nick: </label>
                    <input type="text" name="nick" id="nick" placeholder='Introduce tu nick' />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña: </label>
                    <input type="password" name="password" id="password" placeholder= 'Introduce tu contraseña' />
                    </div>
                    <div className='btn_container'>
                        <button className='btn'>Iniciar Sesión</button>
                    </div>
                </form>
        </main>
        
        
    )
}