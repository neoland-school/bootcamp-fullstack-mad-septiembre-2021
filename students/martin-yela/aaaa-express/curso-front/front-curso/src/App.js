import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './component/header';
import Home from './component/pages/home';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
