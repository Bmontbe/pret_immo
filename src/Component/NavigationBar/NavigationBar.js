import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
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

function NavigationBar() {
  return (
    <div>
      <Navbar color="light" className="navigationBar" light expand="md">
        <NavbarBrand>
        <Link to={`${process.env.PUBLIC_URL}/`}>Mon prêt immobilier</Link>
        </NavbarBrand>
      
          <Nav className="ml-auto" navbar>
          <NavItem className="option">
            <Link to={`${process.env.PUBLIC_URL}/charges`} className='linkNavbar' href="#">Calculer mes charges de tous les jours</Link>
          </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
