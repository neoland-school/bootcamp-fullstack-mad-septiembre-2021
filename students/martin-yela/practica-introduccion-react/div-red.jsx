// 2. Crear un componente reactJS con un div de 100px por 100px con el fondo rojo. Crear otro componente que tenga un p con el texto `soy un componente hijo`. Meter este componente como hijo del anterior.

class DivRed extends React.Component{
    render() {
        return <div className='redDiv'>
                    <p>soy un componente hijo</p>
            </div>
    }
}