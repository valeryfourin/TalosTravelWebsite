import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import {Context} from '../../index';
import TourItem from '../TourItem';
import '../../styles/TourList.scss';

const TourList = observer(() => {
    const {tour} = useContext(Context);

    return (
        <Row className="tour-list-container">
            {tour.tours && tour.tours.map(tour => 
                <TourItem key={tour.id} tourItem={tour}/>
            )}
        </Row>
    );
});

export default TourList;