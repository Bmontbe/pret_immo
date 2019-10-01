import React from 'react';
import { Link } from 'react-router-dom';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
} from 'reactstrap';
import Formulaire from '../Formulaire/Formulaire';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div>
      <Navbar color="light" className="navigationBar" light expand="md">
        <NavbarBrand title="title">
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
