import React,{useState,useMemo} from 'react';
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import BusinessGallery from './BusinessGallery.jsx'
import RestaurantTitle from './RestaurantTitle.jsx'
import Offers from './Offers.jsx'
import JobOpenings from './JobOpenings.jsx'
import MenuItems from './MenuItems.jsx'
import RestaurantContact from './RestaurantContact.jsx'
import SaleItems from './SaleItems.jsx'
import BusinessVideo from './BusinessVideo.jsx'
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
              <Col sm="7">
                <div className="details-left">
                  <BusinessGallery/>
                  <RestaurantTitle/>
                </div>
                <MenuItems/>
                <Offers/>
                <JobOpenings/>
              </Col>
              <Col sm="5">
                <div className="details-right">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.146392289966!2d77.31606891488498!3d28.59538478243252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad35a34aa7%3A0x9130c6ae0c2728db!2sN2R%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1645106571650!5m2!1sen!2sin" width="100%" height="240" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <RestaurantContact/>
                <SaleItems/>
                <BusinessVideo/>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer2/>
      </Container>
  );
}

export default BusinessDetails;