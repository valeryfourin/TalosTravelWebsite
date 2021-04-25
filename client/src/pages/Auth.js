import React, { useContext, useEffect, useState } from 'react';
import '../styles/Auth.scss';
import '../styles/NavBar.scss';
import { Container, Form, Row} from 'react-bootstrap';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card"
import { LOGIN_ROUTE, OFFERS_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import VioletButton from '../components/buttons/VioletButton';
import { fetchOrders } from '../http/orderAPI';


const Auth = observer(() => {
  const {user} = useContext(Context)
  const {order} = useContext(Context)
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE
  
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchOrders(user.id).then(data => { 
      order.setOrders(data)
    })
  }, []) 

  const clickAuth = async () => {
    setValidated(true);
    try {
      if (isLogin) {
        const data = await login(email, password).then( data => {
          user.setRole(data.dataRole)
          user.setId(data.dataId);
          user.setEmail(data.dataEmail);
          user.setPreviousOrders(data.dataPrevOrders);
        });
      } else {
        const data = await registration(email, password).then( data => {
          user.setRole(data.dataRole)
          user.setId(data.dataId);
          user.setEmail(data.dataEmail);
        });
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
        <Form className="d-flex flex-column" noValidate validated={validated}>
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
            <VioletButton
              style={{height:'auto'}}
                onClick={clickAuth}
                text='Enter'
            />
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;