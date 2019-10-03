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
      <Navbar color="light" className="navigationBar" light expand="md">
        <NavbarBrand>
        <div>Mon prêt immobilier</div>
        </NavbarBrand>
      
          <Nav className="ml-auto" navbar>
          <NavItem className="option">
            <div onClick={props.switchViewFormulaire} >Calcul de mon prêt</div>
          </NavItem>
          <NavItem className="option">
            <div onClick={props.switchViewCharges} >Calculer mes charges quotidiennes</div>
          </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
