import React, { useContext, useState } from 'react';
import '../styles/Auth.scss';
import '../styles/NavBar.scss';
import {Button, Container, Form, Row} from 'react-bootstrap';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card"
import { LOGIN_ROUTE, OFFERS_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';


const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const clickAuth = async () => {
    try {
        let data;
      if (isLogin) {
        const data = await login(email, password);
        console.log(data)
      } else {
        const data = await registration(email, password);
        console.log(data)
      }
        user.setUser(user);
        user.setIsAuth(true);
        history.push(OFFERS_ROUTE);
    } catch (e) {
      alert(e.response.data.message)
    }
  
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
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Form.Control 
            className="mt-3"
            placeholder="Please input your password..."
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
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
                onClick={clickAuth}
            >
              Enter
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;