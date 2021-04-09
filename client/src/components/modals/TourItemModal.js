
import React from 'react';
import { Button, Image, Modal, Row } from "react-bootstrap";
import VioletButton from '../VioletButton';

const TourModal = (props) => {
    let activitiesArray = String(props.tour.activities).split(',')
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="tour-title">{props.tour.title}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className=""><b>Country: </b>{props.tour.country}</div>
        <div className="mb-3"><b>Type: </b>{props.tour.type} tour</div>
        <div className="tour-description-container">
            <div className="modal-img-container">
                    <Image src={'./images/tourImages/' + props.tour.img} style={{margin: 'auto'}} className="w-100 tour-preview"/>
                </div>
            <div className="mt-3">{props.tour.description}</div>
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
  
  const LaunchModal = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <VioletButton 
          onClick={() => setModalShow(true)}
          text="Learn more..."
          />
  
        <TourModal
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}
export default LaunchModal;