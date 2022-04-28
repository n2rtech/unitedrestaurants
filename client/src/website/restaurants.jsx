import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from './header2.jsx'
import Footer from './footer2.jsx'
import Restaurantlist from './restaurantlist.jsx';

const Restaurants = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
           <Header />

           <Restaurantlist />
           
           <Footer />
        </Col>
        </Row>
      </Container>
  );
}

export default Restaurants;
