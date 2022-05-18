import React from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap' 
import { NewPassword,RetypePassword,Done,EnterMobileNumber,EnterOTP,Resend,ResetPassword, RememberPassword, SignIn,Send} from "../../constant";
import { useState } from 'react';
import {toast} from 'react-toastify';
import axios from "axios";
import SweetAlert from 'sweetalert2'

const Forgetpwd = (props) => {

    const [togglePassword,setTogglePassword] = useState(false)
    const [email,setEmail] = useState("")

    const handleChange = (e) => {
      setEmail(e.target.value)
    }

    const HandleSubmit = (e) => {
      e.preventDefault();

      const userData = {
        email: email
      };
  
        axios.post("/api/vendors/email_verify_pswd", userData)
        .then(user => {
          if (user.data.error) {
            SweetAlert.fire(
              'Error!',
              user.data.error,
              'warning'
            )
          } 

          if (user.data.succeed) {
            localStorage.setItem('resetemail' ,email);
            SweetAlert.fire(
              'Success!',
              user.data.message,
              'success'
            )
          } 
        }).catch((error) => {
          console.log('error',error);
      });
    }
    
    return (
      <Container fluid={true}>
      <Row>
          <Col xs="12">     
            <div className="login-card">
              <div>
                <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
                <div className="login-main"> 
                  <Form className="theme-form">
                    <FormGroup>
                      <Label className="col-form-label">{'Email / Username'}</Label>
                      <Input className="form-control" type="email" name="login[password]" value={email} onChange={(e) => handleChange(e)} required=""/>
                    </FormGroup>
                    
                    <FormGroup className="mb-0">
                      <Button color="primary" className="btn-block" onClick = {HandleSubmit}>{'Submit'}</Button>
                    </FormGroup>
                    <p className="mt-4 mb-0">{"Already have an password?"}<a className="ml-2" href="/vendor/login">{SignIn}</a></p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Forgetpwd;