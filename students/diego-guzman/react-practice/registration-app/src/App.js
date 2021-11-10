import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/home';
import LoginPage from './pages/login-page/login-page';
import PrivateRoute from './components/private-route/private-route';
import PrivatePage from './pages/private-page/private-page';
import Header from './components/header/header';
import UserMessagePage from './pages/user-message-page/user-message-page';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route exact path='/login-page'>
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute exact path='/private'>
            <PrivatePage></PrivatePage>
          </PrivateRoute>
          <PrivateRoute path='/private-message'>
          <UserMessagePage></UserMessagePage>
          </PrivateRoute>
          
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
