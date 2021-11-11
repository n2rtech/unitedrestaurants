import React,{useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import {Password,SignIn, EmailAddress ,CreateAccount, YourName, PrivacyPolicy} from '../../constant';
import { Twitter, Facebook,GitHub } from 'react-feather';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom'

const Register = (props) => {

  const [first_name, setFirstName ] = useState('');
  const [last_name, setLastName ] = useState('');
  const [mobile, setMobile ] = useState('');
  const [address, setAddress ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const [errors, setErrors] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [togglePassword,setTogglePassword] = useState(false)


  const HideShowPassword  = (tPassword) => {
    setTogglePassword(!tPassword)
  }


  const validateForm = () => {

    let errors = {};
    let formIsValid = true;

    if (!first_name) {
      formIsValid = false;
      errors["first_name"] = "field is Required!";
    }

    if (!last_name) {
      formIsValid = false;
      errors["last_name"] = "field is Required!";
    }

    if (!mobile) {
      formIsValid = false;
      errors["mobile"] = "field is Required!";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "field is Required!";
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "field is Required!";
    }
    console.log(errors);
    setErrors(errors);
    return formIsValid;
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = {};

    switch (name) {
      case 'first_name': 
      errors.first_name = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setFirstName(value);
      break;

      case 'last_name': 
      errors.last_name = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setLastName(value);
      break;

      case 'mobile': 
      errors.mobile = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setMobile(value);
      break;

      case 'address': 
      errors.address = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setAddress(value);
      break;

      case 'email': 
      errors.email = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setEmail(value);
      break;

      case 'password': 
      errors.password = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setPassword(value);
      break;

      default:
      break;
    }

    setErrors(errors);
  }

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(errors)) {
      const query = {
        first_name:first_name,
        last_name:last_name,
        mobile:mobile,
        address:address,
        email:email,
        password:password
      }
      axios.post('/api/users/register',query).then(res=>
      { 
        if (res.data.succeed === true) {
          setTimeout(() => {
            toast.error(res.data.message);
          }, 200);
          setTimeout(() => {
            history.push('/login');
          }, 1000);
          setFirstName('');
          setLastName('');
          setMobile('');
          setPassword('');
          setEmail('');
          window.scrollTo(0, 0);
        }else{
          setError(res.data.message);
        } 
      }).catch((error) => {
        if (error.response) {
          setTimeout(() => {
            toast.error(error.response.data.error);
          }, 200);
        } 
      });
    }else{
      console.error('Invalid Form')
      return false;
    }
  }  

    return (
      <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">     
          <div className="login-card">
            <div>
              <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
              <div className="login-main"> 
                <Form className="theme-form" action="#" autoComplete="off">
                  <h4>{"Create your account"}</h4>
                  <p>{"Enter your personal details to create account"}</p>
                  <FormGroup>
                    <Label className="col-form-label pt-0">{YourName}</Label>
                    <div className="form-row">
                      <Col xs="6">
                        <Input className="form-control" name="first_name" value={first_name} onChange={handleChange} type="text" required="" placeholder="First name"/>
                        <div style={{color:'red'}}>{errors.first_name}</div>
                      </Col>                      
                      <Col xs="6">
                        <Input className="form-control" name="last_name" value={last_name} onChange={handleChange} type="text" required="" placeholder="Last name"/>
                        <div style={{color:'red'}}>{errors.last_name}</div>
                      </Col>
                    </div>
                  </FormGroup>

                    <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" name="email" value={email} onChange={handleChange} type="email" required="" placeholder="Test@gmail.com"/>
                    <div style={{color:'red'}}>{errors.email}</div>
                  </FormGroup>

                  <FormGroup>
                    <Label className="col-form-label">Mobile Number</Label>
                    <Input className="form-control" name="mobile" value={mobile} onChange={handleChange} type="number" required="" placeholder="Test@gmail.com"/>
                    <div style={{color:'red'}}>{errors.mobile}</div>
                  </FormGroup>

                  <FormGroup>
                    <Label className="col-form-label">Address</Label>
                    <textarea className="form-control" placeholder="Address" name="address" onChange={handleChange} >{address}</textarea>
                  </FormGroup>

                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <Input className="form-control" name="password" value={password} onChange={handleChange} type={togglePassword ?  "text" : "password" }  required="" placeholder="*********"/>
                    <div style={{color:'red'}}>{errors.password}</div>
                    <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>
                  <div className="form-group mb-0">
                    <Button color="primary" onClick={handleSubmit} className="btn-block" type="submit">{CreateAccount}</Button>
                  </div>
                  <p className="mt-4 mb-0">{"Already have an account?"}<a className="ml-2" href="/login">{SignIn}</a></p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    );
}

export default Register;