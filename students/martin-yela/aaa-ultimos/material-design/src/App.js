// 1.- Crear una app de react para trabajar con material ui.
// 2.- Añadir un componente AppBar que se componga de:
//         Un menu con 3 opciones (Register, Login, About) que no redirigirán aun a ningun sitio
//         3 Badges que muestren 3 iconos de vuestra elección y no sean los que vienen por defecto.
// 3.- Debajo del header debemos crear 3 Cards que muestre 3 personajes de algún api que os guste o introducidos a mano. Cada card tendrá un botón de acción que redirigirá a alguna página de internet relacionada con su contenido.
// 4.-Debajo de las cards veremos 4 botones de estilos diferentes. Tres de ellos redirigirán a links de internet de vuestro interés y el último debe lograr que cada vez que lo pulses "se añada un elemento" al Badge del carrito de la compra del ejercicio 2.
// 5.-Añadir al final de la pagina a modo de footer una Bottom App Bar con la misma información que teniamos en el header
// 6.-Hacer que cuando minimicemos la pantalla y lleguemos a 650 pixeles de resolución se muestre el Bottom App Bar y deje de verse el App Bar del Header y viceversa.
// 7.-En el Link de "About" del menú del Header/Footer cuando hagamos click se nos redirigirá a una página que contendrá un componente Stepper que tendrá 4 pasos.
//       En el paso uno tendremos un Date Picker y un botón de next
//       En el paso dos tendremos un Date Range Picker, un botón de next y otro de back
//       En el paso tres tendremos un Date Time Picker, un botón de next y otro de back
//       En el paso cuatro tendremos un Time Picker, y un botón de finalizar.

// Al pulsar en finalizar se mostrará una Modal con la información de los pasos anteriores.

import './App.css';
import Header from './component/header/app-bar';
import CardList from './component/card/cardList';
import ListCard from './component/boton/listBoton';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarritoProvider from './global-context/provider';
import SwipeableTextMobileStepper from './pages/imagenes';
import HorizontalLinearStepper from './pages/about/about';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <BrowserRouter>
      <CarritoProvider value={0}>
        <Header></Header>
        <Switch>
          <Route path='/about'>
            <HorizontalLinearStepper></HorizontalLinearStepper>
          </Route>
          <Route path='/login'>
            <SwipeableTextMobileStepper></SwipeableTextMobileStepper>

          </Route>
          <Route path='/'>
            <main className='main_container'>
              <Grid container spacing={2} rowSpacing={5} justifyContent="center" alignItems="center">
                <Grid item xs={4} container justifyContent="center" alignItems="center">
                  <CardList name='Martín' edad='15' sexo='Masculino' url='https://es.wikipedia.org/wiki/Mart%C3%ADn'></CardList>
                </Grid>
                <Grid item xs={4} container justifyContent="center" alignItems="center">
                  <CardList name='Juan' edad='23' sexo='Masculino' url='https://es.wikipedia.org/wiki/Juan'></CardList>
                </Grid>
                <Grid item xs={4} container justifyContent="center" alignItems="center">
                  <CardList name='María' edad='34' sexo='Femenino' url='https://es.wikipedia.org/wiki/Mar%C3%ADa'></CardList>
                </Grid>
              </Grid>
            </main>
            <ListCard></ListCard>
          </Route>

        </Switch>
        <Header></Header>
      </CarritoProvider>
    </BrowserRouter >
  );
}

export default App;
