import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container,Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddAccountsPayable = (props) => {

   const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem("token");

  const submitForm = (email,description) => {

    const userData = {
      name: name,
      description: description
    };

    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };

    axios.post(`/api/accounts-payable`,
      userData,
      config
      ) .then(response => {
        toast.success("Account Payable added !");
        setTimeout(function() {
          history.push("/dashboard/admin/accounts-payable");
        }, 1500); 
      }).catch(error => console.log('Form submit error', error))
    }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Add New List" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"List name"}</Label>
                <Input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}  type="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" className="form-control" name="description" value={description} onChange={e => setDescription(e.target.value)} rows="3"/>
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

export default AddAccountsPayable;