import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import axios from 'axios'

const Countryflag = (props) => {

const [countryData, setCountryData] = useState([]);

useEffect(() => {
    axios.get(`/api/Countries/list`)
    .then((getData) => {
      setCountryData(getData.data);
    });
}, []);

const handleCountryClick = (code) => {
  localStorage.setItem('country_code' , code);
}

  return (
      <div className="countryflag">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col sm="12" className="p-0">
          
            <List type="inline">
            {countryData.map((item , i) => (
              <ListInlineItem key={i}>
                <a href={`${process.env.PUBLIC_URL}/home`} onClick = {() => handleCountryClick(item.code)} >
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/${item.code.toUpperCase()}.png`} 
               alt="Menu-Icon"/>
                      {item.code.toUpperCase()}
                </a>
              </ListInlineItem>
            ))}
            </List>
          </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Countryflag;
