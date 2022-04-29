import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './typeahead-one';
import axios from 'axios'
import { BasicDemo,MultipleSelections,CustomSelections,Remote } from "../../../constant";
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom'


const AddVendor = (props) => {

const multiple = false
    const [options,setOptions] = useState([])

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
  const [last_name, setLastName ] = useState('');
  const [mobile, setMobile ] = useState('');
  const [address, setAddress ] = useState('');
  const [email, setEmail ] = useState('');
  const [category_id, setCategoryId ] = useState('');
  const [country_id, setCountryId ] = useState('');
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

    if (!category_id) {
      formIsValid = false;
      errors["category_id"] = "Category is Required!";
    }

    if (!country_id) {
      formIsValid = false;
      errors["country_id"] = "Country is Required!";
    }
    setErrors(errors);
    console.log(errors);
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

      /*case 'address': 
      errors.address = 
      value.length < 1
      ? 'field is Required!'
      : '';
      setAddress(value);
      break;*/

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
        address:address,
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
            history.push('/dashboard/admin/all-vendors');
          }, 1000);
          setFirstName('');
          setMobile('');
          setPassword('');
          setEmail('');
          setCategoryId('');
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
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Vendor" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput">{"Business Name"}</Label>
                <Input className="form-control" name="first_name" value={first_name} onChange={handleChange} type="name" />
                <div style={{color:'red'}}>{errors.first_name}</div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Username/Email"}</Label>
                <Input className="form-control" name="email" value={email} onChange={handleChange}  type="email" />
                <div style={{color:'red'}}>{errors.email}</div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Password"}</Label>
                <Input className="form-control" name="password" value={password} onChange={handleChange} type="password" />
                <div style={{color:'red'}}>{errors.password}</div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                <Input className="form-control" name="mobile" value={mobile} onChange={handleChange} type="number" />
                <div style={{color:'red'}}>{errors.mobile}</div>
              </FormGroup>
              {/*<FormGroup>
                <Label>{"Address"}</Label>
                <textarea className="form-control" rows="3"  defaultValue={address} name="address" onChange={handleChange} cols="3"></textarea>
                 <div style={{color:'red'}}>{errors.address}</div>
              </FormGroup>*/}
              <FormGroup>
                    <Label>{"Please Select Country"}</Label>
                    <Input type="select" onChange={countrychange} name="country_id" className="form-control digits" id="exampleFormControlSelect8">
                    
                     <option>Select Country</option>
                    {countryData.map((country , i ) => (
                      <Fragment>
                      <option value={country.id}>{country.name}</option>
                    </Fragment>
                      ))}
                    </Input>
                  <div style={{color:'red'}}>{errors.country_id}</div>
                  </FormGroup>
                  <FormGroup>
                    <Label>{"Please Select Business Type"}</Label>
                    <Input type="select" onChange={categorychange} name="category_id" className="form-control digits" id="exampleFormControlSelect7">
                    
                    <option>Select Category</option>
                    {categoryData.map((category , i ) => (
                      <Fragment>
                      <option value={category.id}>{category.name}</option>
                    </Fragment>
                      ))}
                    </Input>
                  <div style={{color:'red'}}>{errors.category_id}</div>
                    
                  </FormGroup>
              {/*<FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Listed"}</Label>
                <Typeahead
                  id="multiple-typeahead"
                  clearButton
                  defaultSelected={options.slice(0, 5)}
                  labelKey={"name"}
                  multiple
                  options={options}
                  placeholder="Choose categories..."
                />
              </FormGroup>*/}
              <FormGroup>
                <Button color="primary" onClick={handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default AddVendor;