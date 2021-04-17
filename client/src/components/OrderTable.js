import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Row, Table } from 'react-bootstrap';
import {Context} from '../index';
import VioletButton from './VioletButton';

const TourTable = observer(() => {
    const {order} = useContext(Context);
    const {user} = useContext(Context);

    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>status</th>
      <th>user id</th>
      <th>tour id</th>
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
                    <td>{order.userId}</td>
                    <td>{order.tourId}</td>
                    <td>{order.numberOfPeople}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.paymentStatus}</td>
                    {user.role === 'ADMIN' ? <VioletButton text='confirm'/> : null}
                    
                </tr>
             )}
        </tbody>
        </Table>
    );
});

export default TourTable;