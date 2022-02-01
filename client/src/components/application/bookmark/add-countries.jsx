import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'

const AddCountries = (props) => {

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const token = localStorage.getItem("token");

  const submitForm = (email,password) => {

    const userData = {
      name: name,
      code: code
    };

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };

       axios.post(`/api/countries`,
            userData,
            config
          ) .then(response => {
            toast.success("Country added !")
          })
 
             .catch(error => console.log('Form submit error', error))


    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add Country" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Country name"}</Label>
                <Input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Country Code"}</Label>
                <Input className="form-control" name="code" value={code} onChange={e => setCode(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Button onClick={() => submitForm(name,code)}  color="primary">{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddCountries;