import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-toastify';

const EditVendor = (props) => {

const params = useParams();	
const token = localStorage.getItem("token");
const [options,setOptions] = useState([])
const [name , setName] = useState();
const [Email , setEmail] = useState();
const [Mobile , setMobile] = useState();
const [Address , setAddress] = useState();
const [Country , setCountry] = useState();
const [Featured , setFeatured] = useState('1');
const [Hotdeals , setHotdeals] = useState('1');
const [category_id , setCategory] = useState();

  useEffect(() => {
  const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
        };

	axios.get('/api/categories/' , config).then((response) => {
		setOptions(response.data);
	  });

  }, []);
  console.log(options);


  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeMobile = (event) => {
    setMobile(event.target.value);
  }

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  const onChangefeatured = (event) => {
    setFeatured(event.target.value);
  }

  const onChangehotdeals = (event) => {
    setHotdeals(event.target.value);
  }

  const onChangeCategory = (selectedOptions) => {
    if(selectedOptions.length != 0) {
      setCategory(selectedOptions[0].id);
    } else {
      setCategory('');
    }
  }

  const [details , setDetails] = useState();
  useEffect(() => {
    
  const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
        };

  axios.get('/api/vendors/'+`${params.id}` , config).then((response) => {
      setDetails(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setMobile(response.data.mobile);
      setAddress(response.data.address);
      setCountry(response.data.country_id);
      setCategory(response.data.category_id);
    });

  }, []);

  console.log('Vendors' ,details);

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
      
      const bodyParameters = {
        name: name,
        email: Email,
        mobile: Mobile,
        address: Address,
        country_id: 5,
        category_id: category_id,
        featured_business: Featured,
        Hotdeals: Hotdeals,
      };

        console.log('BODY PARAMETERS',bodyParameters);

      axios.put(`/api/vendors/`+`${params.id}`,
        bodyParameters,
        config
      ) .then(response => toast.success("Vendor details are updated !")  )
         .catch(error => console.log('Form submit error', error))

  };

console.log('Category_id' , category_id);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Vendor" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <h5>Show in Hot deals</h5>
              <FormGroup className="m-checkbox-inline custom-radio-ml">
                <div className="radio radio-primary">
                  <Input id="no-deals" type="radio"  onChange={onChangehotdeals} value={Hotdeals} name="radio1" defaultChecked />
                  <Label className="mb-0" for="no-deals">No</Label>
                </div>
                <div className="radio radio-primary">
                  <Input id="yes-deals" type="radio" onChange={onChangehotdeals} value={Hotdeals}  name="radio1" />
                  <Label className="mb-0" for="yes-deals">Yes</Label>
                </div>
              </FormGroup>
              <h5 className="m-t-30">Show in Featured Business</h5>
              <FormGroup className="m-checkbox-inline custom-radio-ml">
                <div className="radio radio-primary">
                  <Input id="no-featured" type="radio" onChange={onChangefeatured} value={Featured} name="radio2" defaultChecked />
                  <Label className="mb-0" for="no-featured">No</Label>
                </div>
                <div className="radio radio-primary">
                  <Input id="yes-featured" type="radio" onChange={onChangefeatured} value={Featured} name="radio2" />
                  <Label className="mb-0" for="yes-featured">Yes</Label>
                </div>
              </FormGroup>
              <div>&nbsp;</div>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput">{"Business Name"}</Label>
                <Input className="form-control"  onChange = {onChangeName} value={name} type="name" placeholder="Mohd Sohrab Khan" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email"}</Label>
                <Input className="form-control" onChange = {onChangeEmail}  value={Email}  type="email" placeholder="sohrab@n2rtechnologies.com" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Phone Number"}</Label>
                <Input className="form-control"  onChange = {onChangeMobile}  value={Mobile}  type="tel" placeholder="8090895865" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Address"}</Label>
                <Input className="form-control"  onChange = {onChangeAddress}  value={Address} type="name" placeholder="C6, Sector 7, Noida" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Business Listed"}</Label>
                <Typeahead
                  id="multiple-typeahead"
                  clearButton
                  labelKey={"name"}
                  onChange={onChangeCategory}
                  // onInputChange={handleInputChange}
                  options={options}
                  placeholder="Choose categories..."
                />
              </FormGroup>
              <FormGroup>
                <Button color="primary" onClick = {handleSubmit}>{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditVendor;