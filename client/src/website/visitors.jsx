import React from 'react';
import { Container, Row, Col} from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'

const Visitors = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>Visitors</h1> 
            <p>Visitors can explore the website and search the restaurants for free. If you are a vendor and wants to signup on our website <a href={`${process.env.PUBLIC_URL}/signup`}>click here</a></p>   
          </Container>
          </div>
           <Footer />
        </Col>
        </Row>
      </Container>
      
  );
}

export default Visitors;
