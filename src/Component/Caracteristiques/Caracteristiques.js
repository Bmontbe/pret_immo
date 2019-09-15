import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Caracteristiques.css';
import { tsOptionalType } from '@babel/types';

function Caracteristiques(props) {

  const numStr = (a, b) => {
    a = '' + a;
    b = b || ' ';
    var c = '',
      d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }

  const montantPret = props.montantAcquisition + props.montantTravaux - props.apport-props.apportSup + 
    props.fraisAgence + props.fraisNotaire + props.garantie + props.fraisDossier

  const mensualite = () => {
    if (montantPret && props.taux && props.duree) {
    return (((montantPret * props.taux) / 12) / (1 - Math.pow((1 + props.taux / 12), -(props.duree)))).toFixed(2)
    }
    else return 0
  }

  const nouvellesCharges = props.charges + parseFloat(mensualite())

  const endettement = () => {
    if (mensualite() && props.revenus){
    return ((nouvellesCharges/props.revenus)*100).toFixed(2)
    }
    else return 0
  }

  const rav = () => {
    return (props.revenus - props.charges - mensualite()).toFixed(0)
  }

  return (
    <div className="caracteristiques">
      <div className="categorieCaracteristiques">
        <div>Montant du prêt : </div>
        <div>{numStr(montantPret)} €</div>
      </div>
      <div className="categorieCaracteristiques">
        <div>Mensualité : </div>
        <div>{numStr(mensualite())} €</div>
      </div>
      <div className="categorieCaracteristiques">
        <div>Taux endettement : </div>
        <div>{endettement()} %</div>
      </div>
      <div className="categorieCaracteristiques">
        <div>Reste à venir (mois) : </div>
        <div>{rav()} €</div>
      </div>
      <div className="categorieCaracteristiques">
        <div>Epargne restante : </div>
        <div>{props.epargne - props.apport} €</div>
      </div>
    </div>
  );
}

export default Caracteristiques;