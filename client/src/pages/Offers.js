import React, { useContext, useEffect } from 'react';
import '../styles/Offers.scss';
import { Col, Container, Row } from 'react-bootstrap';
import TourBar from '../components/TourBar';
import TourList from '../components/TourList';
import SearchBar from '../components/SearchBar';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchAccomms, fetchTours } from '../http/tourAPI';
// import Pages from '../components/Pages';


const Offers = observer(() => {
  const {tour} = useContext(Context);
  
  useEffect(() => {
    fetchTours(null).then(data => { 
      tour.setTours(data)
    })
    fetchAccomms().then(data => tour.setAccomms(data))
  }, []);
  
  useEffect(() => {
    fetchTours(tour.selectedCountry).then(data => { 
      tour.setTours(data)
    })
  }, [tour.selectedCountry,])

  useEffect(() => {
    fetchTours( null ).then(data => { 
      tour.setTours(data)
    })
  }, [tour.selectedCountry === 'Show all tours',])
  

  return (
    <>
    
    <div className="main-banner d-flex align-items-center">
      <SearchBar className="search-bar"></SearchBar>
    </div>
      
    <Container className="container tour-page-container">
      <Row>
        <Col md={2}>
          <TourBar />
        </Col>
        
        <Col md={10}>
          <TourList/>
          {/* <Pages/> */}
        </Col>
      </Row>
    </Container>
    </>
  );
});

export default Offers;