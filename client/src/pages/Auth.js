import React, { useContext, useState } from 'react';
import '../styles/Auth.scss';
import '../styles/NavBar.scss';
import {Button, Container, Form, Row} from 'react-bootstrap';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card"
import { LOGIN_ROUTE, OFFERS_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { fetchUsers, login, registration } from '../http/userAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import VioletButton from '../components/VioletButton';


const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const clickAuth = async () => {
  //     try {
  //       useEffect(() => {
  //         check().then(data => {
      
        
  //     }, []);
  //     } catch (e) {
  //       alert(e)
  //     }
  //     }
    if (isLogin) {
      const data = await login(email, password).then( data => {
        user.setRole(data.dataRole)
      });
      console.log(data)
    } else {
      const data = await registration(email, password).then( data => {
        user.setRole(data.dataRole)
      });
      console.log(data)
    }
      user.setUser(user);
      user.setIsAuth(true);
      user.setEmail(email);
      // fetchUsers(user.email).then(data => {user.setRole(data[0].role)})
      
      history.push(OFFERS_ROUTE); 
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