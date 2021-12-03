// 3- Crear un componente main que pinte un h1 que diga Hola si el idioma es 'es' o Hello si el idioma es 'en'
import './style.css'
import { useContext } from 'react'
import { LangContext } from '../../prueba/contexto-variable';

export default function Main(props) {
    const contexto = useContext(LangContext);

    return (
        <main>
            <h1>{(contexto === 'es')? 'Hola' : 'Hello'}</h1>
        </main>
    )
}