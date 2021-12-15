import React,{Fragment,useState,useEffect} from 'react';
import Lightbox from "react-image-lightbox";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, CardHeader, Media, iframe, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import Gallery from '../gallery.jsx';
import {IMAGE_GALLERY} from "../../constant";
import axios from 'axios'
import '../css/style.css'
import {useParams} from 'react-router-dom'
import ShowMoreText from "react-show-more-text";

const Detailpage = (props) => {



    const params = useParams();

    const id = `${params.id}`;
    console.log('Id' , id);

		const [images,setImage] = useState([]) 
        const [smallImages,setsmallImages] = useState([])
        const initilindex = {index:0,isOpen:false}
        const[photoIndex,setPhotoIndex] = useState(initilindex)

        const[galleryData,setGalleryData] = useState([])
        const[videoGalleryData,setVideoGalleryData] = useState([])
        const[menuItemsData,setMenuItemsData] = useState({})
        const[saleItemsData,setSaleItemsData] = useState({})
        const[jobsData,setJobsData] = useState([])
        const[couponsData,setCouponsData] = useState([])
        const[vendorProfileData,setVendorProfileData] = useState({})

        const onMovePrev = () => {
           const prev = (photoIndex.index + images.length - 1) % images.length
           setPhotoIndex({...photoIndex,index:prev})
        }
        const  onMoveNext = () => {
            const next = (photoIndex.index + 1) % images.length
            setPhotoIndex({...photoIndex,index:next})
        }

        const executeOnClick = (isExpanded) => {
          console.log(isExpanded);
      }

        useEffect(() => {

            axios.get(`/api/gallery/list/${id}`)
            .then((getData) => {
              setGalleryData(getData.data);

              const result = getData.data;
              for (const [i, element] of result.entries()) 
              {
                setImage((images) => [
                    ...images,
                    element.image,
                    ]);

                setsmallImages((smallImages) => [
                    ...smallImages,
                    element.image,
                    ]);
            }                  
        });


            axios.get(`/api/video-gallery/list/${id}`)
                .then((result_data) => {
                  const result = result_data.data;
                  setVideoGalleryData(result);
            });

            axios.get(`/api/menu-items/${id}`)
                .then((result_data) => {
                  setMenuItemsData(result_data.data);
            });

            axios.get(`/api/sale-items/${id}`)
                .then((result_data) => {
                  setSaleItemsData(result_data.data);
            });

            axios.get(`/api/jobs/list/${id}`)
                .then((result_data) => {
                  setJobsData(result_data.data);
            });

            axios.get(`/api/vendors/profile/${id}`)
                .then((result_data) => {
                  setVendorProfileData(result_data.data);
            });

            axios.get(`/api/vendor-coupons/list/${id}`)
                .then((result_data) => {
                  setCouponsData(result_data.data);
            });


        },[])

  return (
    <div className="detailpage">             
      <Container className="p-0">        
      <Row className="m-0">
        <Col sm="12" xs="12">
        	<div className="resturentcontact">
        		<h1>{vendorProfileData.business_name}</h1>
        		<div className="contact-group">
	            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/location_map.png`} 
	                 alt="Location" className="addmap" />
	            <div className="contactdetail">{vendorProfileData.address}</div>
	          </div><br/>
	          <div className="contact-group">
	            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/website.png`} 
	                 alt="Web" className="addweb" />
	            <div className="contactdetail"><a>{vendorProfileData.website_link}</a></div>
	          </div><br/>
	          <div className="contact-group">
	            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/call.png`} 
	                 alt="Call" className="addcall" />
	            <div className="contactdetail"><a href="tel:3075473660">3075473660</a></div>
	          </div>
        	</div>
        </Col>
        </Row>
      </Container>
      <div className="ourhistory">
      	<Container>
      		<Row>
      			<Col sm="12" xs="12">
      				<div className="historyabout">
      					<h2>Our History</h2>
      				
      					{/* <a href={void(0)} className="showmorebtn">Show more</a> */}
                <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                onClick={executeOnClick}
                expanded={false}
                width={600}
                truncatedEndingComponent={"... "}>
                  {vendorProfileData.about_business}
                </ShowMoreText>
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
                        <div dangerouslySetInnerHTML={{ __html: menuItemsData.content }} />
                        {/*<List type="unstyled">
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Salad With Vagitable</a>
                        </li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Teriyaki salmon</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Roasted prawns coriander</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Pumpkin and goat cheese</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Mince & steak pie</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Veal mini escalopes</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Ravioli filled with baked</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Teriyaki salmon</a></li>
                        <li><a href={void(0)}><img src={`${process.env.PUBLIC_URL}/assets/images/icons/handsymbol.png`} 
                        alt="Hand Symbol" className="handsymbol" /> Roasted prawns coriander</a></li>
                        </List>*/}
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>

      <div className="imagegallery">
      	<Fragment>
                <Container className="p-0">
                    <Row>
                        {galleryData.length > 0 ? 
                        <Col sm="12" xs="12">
                        <h5>Our Gallery</h5>
                            <div className="my-gallery row">
                            { galleryData .map((gallery , i ) => (
                                    <figure className="col-xl-3 col-sm-6">
                                        <Media
                                            src={`${process.env.PUBLIC_URL}/gallery/${gallery.image}`}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                setPhotoIndex({ ...photoIndex,index:i, isOpen:true})
                                            }
                                        />
                                    </figure>
                                    ))}
                                    
                                </div>
                        </Col>
                        :""}
                    </Row>
                </Container>
                {photoIndex.isOpen && (
                    <Lightbox
                        mainSrc={`${process.env.PUBLIC_URL}/gallery/${images[photoIndex.index]}`}
                        nextSrc={`${process.env.PUBLIC_URL}/gallery//${images[(photoIndex.index + 1) % images.length]}`}
                        prevSrc={`${process.env.PUBLIC_URL}/gallery//${images[(photoIndex.index + images.length - 1) % images.length]}`}
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

            { videoGalleryData .map((videoGallery , i ) => (
      			<Col sm="4" xs="6">
      				<div className="videodiv">
      					<div className="embed-responsive embed-responsive-16by9">
					    <iframe src={videoGallery.youtube_link} 
					        allowFullScreen="allowfullscreen"
					        mozallowfullscreen="mozallowfullscreen" 
					        msallowfullscreen="msallowfullscreen" 
					        oallowfullscreen="oallowfullscreen" 
					        webkitallowfullscreen="webkitallowfullscreen"> </iframe>
					  </div>
      				</div>
      			</Col>
      			))}
      		</Row>
      	</Container>
      </div>

      <div className="dealsinformation">
      	<Container className="p-0">
      		<Row>
      			<Col sm="6" xs="12">
      			<div className="dealsinfo">
      					<h6>Deals</h6>
                 {couponsData.map((coupons , i ) => (
                  
      					<div className="fridaydeals">
                  
                  <b>{coupons.deal_name}</b>
                        
      					<List type="unstyled">
                   <p>{coupons.deal_description}</p>
      					</List>
                </div>
                ))}
      				</div>
      			</Col>
      			<Col sm="6" xs="12">
      				<div className="contactusinfo">
      					<h6>Contact Us</h6>
      					<List type="unstyled">
      						<li>
						    <b>Location:</b><span>{vendorProfileData.address}</span>
						  </li>
						  <li>
						    <b>Phone:</b><span>{vendorProfileData.phone}</span>
						  </li>
						  <li>
						    <b>Email:</b><span>{vendorProfileData.business_email}</span>
						  </li>
						  <li>
						    <b>Website:</b><span>{vendorProfileData.website_link}</span>
						  </li>
      					</List>
      					<div className="socialmenucontact">
      						<a href="#" className="facebookD"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/facebookD.png`} 
	                 alt="Hand Symbol" className="handsymbol" /></a>
	                 <a href="#" className="twitterD"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/twitterD.png`} 
	                 alt="Hand Symbol" className="handsymbol" /></a>
	                 <a href="#" className="envelopeD"><img src={`${process.env.PUBLIC_URL}/assets/images/icons/envelopeD.png`} 
	                 alt="Hand Symbol" className="handsymbol" /></a>
      					</div>
      				</div>
      			</Col>
      			<Col sm="6" xs="12">
      				<div className="jobinfo">
      					<h6>Job Opening</h6>
                        {jobsData.map((jobs , i ) => (
      					<List type="unstyled">
          					<p><b>{jobs.job_name}</b></p>
                            <p>{jobs.job_description}</p>
      					</List>
                        ))}
      				</div>
      			</Col>
      			<Col sm="6" xs="12">
      				<div className="saleinfo">
      					<h6>Items for Sale</h6>
                        <div dangerouslySetInnerHTML={{ __html: saleItemsData.content }} />
      					{/*<List type="unstyled">
      						<li>
						    Roasted prawns coriander
						  </li>
						  <li>Pumpkin and goat cheese</li>
						  <li>Ravioli filled with baked</li>
      					</List>*/}
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>

    </div>
  );
}

export default Detailpage;
