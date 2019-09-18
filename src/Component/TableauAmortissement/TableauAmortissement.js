import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import './TableauAmortissement.css';
import { tsOptionalType } from '@babel/types';

function TableauAmortissement(props) {

  const [array, setArray] = useState([])

  // useEffect(() => {
  //  arrayPret()
  //   console.log(array)
  // }, [props.mensualite] )

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

  const arrayPret = () => {
    let lineArray = []
    let mensualite = Number(props.mensualite).toFixed(2)
    let montantPret = Number(props.montantPret).toFixed(2)
    let capitalRestant = Number(props.montantPret).toFixed(2)
    let interet = Number((montantPret * props.taux/12).toFixed(2))
    let mensualiteHorsInteret = (mensualite - interet).toFixed(2)

      for (let i = 0; i <=props.duree ; i++) {
        if(i===0){
          capitalRestant = ((montantPret - mensualiteHorsInteret)).toFixed(2)
          interet = Number((montantPret * props.taux/12).toFixed(2))
          mensualiteHorsInteret = (mensualite - interet).toFixed(2)
          lineArray = [...lineArray,{
            montantPret: montantPret,
            mensualiteHorsInteret: mensualiteHorsInteret,
            interet: interet,
            capitalRestant: capitalRestant,
        }]
      }
        if(i>0 & i!==props.duree){
          montantPret = lineArray[i-1].capitalRestant
          capitalRestant = ((montantPret - mensualiteHorsInteret)).toFixed(2)
          interet = Number(montantPret * props.taux/12).toFixed(2)
          mensualiteHorsInteret = (mensualite - interet).toFixed(2)
          lineArray = [...lineArray,{
            montantPret: montantPret,
            mensualiteHorsInteret: mensualiteHorsInteret,
            interet: interet,
            capitalRestant: capitalRestant,
          }]
        }
        if(i===props.duree){
          montantPret = lineArray[i-1].capitalRestant
          capitalRestant = 0
          interet = Number(montantPret * props.taux/12).toFixed(2)
          mensualiteHorsInteret = (mensualite - interet).toFixed(2)
          lineArray = [...lineArray,{
            montantPret: montantPret,
            interet: interet,
            mensualiteHorsInteret: mensualiteHorsInteret,
            capitalRestant: capitalRestant,
          }]
        }
      }
    return setArray(lineArray)
  }

    return (
      <div className="blockTableau">
        {props.mensualite>0 ?
        <Button className = "buttonTableau" onClick={arrayPret}>tableau</Button>
        :
        <div className="info">Obtenez votre Tableau d'Amortissement en remplissant les champs</div>
          }
    {array && array.length>0 ?
        <div className="tableau">   
        <div className="lignePretTitre">
      <div className="colonne1"></div>
      <div className="colonne">Montant prêt</div>
      <div className="colonne">Mensualité</div>
      <div className="colonne3">Capital restant dû</div>
      <div className="colonne3">Intérêts mensualité</div>
      <div className="colonne">Capital restant dû</div>
      </div>
      {
        array && array.map((line, index) => (
          <div className="lignePret">
      <div className="colonne1">{index}</div>
      <div className="colonne">{line.montantPret}</div>
      <div className="colonne">{props.mensualite}</div>
      <div className="colonne3">{line.mensualiteHorsInteret}</div>
      <div className="colonne3">{line.interet}</div>
      <div className="colonne">{line.capitalRestant}</div>
      </div>
    ))
      }
      </div>
      :
      <div></div> }
      </div>
    );
  }

  export default TableauAmortissement;