import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'

const verifyEmail = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <Container>
          <div className="verification">
            <h1>United Restaurants</h1>
            <p>Hello,</p>
            <p>Please verify your email from here</p>
            <button className="btn btn-primary">Verify Email Address</button>
          </div>
          </Container>
           <Footer />
        </Col>
        </Row>
      </Container>
      
  );
}

export default verifyEmail;
