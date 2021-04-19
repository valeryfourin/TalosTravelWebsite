import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { confirmOrder, fetchOrders } from '../http/orderAPI';
import {Context} from '../index';
import VioletButton from './VioletButton';
import { createContractFile } from './createContract';
import { fetchTours } from '../http/tourAPI';

const TourTable = observer(() => {
    const {order} = useContext(Context);
    const {user} = useContext(Context);
    const {tour} = useContext(Context);

    const [confirmed, setConfirmed] = useState(false);
    const [orderId, setOrderId] = useState('');
    
    const status = 'Confirmed';

    useEffect(() => {
        fetchTours().then(data => { 
          tour.setTours(data)
        })
      }, []);
  
    function confirm(id) {
      setConfirmed(true);
      setOrderId(id);
      
      console.log(orderId)
      console.log(status)
      confirmOrder(orderId, status)
    }

    function createContract(tourId, date, peopleNumber, price, orderId, orderStatus) {
      let text = `user: ${user.email},

tour id: ${tourId},
date: ${date},
number of people: ${peopleNumber},
price: ${price},
order id: ${orderId},
order status: ${orderStatus},

      contract created at ${new Date().toISOString().slice(0,16).replace(/T/g," ")}
      `;
      createContractFile(text);
    }

    useEffect(() => {
      fetchOrders().then(data => { 
        order.setOrders(data)
      })
    }, [confirmed]);

    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>status</th>
      {user.role === 'ADMIN' ? <th>user id</th> : null }
      <th>tour id</th>
      {user.role === 'USER' ? <th>start date</th> : null }
      {user.role === 'USER' ? <th>end date</th> : null }
      <th>people number</th>
      <th>total price</th>
      <th>payment status</th>
    </tr>
  </thead>
  <tbody>
            {order.orders && order.orders.map(order => 
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.status}</td>
                    {user.role === 'ADMIN' ? <td>{order.userId}</td> : null}
                    <td>{order.tourId}</td>
                    {user.role === 'USER' ? <td>{new Date(order.startDate).toISOString().slice(0,10).replace(/-/g,"/")}</td> : null}
                    {user.role === 'USER' ? <td>{new Date(order.endDate).toISOString().slice(0,10).replace(/-/g,"/")}</td> : null}
                    <td>{order.numberOfPeople}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.paymentStatus}</td>
                    {user.role === 'ADMIN' ? <VioletButton text='confirm' onClick={() => confirm(order.id)}  disabled={order.status == 'Confirmed' ? true : false}/> : null}
                    {user.role === 'USER' 
                      ? 
                      <VioletButton 
                        text='download contract' 
                        onClick={() => createContract(order.tourId, 
                        `${new Date(order.startDate).toISOString().slice(0,10).replace(/-/g,"/")} - ${new Date(order.endDate).toISOString().slice(0,10).replace(/-/g,"/")}`, 
                        order.numberOfPeople, order.totalPrice, order.id, order.status)} /> 
                      : 
                      null}
                    
                </tr>
             )}
        </tbody>
        </Table>
    );
});

export default TourTable;