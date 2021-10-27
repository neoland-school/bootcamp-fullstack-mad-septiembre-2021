// 1- Crear un componente que tenga un p que muestre 'hola' y un botón. cuando se pulse al botón el p tendrá que mostrar adiós
// 2- Modificar el componente anterior para que intercambie el texto del p. si ponia hola pondrá adios y si ponía adios, pondrá hola

class DivContainer extends React.Component{
    render(){
        return <React.Fragment>
            <SquareDOM/>
            </React.Fragment>
        }
}
ReactDOM.render(
    <DivContainer/>,
    document.getElementById('read-container-jsx')
);