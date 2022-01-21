import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import { useLocation } from "react-router-dom";
import axios from 'axios'

const Advertise = (props) => {

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/adlargbg.png`;
  }

  const country_code = localStorage.getItem('country_code');
  const [addSpaces, setAddSpaces] = useState([]);

    useEffect(() => {
   
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

        axios.get('/api/ad-spaces/list?country='+`${country_code}` , config)
        .then((getData) => {
          setAddSpaces(getData.data);
        });

    }, []);

  return (
      <div className="advertise">
        <Container fluid={true} className="p-0">
          <h2>advertise your business here</h2>
          
          <Row className="m-0">
            {addSpaces.length > 0 ? addSpaces.map((item , i  ) => (
            
              
                <Col sm="4" className="p-0">
                  <div className="advertise-gridlarg">
                    <img onError = {addDefaultSrc} className="img-fluid" src={`${process.env.PUBLIC_URL}/api/uploads/adspaces/${item.image}`} 
                          alt="Menu-Icon"/>
                  </div>

                </Col>

                
                    
          ))  :
          
          <Row className="m-0">
                  <Col sm="4" className="p-0">
                    <div className="advertise-gridlarg">
                      <img onError = {addDefaultSrc} className="img-fluid" src={`${process.env.PUBLIC_URL}/api/uploads/adspaces/`} 
                            alt="Menu-Icon"/>
                          <div className="clickevent">     
                            <div className="addname">Your AD Here</div>
                                <Button>click to rent</Button>
                          </div>
                    </div>
                  </Col>

                  <Col sm="4" className="p-0">
                    <div className="advertise-gridlarg">
                      <img onError = {addDefaultSrc} className="img-fluid" src={`${process.env.PUBLIC_URL}/api/uploads/adspaces/`} 
                            alt="Menu-Icon"/>
                          <div className="clickevent">     
                            <div className="addname">Your AD Here</div>
                                <Button>click to rent</Button>
                          </div>
                    </div>
                  </Col>  

                  <Col sm="4" className="p-0">
                    <div className="advertise-gridlarg">
                      <img onError = {addDefaultSrc} className="img-fluid" src={`${process.env.PUBLIC_URL}/api/uploads/adspaces/`} 
                            alt="Menu-Icon"/>
                          <div className="clickevent">     
                            <div className="addname">Your AD Here</div>
                                <Button>click to rent</Button>
                          </div>
                    </div>
                  </Col>    
              </Row>
          
          
          }

                { addSpaces.length != 0 && addSpaces.length <= 3 ?  <Col sm="4" className="p-0">
                    <div className="advertise-gridlarg">
                      <img onError = {addDefaultSrc} className="img-fluid" src={`${process.env.PUBLIC_URL}/api/uploads/adspaces/`} 
                            alt="Menu-Icon"/>
                          <div className="clickevent">     
                            <div className="addname">Your AD Here</div>
                                <Button>click to rent</Button>
                          </div>
                    </div>
                  </Col> : ''}

      </Row>


        

        </Container>
      </div>
  );
}

export default Advertise;
