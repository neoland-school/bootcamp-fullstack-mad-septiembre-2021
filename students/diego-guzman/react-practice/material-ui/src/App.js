
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Grid } from '@mui/material';
import MyAppBar from './components/app-bar/app-bar';
import HomePage from './pages/home/home'
import AboutPage from './pages/about/about'
import ShoppingCartProvider from './components/global-context/shopping-cart-provider';

function App() {

  return (
    <div className="App">
  
        <ShoppingCartProvider value={0}>
          <Router>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MyAppBar></MyAppBar>
              </Grid>
            </Grid>
            <Switch>
              <Route exact path='/about'>
                <AboutPage></AboutPage>
              </Route>
              <Route exact path='/'>
                <HomePage></HomePage>
              </Route>

            </Switch>

          </Router>
        </ShoppingCartProvider>
    </div>
  );

}

export default App;
