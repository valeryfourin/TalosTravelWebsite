import React, { useContext } from 'react';
import '../styles/NavBar.scss';
import {Context} from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {useHistory, NavLink} from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, OFFERS_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import Logo from './Logo';
import VioletButton from './VioletButton';

   

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

  return (
    <Navbar bg="light" expand="lg" className="NavBar">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <NavLink to={OFFERS_ROUTE} className="nav-link">Home</NavLink>
            <NavLink to={OFFERS_ROUTE} className="nav-link">About us</NavLink>
          </Nav>
          {user.isAuth ?
            
            <Nav className="d-flex align-items-end">
              <VioletButton  
                style={{height:'auto', marginLeft: '20px', marginBottom: '2px', width: '100px'}}
                onClick={() => history.push(ADMIN_ROUTE)} 
                text="Admin"/>
              <VioletButton  
                style={{height:'auto', marginLeft: '20px', marginBottom: '2px', width: '110px'}} 
                onClick={() => user.setIsAuth(false)} 
                text="Sign out"/>
            </Nav>
            :
            <VioletButton 
            style={{height:'auto', marginLeft: '20px', marginBottom: '2px'}}
              onClick={() => user.setIsAuth(true)} 
              text="Sign in"/>
              }
        </Navbar.Collapse>
    </Navbar>
  );
});

export default NavBar;