import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Formulaire from './Component/Formulaire/Formulaire';
import Charges from './Component/Charges/Charges';
import NavigationBar from './Component/NavigationBar/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Formulaire} />
        <Route path={`${process.env.PUBLIC_URL}/charges`} component={Charges} />
      </Switch>
    </div>
  );
}

export default App;
