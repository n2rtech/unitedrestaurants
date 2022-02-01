import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import axios from 'axios';

const Customer = (props) => {

    const [customerServicesData, setCustomerServicesData] = useState('');

useEffect(() => {
    axios.get(`/api/pages/slug/customer-services`)
    .then((getData) => {
      setCustomerServicesData(getData.data);
    });
  }, []);

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>Customer services</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
                <Col sm="12" xs="12">
                  <div dangerouslySetInnerHTML={{ __html: customerServicesData.body }} />
                </Col>
               </Row>
          </Container>
          </div>
           <Footer />
        </Col>
        </Row>
      </Container>
      
  );
}

export default Customer;
