import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import SearchBar from './SearchBar.jsx'
import axios from 'axios';

const Technical = (props) => {

    const [technicalSupportData, setTechnicalSupportData] = useState('');

useEffect(() => {
    axios.get(`/api/pages/slug/technical-support`)
    .then((getData) => {
      setTechnicalSupportData(getData.data);
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
            <h1>Technical support</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
                <Col sm="12" xs="12">
                  <div dangerouslySetInnerHTML={{ __html: technicalSupportData.body }} />
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

export default Technical;
