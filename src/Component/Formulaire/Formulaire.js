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
  const [tauxAgence, setTauxAgence] = useState(0.0478)
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
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="text"
                label="Nom du projet"
                onChange={(e) => setNomProjet(parseFloat(e.target.value))}
                placeholder="Nom du projet"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant de l'acquisition"
                onChange={(e) => setMontantAcquisition(parseFloat(e.target.value))}
                placeholder="Montant de l'acquisition"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                type="number"
                label="Montant des travaux"
                onChange={(e) => setMontantTravaux(parseFloat(e.target.value))}
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
                    onChange={(e) => setRevMonsieur(parseFloat(e.target.value))}
                    placeholder="Monsieur"
                  />
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Madame"
                    onChange={(e) => setRevMadame(parseFloat(e.target.value))}
                    placeholder="Madame"
                  />
                                    <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Autres"
                    onChange={(e) => setAutresRevenus(parseFloat(e.target.value))}
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
                    onChange={(e) => setCharges(parseFloat(e.target.value))}
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
                onChange={(e) => setEpargne(parseFloat(e.target.value))}
                placeholder="Mon épargne"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Mon apport"
                onChange={(e) => setApport(parseFloat(e.target.value))}
                placeholder="Mon apport"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Autre Apport"
                onChange={(e) => setApportSup(parseFloat(e.target.value))}
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
                onChange={(e) => setDuree(parseFloat(e.target.value))}
                placeholder="Durée (mois)"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux d'emprunt"
                onChange={(e) => setTaux(parseFloat(e.target.value))}
                placeholder="Taux d'emprunt"
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Monsieur"
                onChange={(e) => setAssurancesMonsieur(parseFloat(e.target.value))}
                placeholder="Assurance Monsieur"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Madame"
                onChange={(e) => setAssurancesMadame(parseFloat(e.target.value))}
                placeholder="Assurance Madame"
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Garanties"
                onChange={(e) => setGarantie(parseFloat(e.target.value))}
                placeholder="Garanties"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Frais Dossier"
                onChange={(e) => setFraisDossier(parseFloat(e.target.value))}
                placeholder="Frais Dossier"
              />
            </Form.Group>
          </Form>
        </div>
        <div className='recapPret'>
          <Projet
            nomProjet={nomProjet}
            montantAcquisition={montantAcquisition}
            montantTravaux={montantTravaux}
            tauxNotaire={tauxNotaire/100}
            tauxAgence={tauxAgence/100}
            fraisNotaire = {montantAcquisition*tauxNotaire}
            fraisAgence = {montantAcquisition*tauxAgence}
            revenus={revMonsieur + revMadame + autresRevenus}
            charges={charges}
            epargne={epargne}
            apport={apport}
            apportSup={apportSup}
            assurancesMonsieur={assurancesMonsieur}
            assurancesMadame={assurancesMadame}
            garantie={garantie}
            fraisDossier={fraisDossier}
          />
        </div>
      </div>
      <Caracteristiques
        nomProjet={nomProjet}
        montantAcquisition={montantAcquisition}
        montantTravaux={montantTravaux}
        tauxNotaire={tauxNotaire/100}
        tauxAgence={tauxAgence/100}
        fraisNotaire = {montantAcquisition*tauxNotaire}
        fraisAgence = {montantAcquisition*tauxAgence}
        revenus={revMonsieur + revMadame + autresRevenus}
        charges={charges}
        epargne={epargne}
        apport={apport}
        apportSup={apportSup}
        duree={duree}
        taux={taux/100}
        assurancesMonsieur={assurancesMonsieur}
        assurancesMadame={assurancesMadame}
        garantie={garantie}
        fraisDossier={fraisDossier}
      />
    </div>
  );
}

export default Formulaire;