// 4- Crear un componente footer que pinte un p que diga 'esto es un footer'  si el idioma es 'es' o 'this is a footer' si el idioma es 'en'
import { useContext } from 'react'
import { LangContext } from '../../prueba/contexto-variable';
import './style.css'

export default function Footer() {

        const language = useContext(LangContext);
    return (
        <footer>
            <p><strong>{language === 'es' ? 'Esto es un footer': 'This is a footer'}</strong></p>
        </footer>
    )
}