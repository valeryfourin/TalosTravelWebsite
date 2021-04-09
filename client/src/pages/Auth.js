import React from 'react';
import '../styles/Auth.scss';
import '../styles/NavBar.scss';
import {Button, Container, Form, Row} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { registration } from '../http/userAPI';


const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  // console.log(location);

  const signIn = async () => {
    const response = await registration()
    console.log(response)
  }

  return (
    <Container 
        className="form-container d-flex justify-content-center align-items-center"
    >
      <Card className="auth-card p-5">
        <h2 className="m-auto">{isLogin ? 'Sign in' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
            className="mt-3"
            placeholder="Please input your email..."
          />
          <Form.Control 
            className="mt-3"
            placeholder="Please input your password..."
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            { isLogin ? 
            <div>
              Don't have an account yet?  <NavLink to={REGISTRATION_ROUTE} className="p-0 d-inline">Register!</NavLink>
            </div>
            :
            <div>
              Have an account?  <NavLink to={LOGIN_ROUTE} className="p-0 d-inline">Sign in!</NavLink>
            </div>
            }
            <Button
                className="outline-primary"
                variant="outline-primary" 
            >
              Enter
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;