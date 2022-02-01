import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody,Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'

const EditAccountsPayable = (props) => {

  const params = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    fetch("/api/accounts-payable/"+`${params.id}` , config)
    .then(res => res.json())
    .then(
      (result) => {              
        setName(result.name);
        setDescription(result.description);
      },
      (error) => {
      })

  }, []);


  const submitForm = (email,password) => {

    const userData = {
      name: name,
      description: description
    };

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
    };

    axios.put(`/api/accounts-payable/${params.id}`,
      userData,
      config
      ) .then(response => {
        toast.success("Accounts Payable updated !")
      })
      .catch(error => console.log('Form submit error', error))
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit List" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"List name"}</Label>
                <Input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)} type="email" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" name="name" value={description} onChange={e => setDescription(e.target.value)} className="form-control"  rows="3"/>
              </FormGroup>
              <FormGroup>
                <Button onClick={() => submitForm(name,description)} color="primary">{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default EditAccountsPayable;