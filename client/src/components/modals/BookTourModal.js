
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Modal } from "react-bootstrap";
import { Context } from '../..';
import { createOrder } from '../../http/orderAPI';
import GuestsCount from '../GuestsCount';
import VioletButton from '../buttons/VioletButton';
import '../../styles/SearchBar.scss';
import { evaluatePrice, evaluateNights } from '../Calculator';
import { observer } from 'mobx-react-lite';
import { assignPreviousOrders } from '../../http/userAPI';
import { fetchAccomms } from '../../http/tourAPI';

const BookTourModal = observer((props) => {

    const {tour} = useContext(Context);
    const {user} = useContext(Context);

    const [valueCalendar, setValueCalendar] = useState([new Date(), new Date()]);
    const [peopleNumber, setPeopleNumber] = useState(1);
    const [startDate, setStartDate] = useState(valueCalendar[0]);
    const [endDate, setEndDate] = useState(valueCalendar[1]);
    const [accommPrice, setAccommPrice] = useState(0);
    const [nights, setNights] = useState(1);
    const [accommId, setAccommId] = useState(0);
    const userId = user.id;
    const tourId = props.tour.id;
    let totalPrice = props.tour.cost;

    let activitiesArray = String(props.tour.activities).split(',')
    
    const getPeopleNumber = (number) => {
      setPeopleNumber(number)
    }
    
    useEffect(() => {
      setStartDate(valueCalendar[0])
      setEndDate(valueCalendar[1])
      setNights(evaluateNights(startDate, endDate))
    }, [valueCalendar]);
    

    useEffect(() => {
      totalPrice = evaluatePrice(props.tour.cost, startDate, endDate, accommPrice, peopleNumber)
    }, [valueCalendar,nights,peopleNumber, accommPrice]);
    const priceNumber = document.createElement('div');
    useEffect(() => {
      ReactDOM.render(<h6>Total price: {totalPrice} $</h6>, priceNumber)
    })

    function showEvaluatedPrice(e) {
      let totalPriceContainer = document.getElementById("totalPrice");
      if (totalPriceContainer.hasChildNodes()) {
        totalPriceContainer.removeChild(totalPriceContainer.childNodes[0]);
        totalPriceContainer.appendChild(priceNumber)
      } else {
        totalPriceContainer.appendChild(priceNumber)
      }
    }

    const addOrder =  () => {
      console.log(peopleNumber)
      console.log(startDate)
      console.log(endDate)
      console.log(nights)
      console.log(userId)
      console.log(tourId)
      console.log(totalPrice)

      const formData = new FormData();
      formData.append('numberOfPeople', peopleNumber);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('nights', nights);
      formData.append('userId', userId);
      formData.append('tourId', tourId);
      formData.append('accommId', accommId);
      formData.append('totalPrice', `${totalPrice}`);


      createOrder(formData).then(data => { 
        props.onHide(); 
        assignPreviousOrders(user.id, `id = ${data.id}`)
        console.log(data)
        alert("Order successfully created. You can see details in your account.")
      })
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
            <div className="mb-3"><b>Id: </b>{props.tour.id}</div>
            <DateRangePicker 
              className="calendar"
              onChange={setValueCalendar}
              value={valueCalendar}
              minDate={new Date()}/>
                
             <GuestsCount onGetPeopleNumber={getPeopleNumber}/>

            <div className="tour-description-container">
                <br/>
                <div>
                  <h6>Available activities:</h6> 
                  <div>
                      { 
                          activitiesArray.map(element => 
                              <Form.Check key={activitiesArray.indexOf(element)} type="radio" name="group1" label={element} style={{width: '5'}} className="pt-1" />)
                      }
                  </div>
                  <br/>
                  <h6>Available accommodation:</h6> 
                  <div>
                    {tour.accomms.map(accomm => 
                      <Form.Check key={accomm.id} type="radio" name="group2" onClick={() => {setAccommId(accomm.id); console.log(accomm.id); setAccommPrice(accomm.price); console.log(accomm.price);}} label={accomm.title + " " + accomm.type} />)}
                  </div>
                  <br/>
                  <i>Note: excursions and accommodation are not included in the price!</i>
                </div>
            </div>
            <VioletButton 
              id='priceButton' 
              text='Evaluate price'
               onClick={showEvaluatedPrice}/>
            <div style={{textAlign: 'right'}} id='totalPrice' ></div>
            
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

    const {tour} = useContext(Context);
    useEffect(() => {
      fetchAccomms(props.tour.id).then(data => { 
        tour.setAccomms(data)
      })
    }, [modalShow]);

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