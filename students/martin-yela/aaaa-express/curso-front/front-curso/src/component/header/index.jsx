// Crear una aplicación reactjs que tenga un header con dos enlaces (Home, Crear curso)
import { Link } from "react-router-dom"
import './style.css'


export default function Header() {
    return (
        <header className='header_container'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/crear' className='link'>Crear curso</Link>
        </header>
    )
}