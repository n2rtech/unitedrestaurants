import React from 'react';
import { Container } from 'reactstrap'
import Header from '../header2.jsx'
import Footer from '../footer2.jsx'
import Detailpage from './detailpage.jsx';
import '../css/style.css'
const Details = (props) => {

  return (
      <div className="detailmain">
      	<Header />
      <Container fluid={true} className="p-0">
      	<Detailpage />
      </Container>
      <Footer />
      </div>
  );
}

export default Details;
