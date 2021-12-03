import './style.css'

export default function CrearPage() {
    return (
        <form>
            {/* nombre, escuela, profesores (nombre, email), fecha de inicio y fecha fin */}
            <label htmlFor="name">Nombre:</label>
            <input id='name' type="text" />

            <label htmlFor="school">Escuela:</label>
            <input id='school' type="text" />
            
            <label htmlFor="nameTeacher">Nombre profesor:</label>
            <input id='nameTeacher' type="text" />

            <label htmlFor="mailTeacher">Mail Profesor:</label>
            <input id='mailTeacher' type="text" />

            <label htmlFor="inicio">Fecha de inicio:</label>
            <input id='inicio' type="text" />

            <label htmlFor="fin">Fecha de fin:</label>
            <input id='fin' type="text" />

        </form>
    )
}