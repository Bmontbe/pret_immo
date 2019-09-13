import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './Projet.css';
import { tsOptionalType } from '@babel/types';

function Projet(props) {


const numStr = (a, b) => {
  a = '' + a;
  b = b || '.';
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

const total = () => {
  return (numStr(Number(props.montantPret) + Number(props.montantTravaux)))
}

  return (
 <div className="recap">
    <div className="nomProjet">
     <div>{props.nomProjet}</div>
    </div>
   <div className="categorie">
     <div className="title">Montant de votre prêt : </div>
     <div className="montant"><span>{numStr(props.montantPret)}</span> euros</div>
   </div>
   <div className="categorie">
     <div className="title">Montant des travaux : </div>
     <div className="montant"><span>{numStr(props.montantTravaux)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Total : </div>
     <div className="montant"><span>{total()}</span> euros</div>
    </div>
 </div>
  );
}

export default Projet;