import React, { useContext } from 'react';
import '../styles/NavBar.scss';
import {Context} from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useHistory, NavLink} from 'react-router-dom';
import { ACCOUNT_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, OFFERS_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import Logo from './Logo';
import VioletButton from './VioletButton';

   

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
      user.setUser({});
      user.setIsAuth(false);
      history.push(OFFERS_ROUTE);
    }

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
              {user.role == 'ADMIN' 
              ?
              <VioletButton  
                style={{height:'auto', marginLeft: '20px', marginBottom: '2px', width: '100px'}}
                onClick={() => history.push(ADMIN_ROUTE)} 
                text="Admin"/>
              :
              <VioletButton  
                style={{height:'auto', marginLeft: '20px', marginBottom: '2px', width: '100px'}}
                onClick={() => history.push(ACCOUNT_ROUTE)} 
                text="Account"/>
              }
              <VioletButton  
                style={{height:'auto', marginLeft: '20px', marginBottom: '2px', width: '110px'}} 
                onClick={() => logOut()} 
                text="Sign out"/>
            </Nav>
            :
            <VioletButton 
            style={{height:'auto', marginLeft: '20px', marginBottom: '2px'}}
              onClick={() => history.push(LOGIN_ROUTE)} 
              text="Sign in"/>
              }
        </Navbar.Collapse>
    </Navbar>
  );
});

export default NavBar;