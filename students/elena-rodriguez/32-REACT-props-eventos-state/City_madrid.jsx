// Crear un componente de reactJS llamado CityMadrid. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Madríd tiene 3,207,247 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.

class City_madrid extends React.Component {
   


    render() {
        return (
            <div className= 'container_madrid'>
           
                <h1>Madrid</h1>
                <p>Madrid tiene 3,207,247 habitantes</p>
            </div>
        )
    }
}