import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import Projet from '../Projet/Projet'
import Caracteristiques from '../Caracteristiques/Caracteristiques'
import './Formulaire.css';

function Formulaire(props) {
  //Projet
  const [nomProjet, setNomProjet] = useState('')
  const [montantAcquisition, setMontantAcquisition] = useState()
  const [montantTravaux, setMontantTravaux] = useState()
  const [tauxNotaire, setTauxNotaire] = useState(0.08)
  const [tauxAgence, setTauxAgence] = useState()
  const [revMonsieur, setRevMonsieur] = useState()
  const [revMadame, setRevMadame] = useState()
  const [autresRevenus, setAutresRevenus] = useState()
  const [charges, setCharges] = useState()
  const [epargne, setEpargne] = useState()
  const [apport, setApport] = useState()
  const [apportSup, setApportSup] = useState()

  //Banque
  const [duree, setDuree] = useState()
  const [taux, setTaux] = useState()
  const [assurancesMonsieur, setAssurancesMonsieur] = useState()
  const [assurancesMadame, setAssurancesMadame] = useState()
  const [garantie, setGarantie] = useState()
  const [fraisDossier, setFraisDossier] = useState()

  useEffect(() => {
    //Projet

    setNomProjet(localStorage.getItem("nomProjet"))
    setMontantAcquisition(localStorage.getItem("montantAcquisition"))
    setMontantTravaux(localStorage.getItem("montantTravaux"))
    setTauxAgence(localStorage.getItem("tauxAgence"))
    setRevMonsieur(localStorage.getItem("revMonsieur"))
    setRevMadame(localStorage.getItem("revMadame"))
    setAutresRevenus(localStorage.getItem("autresRevenus"))
    setCharges(localStorage.getItem("charges"))
    setEpargne(localStorage.getItem("epargne"))
    setApport(localStorage.getItem("apport"))
    setApportSup(localStorage.getItem("apportSup"))
    //Banque
    setDuree(localStorage.getItem("duree"))
    setTaux(localStorage.getItem("taux"))
    setAssurancesMonsieur(localStorage.getItem("assurancesMonsieur"))
    setAssurancesMadame(localStorage.getItem("assurancesMadame"))
    setGarantie(localStorage.getItem("garantie"))
    setFraisDossier(localStorage.getItem("fraisDossier"))


  }, [])

  useEffect(() => {
    //Projet
    nomProjet != null && localStorage.setItem("nomProjet", nomProjet)
    montantAcquisition != null && localStorage.setItem("montantAcquisition", montantAcquisition)
    montantTravaux != null && localStorage.setItem("montantTravaux", montantTravaux)
    tauxAgence != null && localStorage.setItem("tauxAgence", tauxAgence)
    revMonsieur != null && localStorage.setItem("revMonsieur", revMonsieur)
    revMadame != null && localStorage.setItem("revMadame", revMadame)
    autresRevenus != null && localStorage.setItem("autresRevenus", autresRevenus)
    charges != null && localStorage.setItem("charges", charges)
    epargne != null && localStorage.setItem("epargne", epargne)
    apport != null && localStorage.setItem("apport", apport)
    apportSup != null && localStorage.setItem("apportSup", apportSup)
    //Banque
    duree != null && localStorage.setItem("duree", duree)
    taux != null && localStorage.setItem("taux", taux)
    assurancesMonsieur != null && localStorage.setItem("assurancesMonsieur", assurancesMonsieur)
    assurancesMadame != null && localStorage.setItem("assurancesMadame", assurancesMadame)
    garantie != null && localStorage.setItem("garantie", garantie)
    fraisDossier != null && localStorage.setItem("fraisDossier", fraisDossier)
  })

  const supprimer = () => {
    //Projet
    nomProjet != null && localStorage.removeItem("nomProjet")
    montantAcquisition != null && localStorage.removeItem("montantAcquisition")
    montantTravaux != null && localStorage.removeItem("montantTravaux")
    tauxAgence != null && localStorage.removeItem("tauxAgence")
    revMonsieur != null && localStorage.removeItem("revMonsieur")
    revMadame != null && localStorage.removeItem("revMadame")
    autresRevenus != null && localStorage.removeItem("autresRevenus")
    charges != null && localStorage.removeItem("charges")
    epargne != null && localStorage.removeItem("epargne")
    apport != null && localStorage.removeItem("apport")
    apportSup != null && localStorage.removeItem("apportSup")
    //Banque
    duree != null && localStorage.removeItem("duree")
    taux != null && localStorage.removeItem("taux")
    assurancesMonsieur != null && localStorage.removeItem("assurancesMonsieur")
    assurancesMadame != null && localStorage.removeItem("assurancesMadame")
    garantie != null && localStorage.removeItem("garantie")
    fraisDossier != null && localStorage.removeItem("fraisDossier")
    window.location.reload()
  }

  return (
    <div>
      <div className="options">
        <div>Effacer le formulaire</div>
        <i
          className="fas fa-trash-alt plusButton"
          title='Effacer mes données'
          onClick={supprimer}
          onKeyDown={() => { }}
          role="button"
          tabIndex={0}
        />
      </div>
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
                defaultValue={nomProjet}
                onChange={(e) => setNomProjet(e.target.value)}
                placeholder="Nom du projet"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant de l'acquisition"
                defaultValue={montantAcquisition}
                min="0"
                onChange={(e) => setMontantAcquisition(e.target.value)}
                placeholder="Montant de l'acquisition"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux agence Immobilière"
                defaultValue={tauxAgence}
                min="0"
                onChange={(e) => setTauxAgence((e.target.value) / 100)}
                placeholder="Taux agence Immobilière"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant des travaux"
                defaultValue={montantTravaux}
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
                    defaultValue={revMonsieur}
                    min="0"
                    onChange={(e) => setRevMonsieur(e.target.value)}
                    placeholder="Monsieur"
                  />
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Madame"
                    defaultValue={revMadame}
                    min="0"
                    onChange={(e) => setRevMadame(e.target.value)}
                    placeholder="Madame"
                  />
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Autres"
                    defaultValue={autresRevenus}
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
                    defaultValue={charges}
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
                defaultValue={epargne}
                min="0"
                onChange={(e) => setEpargne(e.target.value)}
                placeholder="Mon épargne"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Mon apport"
                defaultValue={apport}
                min="0"
                onChange={(e) => setApport(e.target.value)}
                placeholder="Mon apport"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Autre Apport"
                defaultValue={apportSup}
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
                defaultValue={duree}
                min="0"
                onChange={(e) => setDuree(e.target.value)}
                placeholder="Durée (mois)"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux d'emprunt"
                defaultValue={taux}
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
                defaultValue={assurancesMonsieur}
                min="0"
                onChange={(e) => setAssurancesMonsieur(e.target.value)}
                placeholder="Assurance Monsieur"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Madame (€) / mois"
                defaultValue={assurancesMadame}
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
                defaultValue={garantie}
                min="0"
                onChange={(e) => setGarantie(e.target.value)}
                placeholder="Garanties"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Frais Dossier"
                defaultValue={fraisDossier}
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
            tauxNotaire={tauxNotaire * 100}
            fraisNotaire={montantAcquisition * tauxNotaire}
            fraisAgence={montantAcquisition * tauxAgence}
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
        fraisNotaire={montantAcquisition * tauxNotaire}
        fraisAgence={montantAcquisition * tauxAgence}
        revenus={Number(revMonsieur) + Number(revMadame) + Number(autresRevenus)}
        charges={Number(charges)}
        epargne={Number(epargne)}
        apport={Number(apport)}
        apportSup={Number(apportSup)}
        duree={Number(duree)}
        taux={Number(taux / 100)}
        assurancesMonsieur={Number(assurancesMonsieur)}
        assurancesMadame={Number(assurancesMadame)}
        garantie={Number(garantie)}
        fraisDossier={Number(fraisDossier)}
      />
    </div>
  );
}

export default Formulaire;