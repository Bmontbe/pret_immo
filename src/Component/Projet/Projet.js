import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Projet.css';
import { tsOptionalType } from '@babel/types';

function Projet(props) {



const numStr = (a, b) => {
  a = '' + a;
  b = b || ' ';
  var c = '',
      d = 0;
  while (a.match(/^0[0-9]/)) {
    a = a.substr(1);
  }
  for (var i = a.length-1; i >= 0; i--) {
    c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
    d++;
  }
  return c;
}

const totalProjet = () => {
  return numStr(Number(props.montantAcquisition + props.montantTravaux 
    + props.fraisNotaire+props.fraisAgence + props.fraisDossier + props.garantie).toFixed(0))
}

const totalApport = () => {
  return (numStr(Number(props.apport +props.apportSup)))
}

  return (
 <div className="recap">
    <div className="sectionFirst">
     <div>{props.nomProjet ? `Récapitulatif de mon projet : ${props.nomProjet}` : "Récapitulatif de mon projet"}</div>
    </div>
   <div className="categorie">
     <div className="title">Montant de l'acquisition</div>
     <div className="montant"><span>{numStr(props.montantAcquisition)}</span> euros</div>
   </div>
   <div className="categorie">
     <div className="title">Montant des travaux</div>
     <div className="montant"><span>{numStr(props.montantTravaux)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais de notaire ({props.tauxNotaire}%)</div>
     <div className="montant"><span>{numStr(Number(props.fraisNotaire).toFixed(0))}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais d'agence</div>
     <div className="montant"><span>{numStr(Number(props.fraisAgence).toFixed(0))}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais de garanties</div>
     <div className="montant"><span>{numStr(Number(props.garantie))}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais de dossier</div>
     <div className="montant"><span>{numStr(Number(props.fraisDossier))}</span> euros</div>
    </div>
    <div className="categorieTotal">
     <div className="title">Total du projet</div>
     <div className="montant"><span>{totalProjet()}</span> euros</div>
    </div>
    <div className="section">
     <div>Mes Revenus et mes charges mensuels</div>
    </div>
    <div className="categorie">
     <div className="title">Total des Revenus</div>
     <div className="montant"><span>{numStr(props.revenus)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Total de mes charges</div>
     <div className="montant"><span>{numStr(props.charges)}</span> euros</div>
    </div>
    <div className="section">
     <div>Mon épargne et mon apport</div>
    </div>
    <div className="categorie">
     <div className="title">Mon épargne</div>
     <div className="montant"><span>{numStr(props.epargne)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Mon apport</div>
     <div className="montant"><span>{numStr(props.apport)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Apport supplémentaire</div>
     <div className="montant"><span>{numStr(props.apportSup)}</span> euros</div>
    </div>
    <div className="categorieTotal">
     <div className="title">Total de votre apport</div>
     <div className="montant"><span>{totalApport()}</span> euros</div>
    </div>
 </div>
  );
}

export default Projet;