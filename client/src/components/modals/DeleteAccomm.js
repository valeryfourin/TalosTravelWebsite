import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteAccomm } from '../../http/tourAPI';
import { Context } from '../../index';

const DeleteAccomm = observer(({show, onHide, ...props}) => {
  
  const [id, setId] = useState('');
  const {tour} = useContext(Context)

  function deleteAccommClick() {
    let accommId = null;
    tour.accomms.map(accomm => {
      if (id == accomm.id) {
        accommId = accomm.id
        
      }
    })
    if (accommId === null) {
      alert('Accommodation with id ' + id + ' does not exist.')
    } else {
      deleteAccomm(id).catch(e => alert(e))
      onHide()
    }
    
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
          Delete Accommodation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                placeholder={'Input id'}
                value={id}
                onChange={e => setId(e.target.value)}
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
              onClick={deleteAccommClick}>
                  Delete
          </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteAccomm;

