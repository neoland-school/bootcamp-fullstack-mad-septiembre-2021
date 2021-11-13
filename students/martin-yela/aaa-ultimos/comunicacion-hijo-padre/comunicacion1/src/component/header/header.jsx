// 1- Crear una variable de estado para guardar el idioma actual
// 2- Crear un componente header con un titulo y un select que tenga dos opciones ('es', 'en'). Cuando se cambie el select debe actualizarse la página
// 3- Crear un componente main que pinte un h1 que diga Hola si el idioma es 'es' o Hello si el idioma es 'en'
// 4- Crear un componente footer que pinte un p que diga 'esto es un footer'  si el idioma es 'es' o 'this is a footer' si el idioma es 'en'
import { useContext } from 'react'
import { LangContext } from '../../prueba/contexto-variable';
import './style.css'

export default function Header(props) {
    const language = useContext(LangContext);
    
    return (
        <header>
            <h1 className='title'>{language === 'es'? 'Cabecera' : 'Header'}</h1>
            <select name="language" onChange={props.onChangeLanguage}>
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </header>
    )
}