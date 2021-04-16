
import React, { useContext, useState } from 'react';
import { Image, Modal } from "react-bootstrap";
import { Context } from '../..';
import VioletButton from '../VioletButton';

const BookTourModal = (props) => {

    const {tour} = useContext(Context);
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    // const [img, setImg] = useState('');
    const [cost, setCost] = useState('');
    const [type, setType] = useState(null);
    const [activities, setActivities] = useState([]);
    const [file, setFile] = useState(null)
    let activitiesArray = String(props.tour.activities).split(',')


    const addOrder =  () => {
      console.log(title)
      console.log(country)
      console.log(description)
      console.log(cost)
      console.log(type)
      console.log(activities)
      console.log(file)
      const formData = new FormData();
      formData.append('title', title);
      formData.append('country', country);
      formData.append('description', description);
      // formData.append('img', img);
      formData.append('img', file);
      formData.append('cost', `${cost}`);
      formData.append('type', type);
      formData.append('activities', `{ ${activities} }`);
    }
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="tour-title">Booking tour {props.tour.title}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className=""><b>Country: </b>{props.tour.country}</div>
        <div className="mb-3"><b>Type: </b>{props.tour.type} tour</div>
        <div className="tour-description-container">
            <br/>
            <div className=""><h6>Available activities:</h6> 
            <div>
                { 
                    activitiesArray.map(element => 
                        <div key={activitiesArray.indexOf(element)}>{element}</div>)
                }
            </div>
            <br/>
            <i>Note: excursions and accommodation are not included in the price!</i>
            </div>
        </div>
        <div style={{textAlign: 'right'}}><h6>{props.tour.cost}$/day</h6></div>
        </Modal.Body>
        <Modal.Footer>
          <VioletButton 
            onClick={props.onHide}
            text="Close"
          />
        </Modal.Footer>
      </Modal>
    );
  }
  
  const LaunchBookTourModal = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <VioletButton 
          onClick={() => setModalShow(true)}
          text="Book now!"
          />
  
        <BookTourModal
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}
export default LaunchBookTourModal;