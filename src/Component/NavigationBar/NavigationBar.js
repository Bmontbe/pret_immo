import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Formulaire from '../Formulaire/Formulaire';
import Charges from '../Charges/Charges';
import './NavigationBar.css';

function NavigationBar(props) {

    return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mon prêt immobilier</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active option">
        <a onClick={props.switchViewFormulaire} >Calcul de mon prêt</a>
      </li>
      <li class="nav-item option">
        <a onClick={props.switchViewCharges} >Calculer mes charges quotidiennes</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default NavigationBar;
