import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input,Label, Button } from 'reactstrap'
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import SearchBar from './SearchBar.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = (props) => {

    const [contactUsData, setContactUsData] = useState('');

useEffect(() => {
    axios.get(`/api/pages/slug/contact-us`)
    .then((getData) => {
      setContactUsData(getData.data);
    });
  }, []);

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header2 /> 
          <SearchBar /> 
          <div className="informationpage">  
          <Container>
            <h1>Contact Us</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
                 <Col sm="12" xs="12">
                   <div dangerouslySetInnerHTML={{ __html: contactUsData.body }} />
                 </Col>
               </Row>
          </Container>
          </div>
           <Footer2 />
        </Col>
        </Row>
      </Container>
      
  );
}

export default Contact;
