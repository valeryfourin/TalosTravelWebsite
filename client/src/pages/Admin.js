import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Admin.scss';
import VioletButton from '../components/buttons/VioletButton';
import CreateTour from '../components/modals/CreateTour';
import EditTour from '../components/modals/EditTour';
import DeleteTour from '../components/modals/DeleteTour';
import ShowToursButton from '../components/buttons/ShowToursButton';
import ShowUsersButton from '../components/buttons/ShowUsersButton';
import ShowOrdersButton from '../components/buttons/ShowOrdersButton';
import { check } from '../http/userAPI';
import { Context } from '../index';
import { useHistory } from 'react-router';
import { OFFERS_ROUTE } from '../utils/consts';
import { fetchOrders } from '../http/orderAPI';
import ShowAccommTableButton from '../components/buttons/ShowAccommTableButton';
import { fetchAccomms } from '../http/tourAPI';
import DeleteAccomm from '../components/modals/DeleteAccomm';


const Admin = () => {
  const history = useHistory();
  const {user} = useContext(Context);
  const {order} = useContext(Context);
  const {tour} = useContext(Context);
  const [createTourVisible, setCreateTourVisible] = useState(false);
  const [editTourVisible, setEditTourVisible] = useState(false);
  const [deleteTourVisible, setDeleteTourVisible] = useState(false);
  const [deleteAccommVisible, setDeleteAccommVisible] = useState(false);

  useEffect(() => {
    check().then(data => {
      user.setRole(data.dataRole);
      if (data.dataRole === "USER") {
        alert("You don't have access to this page");
        history.push(OFFERS_ROUTE); 
      }
    })
  }, []);

  useEffect(() => {
    fetchOrders().then(data => { 
      order.setOrders(data)
    })
    fetchAccomms().then(data => { 
      tour.setAccomms(data)
    })
  }, []);
  return (
    <Container className="d-flex flex-column text-center mt-5 admin-functions-container">
      <VioletButton 
        onClick={() => setCreateTourVisible(true)}
        text="Add tour"/>
      <VioletButton 
        onClick={() => setEditTourVisible(true)}
        text="Edit tour"/>
      <VioletButton 
        onClick={() => setDeleteTourVisible(true)}
        text="Delete tour"/>
      <VioletButton 
        onClick={() => setDeleteAccommVisible(true)}
        text="Delete accommodation"/>
        
      
    <CreateTour show={createTourVisible} onHide={() => setCreateTourVisible(false)}/>
    <EditTour show={editTourVisible} onHide={() => setEditTourVisible(false)}/>
    <DeleteTour show={deleteTourVisible} onHide={() => setDeleteTourVisible(false)}/>
    <DeleteAccomm show={deleteAccommVisible} onHide={() => setDeleteAccommVisible(false)}/>

    <br/>
    <br/>
    <br/>
    
    <ShowToursButton/>
    <ShowAccommTableButton/>
    <ShowUsersButton/>
    <ShowOrdersButton/>

    </Container>
  );
};

export default Admin;