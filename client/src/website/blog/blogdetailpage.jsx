import React,{useState,useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import { BsChatFill } from "react-icons/bs";
import 'react-tabs/style/react-tabs.css';
import '../css/style.css'
import { useParams } from "react-router-dom";
import axios from 'axios'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addLocale(en)


const Detailpage = (props) => {

  const params = useParams();	
  const [blogDetails, setBlogDetails] = useState([]);
  const [vendor_id , setVendorId] = useState(0); 	

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

	axios.get('/api/blogs/'+`${params.id}` , config).then((response) => {
		setBlogDetails(response.data);
		setVendorId(response.data.user_id)
	  });

  }, []);

  const renderHTML = (rawHTML: string) => React.createElement("div", {
	dangerouslySetInnerHTML: {
	   __html: rawHTML
	}
 });


//   const [vendorname, setVendorName] = useState([]);

//   useEffect(() => {
  
//     const config = {
//         headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
//         };

// 	axios.get('/api/vendors/4' , config).then((response) => {
// 		setVendorName(response.data[0].name);
// 	  });

//   }, []);

//   console.log('BloG Details1',vendorname);

  const addDefaultSrc = (ev) => {
	ev.target.src = `${process.env.PUBLIC_URL}/assets/images/blog/blog-single.jpg`;
  }

  return (
	
    <div className="blogsingle">             
      <Container fluid={true} className="p-0">    
	  
      <Row className="m-0">
		  
	  
        <Col sm="12" xs="12">
		
        <div className="blogmedia">
        	<img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/blogs/${blogDetails.image}`} 
                     alt="blog-single" className="img-fluid" />
          </div>  
          <div className="blog-social">
          <List type="inline">
			  <ListInlineItem>
			    <span>
					{ blogDetails != '' ? <ReactTimeAgo date={blogDetails.createdAt} locale="en-US"/>  : '' }
					
					</span>
			  </ListInlineItem>
			  <ListInlineItem>
			    <span><i className="icofont icofont-user"></i>United</span>
			  </ListInlineItem>
			  <ListInlineItem>
			    <span><i className="icofont icofont-thumbs-up"></i>02Hits</span>
			  </ListInlineItem>
			  <ListInlineItem>
			    <span><i className="icofont icofont-ui-chat"></i>598 Comments</span>
			  </ListInlineItem>
			</List>   
			</div>   
			<h2>{blogDetails.name}</h2> 
			<hr/> 
			<div className="Comments">
					
				{renderHTML(`<p>${blogDetails.content}</p>`)}
			</div> 
			{/* <div className="comment-box">
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
			</div> */}
			
        </Col>
        </Row>
		
        
      </Container>
    </div>
  );
}

export default Detailpage;
