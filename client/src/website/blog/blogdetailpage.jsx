import React,{useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import { BsChatFill } from "react-icons/bs";
import 'react-tabs/style/react-tabs.css';
import '../css/style.css'

const Detailpage = (props) => {

  return (
    <div className="blogsingle">             
      <Container fluid={true} className="p-0">       
      <Row className="m-0">
        <Col sm="12" xs="12">
        <div className="blogmedia">
        	<img src={`${process.env.PUBLIC_URL}/assets/images/blog/blog-single.jpg`} 
                     alt="blog-single" className="img-fluid" />
          </div>  
          <div className="blog-social">
          <List type="inline">
			  <ListInlineItem>
			    <span>23 Nov 2021</span>
			  </ListInlineItem>
			  <ListInlineItem>
			    <span><i className="icofont icofont-user"></i>Mark Jecno</span>
			  </ListInlineItem>
			  <ListInlineItem>
			    <span><i className="icofont icofont-thumbs-up"></i>02Hits</span>
			  </ListInlineItem>
			  <ListInlineItem>
			    <span><i className="icofont icofont-ui-chat"></i>598 Comments</span>
			  </ListInlineItem>
			</List>   
			</div>   
			<h2>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</h2> 
			<hr/> 
			<div className="Comments">
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
			</div> 
			<div className="comment-box">
				<h2>Comment</h2>
				<hr/>
				<List type="inline">
				  <ListInlineItem>
				    <div className="align-self-center media">
				    	<img src={`${process.env.PUBLIC_URL}/assets/images/blog/JolioMark1.jpg`} 
                     alt="blog-single" />
				    	<div className="media-body"><div className="row"><div className="col-md-4"><h6 className="mt-0">Jolio Mark<span> ( Designer ) </span></h6></div><div className="col-md-8"><ul className="comment-social float-left float-md-right"><li class="digits"><i class="icofont icofont-thumbs-up"></i>02 Hits</li><li className="digits"><i className="icofont icofont-ui-chat"></i>598 Comments</li></ul></div></div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div></div>
				  </ListInlineItem>
				  <ListInlineItem>
				    <ul>
				      <li>
				        <div className="media"><img src={`${process.env.PUBLIC_URL}/assets/images/blog/JolioMark2.jpg`} 
                     alt="blog-single" /><div className="media-body"><div className="row"><div className="col-xl-12"><h6 className="mt-0">Jolio Mark<span> ( Designer )</span></h6></div></div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div></div>
				      </li>
				    </ul>
				  </ListInlineItem>
				  <ListInlineItem>
				    <div className="align-self-center media">
				    	<img src={`${process.env.PUBLIC_URL}/assets/images/blog/JolioMark3.jpg`} 
                     alt="blog-single" />
				    	<div className="media-body"><div className="row"><div className="col-md-4"><h6 className="mt-0">Jolio Mark<span> ( Designer ) </span></h6></div><div className="col-md-8"><ul className="comment-social float-left float-md-right"><li class="digits"><i class="icofont icofont-thumbs-up"></i>02 Hits</li><li className="digits"><i className="icofont icofont-ui-chat"></i>598 Comments</li></ul></div></div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div></div>
				  </ListInlineItem>
				  <ListInlineItem>
				    <div className="align-self-center media">
				    	<img src={`${process.env.PUBLIC_URL}/assets/images/blog/JolioMark4.png`} 
                     alt="blog-single" />
				    	<div className="media-body"><div className="row"><div className="col-md-4"><h6 className="mt-0">Jolio Mark<span> ( Designer ) </span></h6></div><div className="col-md-8"><ul className="comment-social float-left float-md-right"><li class="digits"><i class="icofont icofont-thumbs-up"></i>02 Hits</li><li className="digits"><i className="icofont icofont-ui-chat"></i>598 Comments</li></ul></div></div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div></div>
				  </ListInlineItem>
				  <ListInlineItem>
				    <div className="align-self-center media">
				    	<img src={`${process.env.PUBLIC_URL}/assets/images/blog/JolioMark5.png`} 
                     alt="blog-single" />
				    	<div className="media-body"><div className="row"><div className="col-md-4"><h6 className="mt-0">Jolio Mark<span> ( Designer ) </span></h6></div><div className="col-md-8"><ul className="comment-social float-left float-md-right"><li class="digits"><i class="icofont icofont-thumbs-up"></i>02 Hits</li><li className="digits"><i className="icofont icofont-ui-chat"></i>598 Comments</li></ul></div></div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div></div>
				  </ListInlineItem>
				  
				</List>  
			</div>
        </Col>
        </Row>

        
      </Container>
    </div>
  );
}

export default Detailpage;
