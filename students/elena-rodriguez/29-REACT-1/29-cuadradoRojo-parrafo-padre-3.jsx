// 2. Crear un componente reactJS con un div de 100px por 100px con el fondo rojo. Crear otro componente que tenga un p con el texto `soy un componente hijo`. Meter este componente como hijo del anterior.

class App extends React.Component{
    render(){
        return( 
            <div>
                <DivRojo></DivRojo>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('react-container-jsx')
);
