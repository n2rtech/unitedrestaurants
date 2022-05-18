import React,{useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap' 
import { NewPassword,RetypePassword,Done, RememberPassword, CreateAccount} from "../../constant";
import axios from "axios";
import SweetAlert from 'sweetalert2'
import { useHistory } from 'react-router-dom'

const Resetpwd = (props) => {
    const [togglePassword,setTogglePassword] = useState(false)
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [password2,setPwd] = useState("")

    const HideShowPassword  = (tPassword) => {
      setTogglePassword(!tPassword)
    }

    const handleChange = (e) => {
      setPassword(e.target.value)
    }
    const handleChangepwd  = (e) => {
      setPwd(e.target.value)
    }

    const HandleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        email: localStorage.getItem('resetemail'),
        password: password
      };
  
        axios.post("/api/vendors/reset_pswd", userData)
        .then(user => {
          if (user.data.error) {
            SweetAlert.fire(
              'Error!',
               user.data.error,
              'warning'
            )
          } 

          if (user.data.succeed) {
            SweetAlert.fire(
              'Success!',
               user.data.message,
              'success'
            )
            setTimeout(() => {
              props.history.push(`${process.env.PUBLIC_URL}/vendor/login`);
            }, 500);
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
                    <h4>{"Create Your Password"}</h4>
                    <FormGroup>
                      <Label className="col-form-label">{NewPassword}</Label>
                      <Input className="form-control" type={togglePassword ?  "text" : "password" } name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********"/>
                      <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                    </FormGroup>
                    <FormGroup>
                      <Label className="col-form-label">{RetypePassword}</Label>
                      <Input className="form-control" type="password" name="login[password]" value = {password2} onChange = {handleChangepwd} required="" placeholder="*********"/>
                    </FormGroup>
                    <FormGroup className="mb-0">
                      {/* <div className="checkbox ml-3">
                        <Input id="checkbox1" type="checkbox"/>
                        <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                      </div> */}
                      <Button color="primary" className="btn-block" onClick = {HandleSubmit}>{Done}</Button>
                    </FormGroup>
                    <p className="mt-4 mb-0">{"Don't have account?"}<a className="ml-2" href="/signup">{CreateAccount}</a></p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Resetpwd;