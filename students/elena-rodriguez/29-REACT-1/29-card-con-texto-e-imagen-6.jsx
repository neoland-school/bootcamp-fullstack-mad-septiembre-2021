// 3. Crear un componente que tenga esta card que pinte la card que se mjuestra en la imagen (podeis sacar las imagenes de la card de pexels) y pintarla.

class App extends React.Component{
    render(){
        return (
        <React.Fragment>
            <SevenCards></SevenCards>,
            <Card></Card>
        </React.Fragment>
        )
        }
}
ReactDOM.render(
    <App/>,
    document.getElementById('react-container-cards-jsx')
);