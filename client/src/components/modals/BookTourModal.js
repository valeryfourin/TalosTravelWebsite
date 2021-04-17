
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Image, Modal } from "react-bootstrap";
import { Context } from '../..';
import { createOrder } from '../../http/orderAPI';
import GuestsCount from '../GuestsCount';
import VioletButton from '../VioletButton';
import '../../styles/SearchBar.scss';
import { evaluatePrice, evaluateNights } from '../Calculator';
import { observer } from 'mobx-react-lite';
import reactDom from 'react-dom';

const BookTourModal = observer((props) => {


    const {user} = useContext(Context);
    const {tour} = useContext(Context);

    const [valueCalendar, setValueCalendar] = useState([new Date(), new Date()]);
    const [peopleNumber, setPeopleNumber] = useState(1);
    const [startDate, setStartDate] = useState(valueCalendar[0]);
    const [endDate, setEndDate] = useState(valueCalendar[1]);
    const [nights, setNights] = useState(1);
    const userId = user.id;
    const tourId = props.tour.id;
    // const [totalPrice, setTotalPrice] = useState(props.tour.cost);
    let totalPrice = props.tour.cost;

    let activitiesArray = String(props.tour.activities).split(',')
    
    const getPeopleNumber = (number) => {
      setPeopleNumber(number)
    }
    
    useEffect(() => {
      setStartDate(valueCalendar[0])
      setEndDate(valueCalendar[1])
      setNights(evaluateNights(startDate, endDate))
      // nights = evaluateNights(startDate, endDate)
    }, [valueCalendar]);
    
    console.log(peopleNumber)

    // console.log('..................................')
    useEffect(() => {
      // console.log(totalPrice)
      // setTotalPrice(evaluatePrice(1, startDate, endDate))
      totalPrice = evaluatePrice(props.tour.cost, startDate, endDate, peopleNumber)
    }, [valueCalendar, nights, peopleNumber]);
    
    // console.log(totalPrice)

    const addOrder =  () => {
      console.log(peopleNumber)
      console.log(startDate)
      console.log(endDate)
      console.log(nights)
      console.log(userId)
      console.log(tourId)
      console.log(totalPrice)
      // const formData = new FormData();
      // formData.append('title', title);
      // formData.append('country', country);
      // formData.append('description', description);
      // // formData.append('img', img);
      // formData.append('img', file);
      // formData.append('cost', `${cost}`);
      // formData.append('type', type);
      // formData.append('activities', `{ ${activities} }`);

      
      // createOrder(formData).then(data => { props.onHide(); console.log(data)})
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

          <Form>
            <div className=""><b>Country: </b>{props.tour.country}</div>
            <div className="mb-3"><b>Type: </b>{props.tour.type} tour</div>
            <DateRangePicker 
              className="calendar"
              onChange={setValueCalendar}
              value={valueCalendar}
              minDate={new Date()}/>
                
             <GuestsCount onGetPeopleNumber={getPeopleNumber}/>
            {/*<Form.Check inline label="1" type="radio" id={`inline-radio-1`} />
            <Form.Check inline label="2" type="radio" id={`inline-radio-2`} /> */}
            <div className="tour-description-container">
                <br/>
                <div className=""><h6>Available activities:</h6> 
                <div>
                    { 
                        activitiesArray.map(element => 
                            <Form.Check key={activitiesArray.indexOf(element)} type="radio" label={element} style={{width: '5'}} className="pt-1" />)
                    }
                </div>
                <br/>
                <i>Note: excursions and accommodation are not included in the price!</i>
                </div>
            </div>
            <div style={{textAlign: 'right'}}><h6>Total price: {totalPrice} $</h6></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <VioletButton 
            onClick={addOrder}
            text="Book!"
          />
        </Modal.Footer>
      </Modal>

    );

});
  
  const LaunchBookTourModal = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
    
    const {user} = useContext(Context);
    function checkAuth() {
      if (!user.isAuth) alert('You need to be authorized!')
      else setModalShow(true)
    }

    function bookTour() {
        checkAuth()
    }

    return (
      <>
        <VioletButton 
          onClick={bookTour}
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