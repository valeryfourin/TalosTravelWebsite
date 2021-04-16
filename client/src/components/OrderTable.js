import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Row, Table } from 'react-bootstrap';
import {Context} from '../index';

const TourTable = observer(() => {
    const {tour} = useContext(Context);

    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>country</th>
      <th>description</th>
      <th>img</th>
      <th>cost</th>
      <th>type</th>
      <th>activities</th>
    </tr>
  </thead>
  <tbody>
            {tour.tours && tour.tours.map(tour => 
                <tr key={tour.id}>
                    <td>{tour.id}</td>
                    <td>{tour.title}</td>
                    <td>{tour.country}</td>
                    <td>{tour.description}</td>
                    <td>{tour.img}</td>
                    <td>{tour.cost}</td>
                    <td>{tour.type}</td>
                    <td>{tour.activities}</td>
                </tr>
             )}
        </tbody>
        </Table>
    );
});

export default TourTable;