import React from 'react';
import '../styles/Offers.scss';
import { Col, Container, Row } from 'react-bootstrap';
import TourBar from '../components/TourBar';
import TourList from '../components/TourList';
import SearchBar from '../components/SearchBar';


const Offers = () => {
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
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Offers;