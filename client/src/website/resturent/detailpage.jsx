import React,{useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, iframe, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import Gallery from '../gallery.jsx';
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
		      <Row>
		      	<Col sm="3" xs="12">
		      	<div className="offerbanner">
		      	<img src={`${process.env.PUBLIC_URL}/assets/images/resturent/offerimg.png`} 
                     alt="Offer" className="img-fluid" />
		      </div>
		      </Col>
		      <Col sm="9" xs="12">
		      	<div className="offerdiscription">
		      	<h4>United Restaurants New User</h4>
		      	<p>How to avail the offer</p>	
		      	<List type="inline">
		      		<li>Select Promo Code option.</li>
		      		<li>Enter the Promo Code APP100 to get Flat 30% OFF on total transaction value.</li>
		      		<li>Offer valid only on United Restaurants for first time users</li>
		      		<li>Applicable only for single transaction per email id and mobile number during the offer period</li>
		      		<li>Max. Discount that can be availed per transaction is 30% OFF</li>
		      		<li>Offer valid till stock lasts</li>
		      	</List>
		      </div>
		      </Col>
		      </Row>
		    </TabPanel>
		    <TabPanel>
		      <h2>Contact</h2>
		      <div className="contactme">
		      	<List type="unstyled">
		      		<li><i className="fa fa-map"></i> <span>United Restaurants</span><br/><span className="address">795 Folsom Ave, Suite 600
San Francisco, CA 94107</span></li>
					<li><i className="fa fa-envelope"></i> <span className="email"><a href="mailto:first.last@example.com">first.last@example.com</a></span></li>
					<li><i className="fa fa-phone" style={{'font-size' : '18px'}}></i> <span className="email"><a href="tel:1234567890">(123) 456-7890</a></span></li>
		      	</List>
		      </div>
		    </TabPanel>
		    <TabPanel>
		      <h2>Websites</h2>
		      <div className="weburl">
		      	<p><a href={`${process.env.PUBLIC_URL}/home`}>www.unitedrestaurants.com</a></p>
		      </div>
		    </TabPanel>
		    <TabPanel>
		      <h2>Photos</h2>
		      <div class="galley">
		      	<Gallery />
		      </div>
		    </TabPanel>
		    <TabPanel>
		      <h2>Videos</h2>
		      
		    <div className="embed-responsive embed-responsive-16by9">
			  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
			</div>

		    </TabPanel>
		  </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default Detailpage;
