import React,{useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import '../css/style.css'

const Detailpage = (props) => {

  return (
    <div className="detailpage">             
      <Container className="p-0">        
      <Row className="m-0">
        <Col sm="4" xs="12"> 
        <div className="address">
        	<h3>Tumbleweed Bar</h3>
        	<p><b>Phone No.</b> 3075473660</p>
        	<p>4070 County Road 211, WY, Burns, 82053</p>
        </div>
    	</Col>
    	<Col sm="4" xs="12"> 
        <div className="resturentgrid">
        	<img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/1.jpg`} 
                     alt="Menu-Icon"/>
        </div>
    	</Col>
    	<Col sm="4" xs="12"> 
        <div className="resturentgrid">
        	<img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/2.jpg`} 
                     alt="Menu-Icon"/>
        </div>
    	</Col>
        </Row>

        <div className="unitedtab">
        	<Tabs>
		    <TabList>
		      <Tab>
	      	<img src={`${process.env.PUBLIC_URL}/assets/images/icons/about.png`} 
	                 alt="Menu-Icon"/> 
	             <h5>About</h5>
	         </Tab>
		      <Tab><img src={`${process.env.PUBLIC_URL}/assets/images/icons/deals.png`} 
	                 alt="Menu-Icon"/> <h5>Deals</h5></Tab>
		      <Tab><img src={`${process.env.PUBLIC_URL}/assets/images/icons/contact.png`} 
	                 alt="Menu-Icon"/> <h5>Contact</h5></Tab>
		      <Tab><img src={`${process.env.PUBLIC_URL}/assets/images/icons/web.png`} 
	                 alt="Menu-Icon"/> <h5>Websites</h5></Tab>
		      <Tab><img src={`${process.env.PUBLIC_URL}/assets/images/icons/photo.png`} 
	                 alt="Menu-Icon"/> <h5>Photos</h5></Tab>
		      <Tab><img src={`${process.env.PUBLIC_URL}/assets/images/icons/video.png`} 
	                 alt="Menu-Icon"/> <h5>Videos</h5></Tab>
		    </TabList>

		    <TabPanel>
		      <h2>About</h2>
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    </TabPanel>
		    <TabPanel>
		      <h2>Deals</h2>
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    </TabPanel>
		    <TabPanel>
		      <h2>Contact</h2>
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    </TabPanel>
		    <TabPanel>
		      <h2>Websites</h2>
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    </TabPanel>
		    <TabPanel>
		      <h2>Photos</h2>
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    </TabPanel>
		    <TabPanel>
		      <h2>Videos</h2>
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    </TabPanel>
		  </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default Detailpage;
