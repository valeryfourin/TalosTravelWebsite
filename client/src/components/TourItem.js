// import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import {Context} from '../index';

import LaunchModal from './modals/TourItemModal';
import '../styles/TourItem.scss';
import {  Card, Col, Row, Image} from 'react-bootstrap';
import VioletButton from './VioletButton';
import { fetchUser } from '../http/userAPI';
import LaunchBookTourModal from './modals/BookTourModal';

const TourItem = ({tour}) => {
    const {user} = useContext(Context);
    

    return (
        <Col >
            <Card className="tour-card">
                <div className="img-container">
                    <Image src={process.env.REACT_APP_API_URL + tour.img} className="tour-preview"/>
                </div>
                <div className="tour-card-content">

                    <div><h5 className="tour-title">{tour.title}</h5></div>
                    <div>
                        <div>{tour.country}</div>
                        <div className="tour-description-container">
                            <div className="tour-description">{tour.description}</div>
                        </div>
                        <div style={{textAlign: 'right'}}><h6>{tour.cost}$/day</h6></div>
                        <Row className="justify-content-around">
                            <LaunchModal tour={tour}/>
                            <LaunchBookTourModal tour={tour}/>
                        </Row>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default TourItem;