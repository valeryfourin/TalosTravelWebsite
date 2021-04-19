import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '..';
import '../styles/Account.scss'
import OrderTable from '../components/OrderTable';
import { fetchOrders } from '../http/orderAPI';
import VioletButton from '../components/VioletButton';
import { useHistory } from 'react-router';
import { OFFERS_ROUTE } from '../utils/consts';


const Account = () => {
  
  const {user} = useContext(Context);
  const {order} = useContext(Context);
  const history = useHistory();
  console.log(order.orders.length)

  useEffect(() => {
    fetchOrders(user.id).then(data => { 
      order.setOrders(data)
    })
  }, []) 
  
  return (
    <Container className="d-flex flex-column text-center mt-5 admin-functions-container">
    <div>{user.email}</div>
    <br />
    <div style={{textAlign: 'left'}}><h4>Your orders:</h4></div>
    <br />
    <OrderTable />
    { order.orders.length === 0 
      ?
      <>
        <h6>No orders yet</h6>
        <VioletButton text={'Show me tours!'} onClick={() => history.push(OFFERS_ROUTE)} style={{width: '200px', margin: 'auto'}}/>
      </>
      :
      '' }
    </Container>
  );
};

export default Account;