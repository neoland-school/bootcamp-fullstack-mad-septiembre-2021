// 2. Crear un componente reactJS con un div de 100px por 100px con el fondo rojo. Crear otro componente que tenga un p con el texto `soy un componente hijo`. Meter este componente como hijo del anterior.


class DivContainer extends React.Component{
    render(){
        return <React.Fragment>
                <div className={'div__container'}>
                <Pdom></Pdom>
                </div>
            </React.Fragment>
        }
}
ReactDOM.render(
    <DivContainer/>,
    document.getElementById('read-container-jsx')
);