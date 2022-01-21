import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Hotdeals from './hotdeals.jsx'
import Featured from './featured.jsx'
import Advertise from './advertise.jsx'
import Latestadditions from './latestadditions.jsx'
import Homeblog from './homeblog.jsx'
import Maintenance from './maintenance.jsx'
import ScrollButton from './ScrollButton.jsx';
import './css/style.css'
import {useParams} from 'react-router-dom'

const Home = (props) => {
  localStorage.setItem('filter','');
  localStorage.setItem('catid','');
  const params = useParams();
  const [maintenance, setMaintenance] = useState([]);
  const code = localStorage.getItem('country_code');

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch('/api/site-settings/getsettings' , config)
      .then(res => res.json())
      .then(
        (result) => {  
          setMaintenance(result.maintenance_mode);
        },
        (error) => {
          
        }
        )
  }, []);

  console.log('Site Settings=',maintenance);

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
           <Header countrycode = {params.id}/>

          { maintenance == 'yes' ?
            <Maintenance></Maintenance>
         
          : 

          <div>
          <Hotdeals></Hotdeals>

          <Featured></Featured>

          <Advertise></Advertise>

          <Latestadditions></Latestadditions>

          <Homeblog></Homeblog>

          
      </div>
          
          }
        <Footer />
           
        </Col>
        </Row>
      </Container>
  );
}

export default Home;
