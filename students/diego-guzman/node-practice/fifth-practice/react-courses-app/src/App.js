import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Home  from "./pages/home/home";
import FormPage from "./pages/form/form";
import './App.css';

function App() {
  return (
    <Router>
        <nav className='nav__container'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/form'>
          <FormPage></FormPage>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
