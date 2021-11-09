// 5.-Crear la página Home que tendrá un h1 que salude al usuario por su nombre completo. En caso negativo se mostrará un mensaje en rojo que diga usuario/contraseña erroneos. 
function Home() {
    return (
        <main className='main_container' >
            {localStorage.getItem('access')=== 'true'?<h1>Hola { JSON.parse(localStorage.getItem('userData')).name}</h1>
            :<h1 className='deniedAccess'>Usuario/contraseña erroneos</h1>}
        </main>
        
    )
    
}