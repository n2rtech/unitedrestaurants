import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'

const EditCountries = (props) => {

  const params = useParams();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    fetch("/api/countries/"+`${params.id}` , config)
    .then(res => res.json())
    .then(
      (result) => {              
        setName(result.name);
        setCode(result.code);
      },
      (error) => {
      })

  }, []);


  const submitForm = (email,password) => {

    const userData = {
      name: name,
      code: code
    };

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    axios.put(`/api/countries/${params.id}`,
      userData,
      config
      ) .then(response => {
        toast.success("Country updated !")
      })

      .catch(error => console.log('Form submit error', error))
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Country" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Country Name"}</Label>
                <Input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}  type="text" />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Country Code"}</Label>
                <Input className="form-control" name="code" value={code} onChange={e => setCode(e.target.value)}  type="text" />
              </FormGroup>

              <FormGroup>
                <Button onClick={() => submitForm(name,code)} color="primary" >{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default EditCountries;