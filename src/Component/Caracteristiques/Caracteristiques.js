import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Caracteristiques.css';
import { tsOptionalType } from '@babel/types';
import TableauAmortissement from '../TableauAmortissement/TableauAmortissement'

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

  const montantPret = (props.montantAcquisition + props.montantTravaux - props.apport - props.apportSup +
    props.fraisAgence + props.fraisNotaire + props.garantie + props.fraisDossier).toFixed(0)

  const mensualite = () => {
    if (montantPret && props.taux && props.duree) {
      return (((montantPret * props.taux) / 12) / (1 - Math.pow((1 + props.taux / 12), -(props.duree)))).toFixed(2)
    }
    else return 0
  }

  const nouvellesCharges = props.charges + parseFloat(mensualite())

  const endettement = () => {
    if (props.revenus) {
      return ((nouvellesCharges / props.revenus) * 100).toFixed(2)
    }
    else return 0
  }

  const rav = () => {
    return (props.revenus - props.charges - mensualite()).toFixed(0)
  }

  const adi = () => {
    const MrMme = Number(props.assurancesMonsieur) + Number(props.assurancesMadame)
    const dureePret = Number(props.duree)
    return MrMme * dureePret
  }

  return (
    <div>
      <div className="caracteristiques">
      <div className="sectionFirst">
        <div>Résultat de votre prêt pour votre projet</div>
      </div>
        <div className="categorieCaracteristiques">
          <div className="title">Montant du prêt</div>
          <div className="montant"><span>{numStr(montantPret)}</span> €</div>
        </div>
        <div className="categorieCaracteristiques">
          <div className="title">Mensualité</div>
          <div className="montant"><span>{numStr(mensualite())}</span> €</div>
        </div>
        <div className="categorieCaracteristiques">
          <div className="title">Assurances emprunteur(s) /mois</div>
          <div className="montant"><span>{numStr(adi())}</span> €</div>
        </div>
        <div className="categorieCaracteristiques">
          <div className="title">Taux endettement</div>
          <div className="montant"><span>{endettement()}</span> %</div>
        </div>
        <div className="categorieCaracteristiques">
          <div className="title">Reste à vivre /mois</div>
          <div className="montant"><span>{rav()}</span> €</div>
        </div>
        <div className="categorieCaracteristiques">
          <div className="title">Epargne restante</div>
          <div className="montant"><span>{props.epargne - props.apport}</span> €</div>
        </div>
      </div>
      <TableauAmortissement
        montantPret={montantPret}
        mensualite={mensualite()}
        duree={props.duree}
        taux={props.taux}
      />
    </div>
  );
}

export default Caracteristiques;