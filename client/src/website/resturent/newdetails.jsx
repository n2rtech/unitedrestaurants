import React,{Fragment,useState,useEffect} from 'react';
import { Container } from 'reactstrap'
import Header from '../header.jsx'
import Footer from '../footer.jsx'
import NewDetailpage from './newdetailpage.jsx';
import '../css/style.css'
const Newdetails = (props) => {

  return (
      <div className="detailmain">
      	<Header />
      <Container fluid={true} className="p-0">

      	<NewDetailpage />
      	
      </Container>
      <Footer />
      </div>
  );
}

export default Newdetails;
