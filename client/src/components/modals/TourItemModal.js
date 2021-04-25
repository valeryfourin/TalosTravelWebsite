import React, { useContext, useEffect, useState } from 'react';
import { Image, Modal } from "react-bootstrap";
import { Context } from '../..';
import { fetchAccomms } from '../../http/tourAPI';
import ShowAccommButton from '../buttons/ShowAccommButton';
import VioletButton from '../buttons/VioletButton';

const TourModal = (props) => {
    let activitiesArray = String(props.tour.activities).split(',')

    const {tour} = useContext(Context);
    const [tourId, setTourId] = useState(props.tour.id);
    
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
                    <Image src={process.env.REACT_APP_API_URL + props.tour.img} style={{margin: 'auto'}} className="w-100 tour-preview"/>
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
            <ShowAccommButton tour={props.tour}/>
            <br/>
            <i>Note: excursions and accommodation are not included in the price!</i>
            </div>
        </div>
        <div style={{textAlign: 'right'}}><h6>Tour price: {props.tour.cost}$/day</h6></div>
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

    const [tourId, setTourId] = useState(props.tour.id);
    
    const {tour} = useContext(Context);
    useEffect(() => {
      fetchAccomms(props.tour.id).then(data => { 
        tour.setAccomms(data)
      })
    }, [modalShow]);
  
    return (
      <>
        <VioletButton 
          onClick={() => {setModalShow(true); setTourId(props.tour.id)}}
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