import { observer } from 'mobx-react-lite';
import '../styles/TourBar.scss';
import { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Context} from '../index';

const TourBar = observer(() => {
    const {tour} = useContext(Context)
    return (
        <ListGroup className="list-group">
            <ListGroup.Item ><h6>Top Directions:</h6></ListGroup.Item>
            {tour.Tours.map(country =>
                <ListGroup.Item 
                    className="list-item"
                    active={country.id === tour.selectedTour.id}
                    onClick={() => tour.setSelectedTour(country)}
                    key={country.id}
                >
                    {country.country}
                </ListGroup.Item>
                )}
        </ListGroup>
    );
});

export default TourBar;