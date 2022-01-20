import React from 'react';
import {Container,Row,Col} from 'reactstrap' ;

const Signupmessage = (props) => {
    return (
      <Container fluid={true}>
      <Row>
          <Col xs="12">     
            <div className="login-card">
              <div>
                <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
                <div className="login-main"> 
                    Done ! 
                    
                    Your account creating is successfully done. we will send you an email shortly.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Signupmessage; 