import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import {FaArrowCircleUp} from 'react-icons/fa';
import './css/style.css'


const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className="scrolltopbtn">
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </div>
  );
}
  
export default ScrollButton;