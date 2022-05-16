import React,{useState,useEffect} from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import man from '../assets/images/dashboard/profile.jpg';
import {Container,Row,Col,Form,FormGroup,Input,Label,Button,NavItem, NavLink, Nav,TabContent,TabPane} from 'reactstrap'
import {firebase_app,Jwt_token } from '../data/config'
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify';
import {withRouter} from 'react-router-dom'
import {Password,SignIn, EmailAddress,CreateAccount,FIREBASE,AUTH0,JWT } from '../constant';
import SweetAlert from 'sweetalert2'

const Logins = (props) => {
  
    const {loginWithRedirect} = useAuth0()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false) 
    const [selected, setSelected] = useState("jwt");
    const [togglePassword,setTogglePassword] = useState(false)

    const [value, setValue] = useState(
        localStorage.getItem('profileURL' || man)
    );
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    const [role, setRole] = useState(
        localStorage.getItem('Role')
    );

    useEffect(() => {
      
    localStorage.setItem('profileURL', value);
    localStorage.setItem('Name', name);
    localStorage.setItem('Role', role);
    }, [value,name]);

    const loginAuth = async (e) => {
      e.preventDefault();
      setLoading(true)

      try {
          await firebase_app.auth().signInWithEmailAndPassword(email, password).then(function () {
                setValue(man);
                setName("Emay Walter");
                localStorage.setItem('token', Jwt_token);
                setTimeout(() => {
                  props.history.push(`${process.env.PUBLIC_URL}/dashboard/default/`);
                }, 200);
                })
      } catch (error) {
          setTimeout(() => {
              toast.error("Oppss.. The password is invalid or the user does not have a password.");
          }, 200);
      }
    }

    const loginWithJwt = (email,password) => {

      const userData = {
      email: email,
      password: password
    };

      axios.post("/api/users/login", userData)
      // .then(handleResponse)
      .then(user => {
        var decoded = jwt_decode(user.data.token);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setValue(man);
        console.log("result", user.data,decoded);
        setName(decoded.name);
        localStorage.setItem('token', user.data.token);
        localStorage.setItem('id', decoded.id);
        localStorage.setItem('name', decoded.name);
        localStorage.setItem('role', 'admin');
        localStorage.setItem('adminloggedin', true);
        if(decoded.role == 'admin'){
          window.location.href = `${process.env.PUBLIC_URL}/dashboard/admin/`
        } else {
          window.location.href = `${process.env.PUBLIC_URL}/dashboard/user/`
        }
        return user.data;
      }).catch((error) => {
        if (error.response) {
          if(error.response.data.error.email){
            SweetAlert.fire(
              'Error!',
               error.response.data.error.email,
              'warning'
            )          
          }else{
            SweetAlert.fire(
              'Error!',
               error.response.data.error.password,
              'warning'
            )         
          }
          SweetAlert.fire(
            'Error!',
             error.response.data.error,
            'warning'
          )          
        } 
    });
    }

    return (
        <Container fluid={true} className="p-0">
        <Row>
        <Col xs="12">     
          <div className="login-card">
            <div>
              <div className="login-main login-tab"> 
                <Nav className="border-tab flex-column" tabs style={{display:'none'}}>
                  <NavItem>
                    <NavLink className={selected === 'firebase' ? 'active' : ''} onClick={() => setSelected('firebase')}>
                      <img src={require("../assets/images/firebase.svg")} alt="" />
                      <span>{FIREBASE}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={selected === 'jwt' ? 'active' : ''} onClick={() => setSelected('jwt')}>
                    <img src={require("../assets/images/jwt.svg")} alt="" />
                    <span>{JWT}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={selected === 'auth0' ? 'active' : ''} onClick={() => setSelected('auth0')}>
                    <img src={require("../assets/images/auth0.svg")} alt="" />
                    <span>{AUTH0}</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={selected} className="content-login">
                  <TabPane  className="fade show" tabId={selected === "firebase" ? "firebase" : "jwt"}>
                    <Form className="theme-form">
                      <a className="logo" href="index.html">
                        <img className="img-fluid for-light" src={require("../assets/images/logo/login.png")} alt=""/>
                      </a>
                      <h4>{selected === "firebase" ? "Sign In With Firebase" : "Admin Login"}</h4>
                      <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input className="form-control" placeholder="Enter Email Address" type="email" required="" onChange={e => setEmail(e.target.value)} />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Password}</Label>
                        <Input className="form-control" autoComplete="new-password" placeholder="Enter Password" type={togglePassword ?  "text" : "password"} onChange={e => setPassword(e.target.value)} required=""/>
                        <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                      </FormGroup>
                      <div className="form-group signButton">
                        {selected === "firebase" ?
                        <Button color="danger" className="btn-block" disabled={loading ? loading : loading} onClick={(e) => loginAuth(e)}>{loading ? "LOADING..." : SignIn }</Button>
                        :
                        <Button color="danger" className="btn-block" onClick={() => loginWithJwt(email,password)}>Login</Button>
                        }
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane  className="fade show" tabId="auth0">
                    <div className="auth-content">
                        <img src={require("../assets/images/auth-img.svg")} alt="" />
                        <h4>{"Welcome to login with Auth0"}</h4>
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}</p>
                        <Button color="info" onClick={loginWithRedirect}>{AUTH0}</Button> 
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
        </Row>
        </Container>
    );
}

export default withRouter(Logins);
