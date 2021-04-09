import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
// import '../styles/Admin.scss';
// import VioletButton from '../VioletButton'
import {Context} from '../../index';
import VioletButton from '../VioletButton';

const CreateTour = ({show, onHide, ...props}) => {
    const {tour} = useContext(Context);
    const [accommodation, setAccommodation] = useState([]);

    const addAccommodation = () => {
        setAccommodation([...accommodation, {type: '', title: '', address: '', description: '', img: '', price: '', stars: '', number: Date.now()}])
    }

    const removeAccommodation= (number) => {
        setAccommodation(accommodation.filter(i => i.number !== number))
    }

    return (
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Tour
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            
            <Form.Control className="mt-2 mb-2" placeholder={'Input title'}/>
            <Dropdown className="mt-2 mb-2"> 
                <Dropdown.Toggle>Choose type:</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Bus</Dropdown.Item>
                    <Dropdown.Item>Railway</Dropdown.Item>
                    <Dropdown.Item>Air</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Form.Control className="mt-2 mb-2" placeholder={'Input country'}/>
            <Form.Control className="mt-2 mb-2" as="textarea" rows={3} placeholder={'Input description (max character 900)'}/>
            <Form.Control className="mt-2 mb-2" placeholder={'Input image preview name'}/>
            <Form.Control className="mt-2 mb-2" placeholder={'Input price'}/>
            <Form.Control className="mt-2 mb-2" as="textarea" rows={2} placeholder={'Input activities (divide with a coma)'}/>
            <hr />
            <h4>Accommodation</h4>
            <VioletButton 
                id="find-btn"
                onClick={addAccommodation}
                text="Add new accommodation" />
            {accommodation.map(i => 
                <div key={i.number}>
                
                <hr />
                
                <Form.Control className="mt-2 mb-2" placeholder={'Input title'}/>
                <Dropdown className="mt-2 mb-2"> 
                <Dropdown.Toggle>Choose type:</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Hotel</Dropdown.Item>
                    <Dropdown.Item>Hostel</Dropdown.Item>
                    <Dropdown.Item>Appartment</Dropdown.Item>
                    <Dropdown.Item>Resort</Dropdown.Item>
                    <Dropdown.Item>Other</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>Stars number:</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                    <Dropdown.Item>4</Dropdown.Item>
                    <Dropdown.Item>5</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Form.Control className="mt-2 mb-2" placeholder={'Input address'}/>
            <Form.Control className="mt-2 mb-2" as="textarea" rows={3} placeholder={'Input description (max character 900)'}/>
            <Form.Control className="mt-2 mb-2" placeholder={'Input image preview name'}/>
            <Form.Control className="mt-2 mb-2" placeholder={'Input price'}/>
            <Button 
              onClick={() => removeAccommodation(i.number)}
              variant={'outline-danger'}
              >
                Delete
            </Button>
            <br /><br /><br />
                </div>
            )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button 
              variant={'outline-danger'}
              onClick={onHide}>
                Close
        </Button>
        <Button 
            variant={'outline-success'}
            onClick={onHide}>
                Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateTour;

