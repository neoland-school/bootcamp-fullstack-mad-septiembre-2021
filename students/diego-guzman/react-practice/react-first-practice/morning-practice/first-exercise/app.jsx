// 1. Hola Mundo ReactJS y JSX. Crear un componente react utilizando JSX y devolver un H1 que tenga como texto `hola mundo`

class FirstComponent extends React.Component{
    render(){
        return <React.Fragment>
                <h1>Hola Mundo!</h1>
            </React.Fragment>
        }
}
ReactDOM.render(
    <FirstComponent/>,
    document.getElementById('read-container-jsx')
);