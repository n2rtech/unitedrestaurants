import React,{useState,useEffect,Fragment} from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Container, Row, Col, FormGroup, Input,List,ListInlineItem } from 'reactstrap'
import './css/style.css'
import Menu from './menu.jsx'
import Countryflag from './countryflag.jsx'
import GoogleTranslate from './googletranslate';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SweetAlert from 'sweetalert2'
var base64 = require('base-64');

const Header = (props) => {

const history = useHistory()
const [showNav, setShowNav] = useState();
const [countryData, setCountryData] = useState([]);
const [categoryData, setCategoryData] = useState([]);

const OnChangeCountry = (event) => {
  localStorage.setItem('country_code' , event.target.value);
  window.location.reload(false);
}

useEffect( async() => {
    await axios.get(`/api/Countries/list`)
    .then((getData) => {
      setCountryData(getData.data);
    });

    await axios.get(`/api/categories/list`)
    .then((result_data) => {
      const result = result_data.data;
      setCategoryData(result);
    }); 

  }, []);

  const [logo, setLogo] = useState([]);
  const [socialdata, setSocialData] = useState([]);

  useEffect( async() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
        await fetch('/api/site-settings/getsettings' , config)
      .then(res => res.json())
      .then(
        (result) => {  
          setLogo(result.logo);
          setSocialData(result);
        },
        (error) => {
          
        }
        )
  }, []);

  const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/mainlogo.png`;
}

const [searchinput, setSearchInput] = useState(localStorage.getItem('filter'));
const [catid, setCatid] = useState(localStorage.getItem('catid'));

const OnChangeSearch = (event) => {
    setSearchInput(event.target.value);
}

const OnChangecatid = (event) => {
  setCatid(event.target.value);
}

const HandleSearch = (searchvalue , catid) => {

    const cat = parseInt(catid);
    const country_code = localStorage.getItem('country_code');

    if(isNaN(cat)) {
      SweetAlert.fire(
        'Alert!',
        'Choose category first.',
        'danger '
      )
    } else {
      localStorage.setItem('catid' , catid);
      localStorage.setItem('filter' , searchvalue);
      const url = base64.encode(`&country=${country_code}&category=${catid}&filter=${searchvalue}`)
      history.push(`/search/${url}`);

      window.location.reload(false);
    }
}

const navItems = [
    
    // <a href="/restaurants">
    //   Restaurants
    // </a>,
    // <a href="#">
    //   Food Markets
    // </a>,
    // <a href="#">
    //   Beer & Alcohol
    // </a>,
    // <a href="#">
    //   Services
    // </a>,
    // <a href="#">
    //   Suppliers
    // </a>,
    // <a href="#">
    //   Buy & Sell
    // </a>,
    // <a href="#">
    //   Jobs
    // </a>,
    // <a href="#">
    //   Videos
    // </a>,
    // <a href="#">
    //   Others
    // </a>,
  ];

const title = <div className="searchbar">
                <FormGroup>
                    <div className="InputGroup">
                      <Input className="form-control" placeholder="Search in the department..." type="search"/>
                    </div>
                </FormGroup>
                <div className="mbcountry">
                          <div className="filtercountry">Filter by Country</div>
                          <List type="inline">
                            <ListInlineItem>
                              <a href={`${process.env.PUBLIC_URL}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/USA.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href={`${process.env.PUBLIC_URL}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/CANADA.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href={`${process.env.PUBLIC_URL}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/UNITED-KINGDOM.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href={`${process.env.PUBLIC_URL}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/ITALY.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href={`${process.env.PUBLIC_URL}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/AUSTRALIA.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href={`${process.env.PUBLIC_URL}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/SPAIN.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                          </List>
                        </div>
              </div>;
                      
  

  return (
      <div className="mainheader">
        <div className="desktopheader">
        <Container fluid={true}>
        <Row className="m-0">
          <Col sm="2">
            <div className="mainlogo">
              <a href="/home">
              <img className="img-fluid" onError = {addDefaultSrc}
               src={`${process.env.PUBLIC_URL}/api/uploads/site/${logo}`} 
               alt="logo"/>
               </a>
            </div>
          </Col>
          <Col sm="10">
            <Row>
              <Col sm="8">
                <div className="topcenter">
              <div className="textlogo"><img className="img-fluid" 
               src={`${process.env.PUBLIC_URL}/assets/images/textlogo.png`} 
               alt="text-logo"/></div>
               <div className="discountline">Discounts and Advertising Platform</div>
               <div className="savemore">Save more, directly order from the store</div>
               

            </div>
              </Col>
              <Col sm="4">
            <div className="topright">
              <div className="topmenu">
                <div className="clickable opacity0">
                  <p>visitors</p>
                  <a href={`${process.env.PUBLIC_URL}/visitors`}>click here</a>
                </div>
                <div className="clickable">
                  <p>visitors</p>
                  <a href={`${process.env.PUBLIC_URL}/visitors`}>click here</a>
                </div>
              <div className="clickable">
                <p>Vendors</p>
                <a target = "_blank"  rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/vendor/login`} >login here</a>
              </div>
              </div>
                <div className="socialmenu">
                  <a href={`//${socialdata.facebook_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                  <a href={`//${socialdata.twitter_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                  <a href={`//${socialdata.google_plus_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
                  <a href={`//${socialdata.linkedin_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                  <a href={`//${socialdata.instagram_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                </div>
              
            </div>
          </Col>
          <Col sm="12">
            <Row>
              <Col sm="8">
                <div className="searchbar">
                 <FormGroup>
                <div className="InputGroup">
                    <Input type="select" id="selectcategory" onChange = {OnChangecatid}>
                      <option value="0">Select Category</option>
                      {categoryData && categoryData.map((item,i) => (
                        <option  key={i} value={item.id} selected = { catid === item.id }>{item.name}</option>
                      ))}
                    </Input>
                <Input className="form-control" type="search" value = {searchinput} onChange = {OnChangeSearch}/>
                <button id="search" className="btn btn-primary" onClick={() => HandleSearch(searchinput,catid)}>Search</button>
                </div>
              </FormGroup>
               </div>
              </Col>
              <Col sm="4">
                <div className="language-country">
                <div className="language">
                <GoogleTranslate />
              </div>
              
              <div className="country">
                <select aria-label="Default select example" onChange = {OnChangeCountry} className="form-control">
                {countryData.map((country , i ) => (
                  <Fragment key={i}>
                  <option value={country.code} selected = { localStorage.getItem('country_code') === country.code }>{country.name}</option>
                  </Fragment>
                  ))}
                </select>
              </div>
              </div>
              </Col>

              <Col sm="9">
                <Menu></Menu>
              </Col>
              <Col sm="3">
                <div className="countryflag">
                  <Countryflag></Countryflag>
                </div>
              </Col>
            </Row>
          </Col>
            </Row>
          </Col>

          
          
          </Row>
        </Container>
        </div>

<div className="mobileheader">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col xs="2" className="p-0">
            <div className="togglebtn">
              <MenuIcon onClick={() => setShowNav(true)} />
              <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
            </div>
          </Col>
          <Col xs="5" className="pr-0">
          <div className="language-country">
            <div className="language">
                <select aria-label="Default select example" className="form-control">
                  <option>Language</option>
                  <option value="1">English</option>
                  <option value="2">Hindi</option>
                </select>
              </div>
            </div>
          </Col>
          <Col xs="5" className="pl-0">
          <div className="language-country">
            <div className="country">
               <select aria-label="Default select example" onChange = {OnChangeCountry} className="form-control">
                {countryData.map((country , i ) => (
                  <Fragment key={i}>
                  <option value={country.code} selected = { localStorage.getItem('country_code') === country.code }>{country.name}</option>
                  </Fragment>
                  ))}
                </select>
              </div>
            </div>
          </Col>
          <Col xs="12" className="p-0">
            <div className="topcenter">
              <div className="textlogo"><a href="/home"><img className="img-fluid" 
               src={`${process.env.PUBLIC_URL}/assets/images/textlogo.png`} 
               alt="text-logo"/></a></div>
               <div className="discountline">Discounts and Advertising Platform</div>
               <div className="savemore">Save more, directly order from the store</div>
            </div>
          </Col>
          <Col xs="12" className="p-0">
            <div className="topright">
              <div className="topmenu">
                <div className="clickable opacity0">
                  <p>visitors</p>
                  <a href={`${process.env.PUBLIC_URL}`}>click here</a>
                </div>
                <div className="clickable">
                <p>visitors</p>
                <a href={`${process.env.PUBLIC_URL}`}>click here</a>
              </div>
              <div className="clickable">
                <p>Vendors</p>
                <a target = "_blank" href={`${process.env.PUBLIC_URL}/vendor/login`} >login here</a>
              </div>
              </div>
              <div className="socialmenu">
                  <a href={`//${socialdata.facebook_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                  <a href={`//${socialdata.twitter_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                  <a href={`//${socialdata.google_plus_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
                  <a href={`//${socialdata.linkedin_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                  <a href={`//${socialdata.instagram_links}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
              </div>
              
            </div>
          </Col>

          </Row>
        </Container>
        </div>
      </div>
  );
}

export default Header;
