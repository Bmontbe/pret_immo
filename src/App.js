import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './Component/Formulaire/Formulaire'

function App() {
  return (
    <div>
    <div className="appliImmo">Mon prêt immobilier</div>
    <div>
    <Formulaire></Formulaire>
    </div>
    </div>
  );
}

export default App;
