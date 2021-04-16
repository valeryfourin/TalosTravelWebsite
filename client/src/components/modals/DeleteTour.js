import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index';
// import '../styles/Admin.scss';
// import VioletButton from '../VioletButton'

const DeleteTour = observer(({show, onHide, ...props}) => {
  
  const {tour} = useContext(Context);
  const [id, setId] = useState('');
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
          Delete Tour
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                placeholder={'Input id'}
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
});

export default DeleteTour;

