import React,{useState,useMemo} from 'react';
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import BusinessGallery from './BusinessGallery.jsx'
import RestaurantTitle from './RestaurantTitle.jsx'
import MenuItems from './MenuItems.jsx'
import SearchBar from './SearchBar.jsx'
import { Container, Row, Col, Button } from 'reactstrap'


const BusinessDetails = () => {


  return (
      <Container fluid={true} className="p-0">
        <Header2/>
        <SearchBar/>
        <Container>
          <div className="details-page">
            <Row>
              <Col sm="1"></Col>
              <Col sm="6">
                <div className="details-left">
                  <BusinessGallery/>
                  <RestaurantTitle/>
                  <MenuItems/>
                </div>
              </Col>
              <Col sm="4">
                <div className="details-right"></div>
              </Col>
              <Col sm="1"></Col>
            </Row>
          </div>
        </Container>
        <Footer2/>
      </Container>
  );
}

export default BusinessDetails;