// 3.-Crear un componente SignUp que tenga un <h3>REGISTRO</h3> y un formulario en que se tomen nombre completo, nick y contraseña. Almacenar la información en localStorage con el key 'userData'
function SignUp() {
    return (
        <main className='main_container'>
            <h3>REGISTRO</h3>
            <form className='form_container' onSubmit={(e => {
                    e.preventDefault();
                    const usuario = {
                        name: e.target.name.value,
                        nick: e.target.nick.value,
                        password: e.target.password.value,
                    }
                    
                    localStorage.setItem('userData', JSON.stringify(usuario))
            })}>
                <div>
                    <label htmlFor="name">Nombre: </label>
                <input type="text" name="name" id="name" placeholder= 'Introduce tu nombre' />
                </div>
                <div>
                    <label htmlFor="nick">Nick: </label>
                <input type="text" name="nick" id="nick" placeholder='Introduce tu nick' />
                </div>
                <div>
                    <label htmlFor="password">Contraseña: </label>
                <input type="password" name="password" id="password" placeholder= 'Introduce tu contraseña' />
                </div>
                <div className='btn_container'>
                    <button className='btn'>Registrarse</button>
                </div>
                
            </form>
        </main>
    )
}