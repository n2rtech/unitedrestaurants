import React from 'react';
import { Container } from 'reactstrap'
import Header from '../header2.jsx'
import Footer from '../footer2.jsx'
import Blogdetailpage from './blogdetailpage.jsx';
import '../css/style.css'
const Blogdetails = (props) => {

  return (
      <div className="detailmain">
      	<Header />
      <Container fluid={true} className="p-0">

      	<Blogdetailpage />
      	
      </Container>
      <Footer />
      </div>
  );
}

export default Blogdetails;
