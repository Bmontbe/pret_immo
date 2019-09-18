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
    let mensualite = parseFloat(props.mensualite).toFixed(2)
    let montantPret = parseFloat(props.montantPret).toFixed(2)
    let capitalRestant = parseFloat(props.montantPret).toFixed(2)

      for (let i = 0; i <=props.duree ; i++) {
        if(i===0){
          capitalRestant = (montantPret - mensualite).toFixed(2)
          lineArray = [...lineArray,{
            montantPret: montantPret,
            capitalRestant: capitalRestant,
        }]
      }
        if(i>0 & i!==props.duree){
          montantPret = lineArray[i-1].capitalRestant
          capitalRestant = (montantPret - mensualite).toFixed(2)
          lineArray = [...lineArray,{
            montantPret: montantPret,
            capitalRestant: capitalRestant,
          }]
        }
        if(i===props.duree){
          montantPret = lineArray[i-1].capitalRestant
          capitalRestant = 0
          lineArray = [...lineArray,{
            montantPret: montantPret,
            capitalRestant: capitalRestant,
          }]
        }
      }
    return setArray(lineArray)
  }

    return (
      <div>
        <Button onClick={arrayPret}>tableau</Button>
      {
        array && array.map((line, index) => (
      <div>
      {index} - {line.montantPret} - {line.capitalRestant}
      </div>
    ))
      }
      </div>
    );
  }

  export default TableauAmortissement;