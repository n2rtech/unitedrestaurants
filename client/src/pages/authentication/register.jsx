import React,{useState,useEffect,Fragment} from 'react';
import {Container,Row,Col,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import {Password,SignIn, BusinessEmailAddress ,CreateAccount, BusinessName } from '../../constant';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'

const Register = (props) => {

  const [categoryData, setCategoryData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`/api/categories/all`)
    .then((getData) => {
      setCategoryData(getData.data);
    });
    axios.get(`/api/Countries/list`)
    .then((getData) => {
      setCountryData(getData.data);
    });
  }

  const [first_name, setFirstName ] = useState('');
  const [mobile, setMobile ] = useState('');
  const [ownermobile, setOwnerMobile ] = useState('');
  const [address, setAddress ] = useState('');
  const [email, setEmail ] = useState('');
  const [category_id, setCategoryId ] = useState('');
  const [country_id, setCountryId ] = useState('');
  const [password, setPassword ] = useState('');

  const [errors, setErrors] = useState('');
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

    if (!mobile) {
      formIsValid = false;
      errors["mobile"] = "field is Required!";
    }

    if (!ownermobile) {
      formIsValid = false;
      errors["ownermobile"] = "field is Required!";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "field is Required!";
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "field is Required!";
    }

    if (!category_id) {
      formIsValid = false;
      errors["category_id"] = "Category is Required!";
    }

    if (!country_id) {
      formIsValid = false;
      errors["country_id"] = "Country is Required!";
    }
    setErrors(errors);
    return formIsValid;
  }

  console.log(errors);

  const categorychange = (event) => {
    setCategoryId(event.target.value);
  };

  const countrychange = (event) => {
    setCountryId(event.target.value);
  };

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

      case 'mobile': 
      errors.mobile = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setMobile(value);
      break;

      case 'ownermobile': 
      errors.mobile = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setOwnerMobile(value);
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
        name:first_name,
        last_name:'.',
        mobile:mobile,
        ownermobile: ownermobile,
        address:localStorage.getItem('vendor_address') || '',
        longitude:localStorage.getItem('vendor_longitude') || 0,
        latitude:localStorage.getItem('vendor_latitude') || 0,
        email:email,
        category_id:category_id,
        country_id:country_id,
        password:password
      }

      console.log(query);
      axios.post('/api/vendors/register',query).then(res=>
      { 
        if (res.data.succeed === true) {
          setTimeout(() => {
            toast.success(res.data.message);
          }, 200);
          setTimeout(() => {
            history.push('/message');
          }, 1000);
          setFirstName('');
          setMobile('');
          setOwnerMobile('');
          setPassword('');
          setEmail('');
          setCategoryId('');
          window.scrollTo(0, 0);
        }else{
         
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
              <div className="login-main vRegistration"> 
                <Form className="theme-form" action="#" autoComplete="off">
                  <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/></a></div>
                  <h4>{"Create your Vendor account"}</h4>
                  <FormGroup>
                    <div className="form-row">
                      <Col xs="12">
                        <Input className="form-control" name="first_name" value={first_name} onChange={handleChange} type="text" required="" placeholder="Business/Restaurant name"/>
                        <div style={{color:'red'}}>{errors.first_name}</div>
                      </Col>                      
                    </div>
                  </FormGroup>
                  <FormGroup>
                  <div style={{color:'red'}}>{errors.category_id}</div>
                    <Input type="select" onChange={categorychange} name="category_id" className="form-control digits" id="exampleFormControlSelect7">
                    <option>Business Category</option>
                    {categoryData.map((category , i ) => (
                      <Fragment>
                      <option value={category.id}>{category.name}</option>
                    </Fragment>
                      ))}
                    </Input>
                    
                  </FormGroup>
                  
                    <FormGroup>
                    <Input className="form-control" name="email" value={email} onChange={handleChange} type="email" required="" placeholder="Business email"/>
                    <div style={{color:'red'}}>{errors.email}</div>
                  </FormGroup>

                  <FormGroup>
                    <Input className="form-control" name="mobile" value={mobile} onChange={handleChange} type="number" required="" placeholder="Business phone number"/>
                    <div style={{color:'red'}}>{errors.mobile}</div>
                  </FormGroup>

                  <FormGroup>
                    <Input className="form-control" name="ownermobile" value={ownermobile} onChange={handleChange} type="number" required="" placeholder="Owner phone number"/>
                    <div style={{color:'red'}}>{errors.ownermobile}</div>
                  </FormGroup>
                  <FormGroup>
                  <div style={{color:'red'}}>{errors.country_id}</div>
                    <Input type="select" onChange={countrychange} name="country_id" className="form-control digits" id="exampleFormControlSelect8">
                     <option>Select Country</option>
                    {countryData.map((country , i ) => (
                      <Fragment>
                      <option value={country.id}>{country.name}</option>
                    </Fragment>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <textarea className="form-control" placeholder="Location" id="search_address" defaultValue={address} name="address" onChange={handleChange} ></textarea>
                    <Input type="hidden" id="vendor_address_lan" name="latitude" ></Input>
                    <Input type="hidden" id="vendor_address_lat" name="longitude" ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input className="form-control" name="password" value={password} onChange={handleChange} type={togglePassword ?  "text" : "password" }  required="" placeholder="Password"/>
                    <div style={{color:'red'}}>{errors.password}</div>
                    <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>
                  <div className="form-group signButton">
                    <Button color="danger" onClick={handleSubmit} className="btn-block" type="submit">{CreateAccount}</Button>
                  </div>
                  <p className="mt-4 mb-0">{"Already have an account?"}<a className="ml-2" href="/vendor/login">{SignIn}</a></p>
                </Form>
              </div>
          </div>
        </Col>
      </Row>
      </Container>
    );
}

export default Register;