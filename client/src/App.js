import './styles/App.scss';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';


const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
      user.setId(data.dataId);
      user.setRole(data.dataRole);
      user.setEmail(data.dataEmail);
      user.setPreviousOrders(data.dataPrevOrders);
      console.log(user.role);
      console.log('id: ' + user.id);
      console.log('email: ' + user.email)
      console.log(data.dataPrevOrders);
    }).finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <Spinner animation="border" role="status" style={{color: 'lightblue', margin: 'auto'}}/>
  }
  
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
