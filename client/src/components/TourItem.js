import { useContext, useEffect } from 'react';
import {Context} from '../index';
import LaunchModal from './modals/TourItemModal';
import '../styles/TourItem.scss';
import {  Card, Col, Row, Image} from 'react-bootstrap';
import LaunchBookTourModal from './modals/BookTourModal';
import { fetchAccomms } from '../http/tourAPI';

const TourItem = ({tourItem}) => {
    const {tour} = useContext(Context);
    useEffect(() => {
        fetchAccomms(tourItem.id).then(data => { 
            tour.setAccomms(data)
        })
    })

    return (
        <Col >
            <Card className="tour-card">
                <div className="img-container">
                    <Image src={process.env.REACT_APP_API_URL + tourItem.img} className="tour-preview"/>
                </div>
                <div className="tour-card-content">

                    <div><h5 className="tour-title">{tourItem.title}</h5></div>
                    <div>
                        <div>{tourItem.country}</div>
                        <div className="tour-description-container">
                            <div className="tour-description">{tourItem.description}</div>
                        </div>
                        <div style={{textAlign: 'right'}}><h6>{tourItem.cost}$/day</h6></div>
                        <Row className="justify-content-around">
                            <LaunchModal tour={tourItem}/>
                            <LaunchBookTourModal tour={tourItem}/>
                        </Row>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default TourItem;