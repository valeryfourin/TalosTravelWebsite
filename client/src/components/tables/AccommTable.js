import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import {Context} from '../../index';

const AccommTable = observer(() => {
    const {tour} = useContext(Context);

    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>address</th>
      <th>type</th>
      <th>stars</th>
      <th>description</th>
      <th>img</th>
      <th>cost</th>
    </tr>
  </thead>
  <tbody>
            {tour.accomms && tour.accomms.map(accomm => 
                <tr key={accomm.id}>
                    <td>{accomm.id}</td>
                    <td>{accomm.title}</td>
                    <td>{accomm.address}</td>
                    <td>{accomm.type}</td>
                    <td>{accomm.stars}</td>
                    <td>{accomm.description}</td>
                    <td>{accomm.img}</td>
                    <td>{accomm.price}</td>
                </tr>
             )}
        </tbody>
        </Table>
    );
});

export default AccommTable;