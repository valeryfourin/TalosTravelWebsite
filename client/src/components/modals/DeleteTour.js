import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteTour } from '../../http/tourAPI';
import { Context } from '../../index';

const DeleteTour = observer(({show, onHide, ...props}) => {
  
  const [id, setId] = useState('');
  const {tour} = useContext(Context)

  function deleteTourClick() {
    let tourId = null;
    tour.tours.map(tour => {
      if (id == tour.id) {
        tourId = tour.id
        
      }
    })
    if (tourId === null) {
      alert('Tour with id ' + id + ' does not exist.')
    } else {
      deleteTour(id).catch(e => alert(e))
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
          Delete Tour
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
              onClick={deleteTourClick}>
                  Delete
          </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteTour;

