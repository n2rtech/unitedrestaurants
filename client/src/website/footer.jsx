import React,{useState} from 'react';
import { Container, Row, Col, List, Form, FormGroup, Input, Label, Button,NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ScrollButton from './ScrollButton.jsx';
import './css/style.css'

const Footer = (props) => {

return (
<div className="mainfooter">
	<Container fluid={true}>
		<Row className="m-0">
			<Col sm="4" xs="12">     
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
		<Col sm="4" xs="12">     
		<div className="footercategory">
			<List type="unstyled">
				<li>
					<a href="#">About us</a>
				</li>
				<li>
					<a href="#">Contact us</a>
				</li>
				<li>
					<a href="#">Customer Service</a>
				</li>
				<li>
					<a href="#">Technical Support</a>
				</li>
				<li>
					<a href="#">Sales</a>
				</li>
			</List>
		</div>
	</Col>
	<Col sm="4" xs="12">     
	<div className="footercategory">
		<List type="unstyled">
			<li>
				<a href="#">Privacy Policy</a>
			</li>
			<li>
				<a href="#">Return Policy</a>
			</li>
			<li>
				<a href="#">Terms of Service</a>
			</li>
			<li>
				<a href="#">Merchant Signup</a>
			</li>
		</List>
	</div>
</Col>
</Row>
<ScrollButton />
</Container>
</div>
);
}

export default Footer;
