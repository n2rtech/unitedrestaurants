import React,{useState} from 'react';
import { Container, Row, Col, List, Form, FormGroup, Input, Label, Button,NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ScrollButton from './ScrollButton.jsx';
import './css/style.css'

const Footer = (props) => {

return (
<div className="mainfooter">
	<Container fluid={true}>
		<Row className="m-0">
			<Col sm="4" xs="12" className="fmenudesktop">     
			<div className="socialmenu">
				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-google-plus"></i></a>
				<a href="#"><i className="fa fa-linkedin"></i></a>
				<a href="#"><i className="fa fa-instagram"></i></a>
			</div>
			<div className="copyright">
				<p>© Copyright 2021 Gabal Global Group</p>
			</div>
		</Col>
		<Col sm="4" xs="6">     
		<div className="footercategory">
			<List type="unstyled">
				<li>
					<a href={`${process.env.PUBLIC_URL}/aboutus`}>About us</a>
				</li>
				<li>
					<a href={`${process.env.PUBLIC_URL}/contactus`}>Contact us</a>
				</li>
				<li>
					<a href={`${process.env.PUBLIC_URL}/customerservices`}>Customer Service</a>
				</li>
				<li>
					<a href={`${process.env.PUBLIC_URL}/technicalsupport`}>Technical Support</a>
				</li>
				<li>
					<a href={`${process.env.PUBLIC_URL}/sales`}>Sales</a>
				</li>
			</List>
		</div>
	</Col>
	<Col sm="4" xs="6">     
	<div className="footercategory">
		<List type="unstyled">
			<li>
				<a href={`${process.env.PUBLIC_URL}/privacypolicy`}>Privacy Policy</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/returnpolicy`}>Return Policy</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/termsofservice`}>Terms of Service</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/howitwork`}>How it Works</a>
			</li>
			<li>
				<a target = "_blank" href={`${process.env.PUBLIC_URL}/signup`} >Merchant Signup</a>
			</li>
		</List>
	</div>
</Col>
<Col sm="4" xs="12" className="fmenumobile">     
			<div className="socialmenu">
				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-google-plus"></i></a>
				<a href="#"><i className="fa fa-linkedin"></i></a>
				<a href="#"><i className="fa fa-instagram"></i></a>
			</div>
			<div className="copyright">
				<p>© Copyright 2021 Gabal Global Group</p>
			</div>
		</Col>
</Row>
<ScrollButton />
</Container>
</div>
);
}

export default Footer;
