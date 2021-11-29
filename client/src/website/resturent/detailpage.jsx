import React,{Fragment,useState,useEffect} from 'react';
import Lightbox from "react-image-lightbox";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, CardHeader, Media, iframe, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import Gallery from '../gallery.jsx';
import {IMAGE_GALLERY} from "../../constant";
import axios from 'axios'
import '../css/style.css'

const Detailpage = (props) => {

const [images,setImage] = useState([]) 
        const [smallImages,setsmallImages] = useState([])
        
        const initilindex = {index:0,isOpen:false}
        const[photoIndex,setPhotoIndex] = useState(initilindex)
        const onMovePrev = () => {
           const prev = (photoIndex.index + images.length - 1) % images.length
           setPhotoIndex({...photoIndex,index:prev})
        }
        const  onMoveNext = () => {
            const next = (photoIndex.index + 1) % images.length
            setPhotoIndex({...photoIndex,index:next})
        }

        useEffect(() => {

            axios.get(`${process.env.PUBLIC_URL}/api/image-light.json`).then((response) => {
                setImage(response.data.src);
            })

            axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
                setsmallImages(response.data.src);
            })

        },[])

  return (
    <div className="detailpage">             
      <Container className="p-0">        
      <Row className="m-0">
        <Col sm="12" xs="12">
        	<div className="resturentcontact">
        		<h1>Tumbleweed Bar</h1>
        		<div class="contact-group">
	            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/location_map.png`} 
	                 alt="Location" className="addmap" />
	            <div class="contactdetail">4070 County Road 211, WY, Burns, 82053</div>
	          </div><br/>
	          <div class="contact-group">
	            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/website.png`} 
	                 alt="Web" className="addweb" />
	            <div class="contactdetail"><a href="https://www.unitedrestaurants.com/">www.unitedrestaurants.com</a></div>
	          </div><br/>
	          <div class="contact-group">
	            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/call.png`} 
	                 alt="Call" className="addcall" />
	            <div class="contactdetail"><a href="tel:3075473660">3075473660</a></div>
	          </div>
        	</div>
        </Col>
        </Row>
      </Container>
      <div className="ourhistory">
      	<Container>
      		<Row>
      			<Col sm="12" xs="12">
      				<div class="historyabout">
      					<h2>Our History</h2>
      					<p>Pellentesque habitant morbi tristique senectus netus et malesuada fames turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas 
						Pellentesque habitant morbi tristique senectus netus et malesuada fames turpisas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet qu</p>
      					<a href="javascript:void(0)" class="showmorebtn">Show more</a>
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>
      <div className="whatdowehave">
      	<Container>
      		<Row>
      			<Col sm="4" xs="12">
      				<div className="wehave">
      					<h3>What Do We Have</h3>
      					<List type="unstyled">
      						<li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Salad With Vagitable</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Teriyaki salmon</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Roasted prawns coriander</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Pumpkin and goat cheese</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Mince & steak pie</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Veal mini escalopes</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Ravioli filled with baked</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Teriyaki salmon</a></li>
	                 <li><a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
	                 alt="Hand Symbol" className="handsymbol" /> Roasted prawns coriander</a></li>
      					</List>
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>

      <div className="imagegallery">
      	<Fragment>
                <Container className="p-0">
                    <Row>
                        {smallImages.length > 0 ? 
                        <Col sm="12" xs="12">
                        <h5>Our Gallery</h5>
                            <div className="my-gallery row">
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[0]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:0, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[2]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:2, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[1]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:1, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[3]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:3, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[8]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:8, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[5]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:5, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[4]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:4, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={require(`../../assets/images/${smallImages[9]}`)}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:9, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    
                                </div>
                        </Col>
                        :""}
                    </Row>
                </Container>
                {photoIndex.isOpen && (
                    <Lightbox
                        mainSrc={require(`../../assets/images/${images[photoIndex.index]}`)}
                        nextSrc={require(`../../assets/images/${images[(photoIndex.index + 1) % images.length]}`)}
                        prevSrc={require(`../../assets/images/${images[(photoIndex.index + images.length - 1) % images.length]}`)}
                        imageTitle={photoIndex.index + 1 + "/" + images.length}
                        onCloseRequest={() => setPhotoIndex({ ...photoIndex,isOpen:false})}
                        onMovePrevRequest={onMovePrev}
                        onMoveNextRequest={onMoveNext}
                    />
                )}
            </Fragment>
      </div>

      <div className="videossection">
      	<Container className="p-0">
      		<h5>Videos</h5>
      		<Row>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      			<Col sm="3" xs="6">
      				<div class="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
						  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>

      <div className="dealsinformation">
      	<Container className="p-0">
      		<Row>
      			<Col sm="6" xs="12">
      				<div className="dealsinfo">
      					<h6>Deals</h6>
      					<div className="fridaydeals"><b>Black Friday Deal</b></div>
      					<p>United Restaurants New User</p>
      					<List type="unstyled">
      						<li>
						    <b>How to avail the offer</b>
						    <ul>
						      <li>
						        Enter the Promo Code APP100 to get Flat 30% OFF on total transaction
						      </li>
						      <li>
						        Offer valid only on United Restaurants for first time users
						      </li>
						      <li>
						        Max. Discount that can be availed per transaction is 30% OFF
						      </li>
						    </ul>
						  </li>

      					</List>
      				</div>
      			</Col>
      			<Col sm="6" xs="12">
      				<div className="contactusinfo">
      					<h6>Contact Us</h6>
      				</div>
      			</Col>
      			<Col sm="6" xs="12">
      				<div className="jobinfo">
      					<h6>Job Opening</h6>
      				</div>
      			</Col>
      			<Col sm="6" xs="12">
      				<div className="saleinfo">
      					<h6>Items for Sale</h6>
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>

    </div>
  );
}

export default Detailpage;
