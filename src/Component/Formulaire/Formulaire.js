import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import Projet from '../Projet/Projet'
import './Formulaire.css';

function Formulaire(props) {

const [nomProjet, setNomProjet] = useState ('Mon Projet')
const [montantPret, setMontantPret] = useState (0)
const [montantTravaux, setMontantTravaux] = useState (0)



  return (
    <div className='formulaireRecap'>
    <div className='formulaire'>
      <Form >
      <div className="sectionFirst"> Mon projet</div>
        <Form.Group widths='equal'>
        <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-first-name'
            type="text"
            label="Nom du projet"
            onChange={(e) => setNomProjet(e.target.value)}
            placeholder="Nom du projet"
          />
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-first-name'
            type="number"
            label="Montant du prêt"
            onChange={(e) => setMontantPret(e.target.value)}
            placeholder="Montant du prêt"
          />
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-last-name'
            type="number"
            label="Montant des travaux"
            onChange={(e) => setMontantTravaux(e.target.value)}
            placeholder="Montant travaux"
          />
        </Form.Group>
        <div className="section"> Mon épargne</div>
        <Form.Group widths='equal'>
        <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-first-name'
            type="text"
            label="Nom du projet"
            onChange={(e) => setNomProjet(e.target.value)}
            placeholder="Nom du projet"
          />
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-first-name'
            type="number"
            label="Montant du prêt"
            onChange={(e) => setMontantPret(e.target.value)}
            placeholder="Montant du prêt"
          />
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-last-name'
            type="number"
            label="Montant des travaux"
            onChange={(e) => setMontantTravaux(e.target.value)}
            placeholder="Montant travaux"
          />
        </Form.Group>
        <Button
          class="ui button"
          // onClick={() => clickPost()}
          >
          Ajouter mon évènement
      </Button>
      </Form>
      </div>
      <div className='recapPret'>
      <Projet
      nomProjet = {nomProjet}
      montantPret = {montantPret}
      montantTravaux = {montantTravaux}
      />
    </div>
    </div>
  );
}

export default Formulaire;