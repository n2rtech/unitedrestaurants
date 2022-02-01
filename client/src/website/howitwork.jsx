import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import axios from 'axios';
const Howitwork = (props) => {

  const [howItWorkData, setHowItWorkData] = useState('');

useEffect(() => {
    axios.get(`/api/pages/slug/how-it-work`)
    .then((getData) => {
      setHowItWorkData(getData.data);
    });
  }, []);

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>How It Work</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
                <Col sm="12" xs="12">
                <div dangerouslySetInnerHTML={{ __html: howItWorkData.body }} />
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

export default Howitwork;
