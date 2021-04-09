import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Admin.scss';
import VioletButton from '../components/VioletButton';
import CreateTour from '../components/modals/CreateTour';
import EditTour from '../components/modals/EditTour';
import DeleteTour from '../components/modals/DeleteTour';


const Admin = () => {
  const [createTourVisible, setCreateTourVisible] = useState(false);
  const [editTourVisible, setEditTourVisible] = useState(false);
  const [deleteTourVisible, setDeleteTourVisible] = useState(false);

  // console.log(process.env.REACT_APP_API_URL)
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
      
    <CreateTour show={createTourVisible} onHide={() => setCreateTourVisible(false)}/>
    <EditTour show={editTourVisible} onHide={() => setEditTourVisible(false)}/>
    <DeleteTour show={deleteTourVisible} onHide={() => setDeleteTourVisible(false)}/>

    </Container>
  );
};

export default Admin;