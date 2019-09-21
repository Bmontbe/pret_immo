import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './Component/Formulaire/Formulaire'
import Caracteristiques from './Component/Caracteristiques/Caracteristiques';
import TableauAmortissement from './Component/TableauAmortissement/TableauAmortissement';
import Projet from './Component/Projet/Projet';

function App() {
  return (
    <div>
      <div className="appliImmo">Mon prêt immo</div>
    <Formulaire></Formulaire>
    </div>
  );
}

export default App;
