import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal} from 'react-bootstrap';
import { createTour, fetchAccomms, fetchTours } from '../../http/tourAPI';
import {Context} from '../../index';
import VioletButton from '../VioletButton';

const CreateTour = observer(({show, onHide, ...props}) => {
    const {tour} = useContext(Context);
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [cost, setCost] = useState('');
    const [type, setType] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
      fetchTours().then(data => tour.setTours(data))
      fetchAccomms().then(data => tour.setAccomms(data.rows))
    }, []);

    const [accommodation, setAccommodation] = useState([]);

    const addAccommodation = () => {
        setAccommodation([...accommodation, {type: '', title: '', address: '', description: '', img: '', price: '', stars: '', number: Date.now()}])
    }

    const removeAccommodation = (number) => {
        setAccommodation(accommodation.filter(i => i.number !== number))
    }
    
    const addTour = () => {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('country', country);
      formData.append('description', description);
      formData.append('img', img);
      formData.append('cost', `${cost}`);
      formData.append('type', type);
      formData.append('activities', JSON.stringify(activities));
      createTour(formData).then(data => onHide())
    }

    //   console.log(formData)
    //   createTour(tourBody).then(data => onHide())
    // }; 

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
            
            <Form.Control 
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="mt-2 mb-2" 
              placeholder={'Input title'}
              />
            <Dropdown className="mt-2 mb-2"> 
                <Dropdown.Toggle>{ type == null ? 'Choose type:' : type}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item
                      value='Bus'
                      onClick={e => setType(e.target.text)}
                      >Bus</Dropdown.Item>
                    <Dropdown.Item 
                      value='Railway'
                      onClick={e => setType(e.target.text)}
                      >Railway</Dropdown.Item>
                    <Dropdown.Item 
                      value='Air'
                      onClick={e => setType(e.target.text)}
                      >Air</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Form.Control 
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="mt-2 mb-2" 
              placeholder={'Input country'}/>
            <Form.Control 
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="mt-2 mb-2" 
              as="textarea" 
              rows={3} 
              placeholder={'Input description (max character 900)'}/>
            <Form.Control 
              value={img}
              onChange={e => setImg(e.target.value)}
              className="mt-2 mb-2" 
              placeholder={'Input image preview name'}/>
            <Form.Control 
              value={cost}
              onChange={e => setCost(Number(e.target.value))}
              className="mt-2 mb-2" 
              id="numbersOnlyInput"
              placeholder={ cost == '' ? 'Input price per night:' : cost}
              type="number"/>
            <Form.Control 
              value={activities}
              onChange={e => setActivities(e.target.value)}
              className="mt-2 mb-2" 
              as="textarea" rows={2} 
              placeholder={'Input activities (divide with a coma)'}/>
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
            onClick={addTour}>
                Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
});

export default CreateTour;

