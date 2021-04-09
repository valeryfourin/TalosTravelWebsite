import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
// import '../styles/Admin.scss';
// import VioletButton from '../VioletButton'

const EditTour = ({show, onHide, ...props}) => {
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
          Edit Tour
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                placeholder={'Input title'}
            />
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
                Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTour;

