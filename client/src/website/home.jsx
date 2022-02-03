import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Hotdeals from './hotdeals.jsx'
import Featured from './featured.jsx'
import Advertise from './advertise.jsx'
import Latestadditions from './latestadditions.jsx'
import Homeblog from './homeblog.jsx'
import Maintenance from './maintenance.jsx'
import {useParams} from 'react-router-dom'

const Home = () => {
  localStorage.setItem('filter','');
  localStorage.setItem('catid','');
  const params = useParams();
  const [maintenance, setMaintenance] = useState([]);
  

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch('/api/site-settings/getsettings' , config)
      .then(res => res.json())
      .then(
        (result) => {  
          setMaintenance(result.maintenance_mode);
        },
        (error) => {
          
        }
        )
  }, []);

  return (
      <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col xs="12" className="p-0">     
            <Header countrycode = {params.id}/>
              { maintenance == 'yes' ?
                <Maintenance></Maintenance> : 
                <>
                  <Hotdeals/>
                  <Featured/>
                  <Advertise/>
                  <Latestadditions/>
                  <Homeblog/>
                </>
              } 
            <Footer />
          </Col>
        </Row>
      </Container>
  );
}

export default Home;
