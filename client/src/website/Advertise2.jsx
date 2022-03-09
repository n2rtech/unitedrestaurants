import React,{useState,useMemo} from 'react';
import { Container, Row, Col,Button } from 'reactstrap'

const Advertise2 = (props) => {

  return (
      <div className="advertise">
        <Container fluid={true} className="p-0">
          <h2>advertise your business here</h2>
          <Row className="m-0">
            <Col sm="4" className="p-0">
              <div className="advertise-gridlarg">
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/add-banner.jpg`}/>
                <div className="clickevent">     
                  <div className="addname">Your AD Here</div>
                  <Button>click to rent</Button>
                </div>
              </div>
            </Col> 
            <Col sm="4" className="p-0">
              <div className="advertise-gridlarg">
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/add-banner.jpg`}/>
                <div className="clickevent">     
                  <div className="addname">Your AD Here</div>
                  <Button>click to rent</Button>
                </div>
              </div>
            </Col>
            <Col sm="4" className="p-0">
              <div className="advertise-gridlarg">
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/add-banner.jpg`}/>
                <div className="clickevent">     
                  <div className="addname">Your AD Here</div>
                  <Button>click to rent</Button>
                </div>
              </div>
            </Col>  
          </Row>
        </Container>
      </div>
  );
}

export default Advertise2;
