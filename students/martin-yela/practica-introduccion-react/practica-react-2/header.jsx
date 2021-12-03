// 5. Crear un componente Header, que tenga una imagen y un link.
// 6. Añadir el componente 5 a nuestra página de cards.
// 7. Crear un componente Footer, que tenga un saludo personalizado(texto)
// 8. Modificar el componente que pinta cards para que vuelva a pintar 7.
// 9. Añadir el componente footer a la página principal, debe como ya sabemos mantenerse al final de la página.
// 10. Crear un componente que mostrará: un botón con el texto "púlsame". En caso de que se pulse el botón, desaparecerá y aparecerá un texto: "Ya nunca volverá a existir ese botón". Al actualizar o cerrar el navegador y si el botón se ha pulsado nunca más deberemos verlo.

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <button className='button'>Aprietame</button>
                {/* <img src="https://previews.123rf.com/images/objowl/objowl1302/objowl130200021/17929440-explosi%C3%B3n-floral-imagen-abstracta-digital-con-un-dise%C3%B1o-de-flores-psicod%C3%A9licas-en-amarillo-azul-verd.jpg" className='img1'/> */}
                <a href="https://www.google.es/">Ir a google</a>
            </React.Fragment>
        )
    }

}