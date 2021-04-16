import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import {Context} from '../index';

const TourTable = observer(() => {
    const {user} = useContext(Context);

    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>email</th>
      <th>password</th>
      <th>role</th>
      <th>previous orders</th>
    </tr>
  </thead>
  <tbody>
            {user.users && user.users.map(user => 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                    <td>{user.previousOrders}</td>
                </tr>
             )}
        </tbody>
        </Table>
    );
});

export default TourTable;