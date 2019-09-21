import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import Projet from '../Projet/Projet'
import Caracteristiques from '../Caracteristiques/Caracteristiques'
import './Formulaire.css';

function Formulaire(props) {
  //Projet
  const [nomProjet, setNomProjet] = useState('')
  const [montantAcquisition, setMontantAcquisition] = useState(0)
  const [montantTravaux, setMontantTravaux] = useState(0)
  const [tauxNotaire, setTauxNotaire] = useState(0.075)
  const [tauxAgence, setTauxAgence] = useState(0)
  const [revMonsieur, setRevMonsieur] = useState(0)
  const [revMadame, setRevMadame] = useState(0)
  const [autresRevenus, setAutresRevenus] = useState(0)
  const [charges, setCharges] = useState(0)
  const [epargne, setEpargne] = useState(0)
  const [apport, setApport] = useState(0)
  const [apportSup, setApportSup] = useState(0)

  //Banque
  const [duree, setDuree] = useState(0)
  const [taux, setTaux] = useState(0)
  const [assurancesMonsieur, setAssurancesMonsieur] = useState(0)
  const [assurancesMadame, setAssurancesMadame] = useState(0)
  const [garantie, setGarantie] = useState(0)
  const [fraisDossier, setFraisDossier] = useState(0)

  return (
    <div>
      <div className='formulaireRecap'>
        <div className='formulaireProjet'>
          <Form >
            <div className="sectionFirst"> Mon projet</div>
            <Form.Group className='formulaire' widths='equal'>
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
                label="Montant de l'acquisition"
                min="0"
                onChange={(e) => setMontantAcquisition(e.target.value)}
                placeholder="Montant de l'acquisition"
              />
               <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux agence Immobilière"
                min="0"
                onChange={(e) => setTauxAgence((e.target.value)/100)}
                placeholder="Taux agence Immobilière"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant des travaux"
                min="0"
                onChange={(e) => setMontantTravaux(e.target.value)}
                placeholder="Montant travaux"
              />
            </Form.Group>
            <div className="block">
              <div className="revenus">
                <div className="section"> Mes revenus (mois)</div>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Monsieur"
                    min="0"
                    onChange={(e) => setRevMonsieur(e.target.value)}
                    placeholder="Monsieur"
                  />
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Madame"
                    min="0"
                    onChange={(e) => setRevMadame(e.target.value)}
                    placeholder="Madame"
                  />
                                    <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Autres"
                    min="0"
                    onChange={(e) => setAutresRevenus(e.target.value)}
                    placeholder="Autres"
                  />
                </Form.Group>
              </div>
              <div className="charges">
                <div className="section"> Mes charges</div>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Mes Charges"
                    min="0"
                    onChange={(e) => setCharges(e.target.value)}
                    placeholder="Mes charges"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="section"> Mon épargne et mon apport</div>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Mon épargne"
                min="0"
                onChange={(e) => setEpargne(e.target.value)}
                placeholder="Mon épargne"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Mon apport"
                min="0"
                onChange={(e) => setApport(e.target.value)}
                placeholder="Mon apport"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Autre Apport"
                min="0"
                onChange={(e) => setApportSup(e.target.value)}
                placeholder="Autre Apport"
              />
            </Form.Group>
          </Form>
        </div>
        <div className='formulaireBanque'>
          <Form >
            <div className="sectionFirst">Mon prêt</div>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Durée (mois)"
                min="0"
                onChange={(e) => setDuree(e.target.value)}
                placeholder="Durée (mois)"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux d'emprunt"
                min="0"
                max="99"
                onChange={(e) => setTaux(e.target.value)}
                placeholder="Taux d'emprunt"
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Monsieur (€) / mois"
                min="0"
                onChange={(e) => setAssurancesMonsieur(e.target.value)}
                placeholder="Assurance Monsieur"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Madame (€) / mois"
                min="0"
                onChange={(e) => setAssurancesMadame(e.target.value)}
                placeholder="Assurance Madame"
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Garanties"
                min="0"
                onChange={(e) => setGarantie(e.target.value)}
                placeholder="Garanties"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Frais Dossier"
                min="0"
                onChange={(e) => setFraisDossier(e.target.value)}
                placeholder="Frais Dossier"
              />
            </Form.Group>
          </Form>
        </div>
        <div className='recapPret'>
          <Projet
            nomProjet={nomProjet}
            montantAcquisition={Number(montantAcquisition)}
            montantTravaux={Number(montantTravaux)}
            fraisNotaire = {montantAcquisition*tauxNotaire}
            fraisAgence = {montantAcquisition*tauxAgence}
            revenus={Number(revMonsieur) + Number(revMadame) + Number(autresRevenus)}
            charges={Number(charges)}
            epargne={Number(epargne)}
            apport={Number(apport)}
            apportSup={Number(apportSup)}
            assurancesMonsieur={Number(assurancesMonsieur)}
            assurancesMadame={Number(assurancesMadame)}
            garantie={Number(garantie)}
            fraisDossier={Number(fraisDossier)}
          />
        </div>
      </div>
      <Caracteristiques
        nomProjet={nomProjet}
        montantAcquisition={Number(montantAcquisition)}
        montantTravaux={Number(montantTravaux)}
        fraisNotaire = {montantAcquisition*tauxNotaire}
        fraisAgence = {montantAcquisition*tauxAgence}
        revenus={Number(revMonsieur) + Number(revMadame) + Number(autresRevenus)}
        charges={Number(charges)}
        epargne={Number(epargne)}
        apport={Number(apport)}
        apportSup={Number(apportSup)}
        duree={Number(duree)}
        taux={Number(taux/100)}
        assurancesMonsieur={Number(assurancesMonsieur)}
        assurancesMadame={Number(assurancesMadame)}
        garantie={Number(garantie)}
        fraisDossier={Number(fraisDossier)}
      />
    </div>
  );
}

export default Formulaire;