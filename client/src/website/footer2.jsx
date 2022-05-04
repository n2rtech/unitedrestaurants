import React,{useState,useMemo } from 'react';
import { Container, Row, Col, List } from 'reactstrap'
import ScrollButton from './ScrollButton.jsx';

const Footer2 = (props) => {

	const [socialdata, setSocialData] = useState([]);

  useMemo( async() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    await fetch('/api/site-settings/getsettings' , config)
      .then(res => res.json())
      .then(
        (result) => {  
          setSocialData(result);
        },
        (error) => {
          
        }
        )
  }, []);


	return (
	<div className="mainfooter">
		<Container fluid={true}>
			<Row className="m-0">
				<Col sm="4" xs="12" className="fmenudesktop">     
						<div className="socialmenu">
						<a href={`//${socialdata.facebook_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
						<a href={`//${socialdata.twitter_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
						<a href={`//${socialdata.google_plus_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
						<a href={`//${socialdata.linkedin_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
						<a href={`//${socialdata.instagram_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
					</div>
					<div className="copyright">
						<p>© Copyright 2022 Gabal Global Group</p>
					</div>
				</Col>
				<Col sm="4" xs="6">     
					<div className="footercategory">
						<List type="unstyled">
							<li key="1">
								<a href={`${process.env.PUBLIC_URL}/aboutus`}>About us</a>
							</li>
							<li key="2">
								<a href={`${process.env.PUBLIC_URL}/contact`}>Contact Me</a>
							</li>
							<li key="3">
								<a href={`${process.env.PUBLIC_URL}/contactus`}>Contact us</a>
							</li>
							<li key="4">
								<a href={`${process.env.PUBLIC_URL}/customerservices`}>Customer Service</a>
							</li>
							<li key="5">
								<a href={`${process.env.PUBLIC_URL}/technicalsupport`}>Technical Support</a>
							</li>
							<li key="6">
								<a href={`${process.env.PUBLIC_URL}/sales`}>Sales</a>
							</li>
						</List>
					</div>
				</Col>
				<Col sm="4" xs="6">     
					<div className="footercategory">
						<List type="unstyled">
							<li key="6">
								<a href={`${process.env.PUBLIC_URL}/privacypolicy`}>Privacy Policy</a>
							</li>
							<li key="7">
								<a href={`${process.env.PUBLIC_URL}/returnpolicy`}>Return Policy</a>
							</li>
							<li key="8">
								<a href={`${process.env.PUBLIC_URL}/termsofservice`}>Terms of Service</a>
							</li>
							<li key="9">
								<a href={`${process.env.PUBLIC_URL}/howitwork`}>How it Works</a>
							</li>
							<li key="10">
								<a target = "_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/signup`} >Merchant Signup</a>
							</li>
						</List>
					</div>
				</Col>
				<Col sm="4" xs="12" className="fmenumobile">     
							<div className="socialmenu">
							<a href={`//${socialdata.facebook_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
							<a href={`//${socialdata.twitter_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
							<a href={`//${socialdata.google_plus_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
							<a href={`//${socialdata.linkedin_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
							<a href={`//${socialdata.instagram_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
						</div>
					<div className="copyright">
						<p>© Copyright 2022 Gabal Global Group</p>
					</div>
				</Col>
			</Row>
			<ScrollButton />
		</Container>
	</div>
	);
}

export default Footer2;
