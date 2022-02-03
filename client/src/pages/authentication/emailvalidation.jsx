import React,{useEffect} from 'react';
import {Container,Row,Col} from 'reactstrap' ;
import { useHistory,useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios';

const Emailvalidation = (props) => {
  const history = useHistory()
  const params = useParams()
  useEffect(() => {
    const config = {
      headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
      };

      axios.get(`/api/vendors/verfiyemail/` + `${params.id}`,
        config
      ).then(response => {
        toast.success("Email Successsfully Verfied!")
          setTimeout(() => {
            history.push(`/vendor/login`);
          }, 1000);
      }).catch(error => console.log(`Form submit error`, error))
 
  }, []);

    return (
      <Container fluid={true}>
      <Row>
          <Col xs="12">     
            <div className="login-card">
              <div>
                <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
                <div className="login-main"> 
                    You have successfully verified!!!
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Emailvalidation; 