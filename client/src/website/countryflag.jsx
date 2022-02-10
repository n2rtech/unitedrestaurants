import React,{useState,useMemo} from 'react';
import { Container, Row, Col,List, ListInlineItem } from 'reactstrap'
import axios from 'axios'

const Countryflag = (props) => {

const [countryData, setCountryData] = useState([]);

useMemo(() => {
    axios.get(`/api/Countries/list`)
    .then((getData) => {
      setCountryData(getData.data);
    });
}, []);

const handleCountryClick = (code) => {
  localStorage.setItem('country_code' , code);
}

  const addDefaultSrc = (ev) => {
	  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/flag/noimage.png`;
  }

  return (
      <div className="countryflag">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col sm="12" className="p-0">
          
            <List type="inline">
            {countryData.map((item , i) => (
              <ListInlineItem key={i}>
                { item.code == localStorage.getItem('country_code') ? 
                  <a href={`${process.env.PUBLIC_URL}/home`} onClick = {() => handleCountryClick(item.code)} >
                  <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/assets/images/flag/${item.code.toUpperCase()}.png`} 
               alt="Menu-Icon"/>
                      {item.code.toUpperCase()}
                </a>
                : '' }
                
              </ListInlineItem>
            ))}
            </List>
          </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Countryflag;
