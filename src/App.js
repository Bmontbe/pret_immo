import React, { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Formulaire from './Component/Formulaire/Formulaire';
import Charges from './Component/Charges/Charges';
import NavigationBar from './Component/NavigationBar/NavigationBar';

function App() {
  const [view, setView] = useState('Formulaire')

useEffect(() => {
  console.log(view)
})

  const switchView = (view) => {
    setView(view)
  }

  return (
    <div>
      <div>
      <NavigationBar 
      switchViewFormulaire = {() => switchView('Formulaire')}
      switchViewCharges = {() => switchView('Charges')}
      />
      </div>
      { view === 'Formulaire' && <Formulaire />}
      { view === 'Charges' && <Charges />}
      
    </div>
  );
}

export default App;
